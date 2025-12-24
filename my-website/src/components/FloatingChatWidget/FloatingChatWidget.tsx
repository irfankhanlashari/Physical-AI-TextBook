import React, { useState, useEffect, useRef } from 'react';
import styles from './FloatingChatWidget.module.css';

const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: string; content: string; role: 'user' | 'assistant'; timestamp: Date}>>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState('en'); // Default to English
  const [showTextSelectionPopup, setShowTextSelectionPopup] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const widgetRef = useRef<HTMLDivElement>(null);

  // Toggle chat window open/close
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle text selection
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim() !== '') {
        const selectedText = selection.toString().trim();
        if (selectedText.length > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          setSelectedText(selectedText);
          setPopupPosition({ x: rect.left, y: rect.top - 10 });
          setShowTextSelectionPopup(true);
        }
      } else {
        setShowTextSelectionPopup(false);
      }
    };

    const handleMouseUp = () => {
      setTimeout(handleSelection, 0); // Use timeout to ensure selection is complete
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Hide popup when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showTextSelectionPopup &&
          !target.closest(`.${styles.textSelectionPopup}`) &&
          !target.closest(widgetRef.current)) {
        setShowTextSelectionPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTextSelectionPopup]);

  // Handle sending a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: inputText,
      role: 'user' as const,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Use the selected text if we're in the popup context, otherwise get fresh selection
      const textToSend = selectedText || window.getSelection?.()?.toString()?.trim() || '';

      // Call your backend API
      const response = await fetch('http://localhost:8000/api/v1/chat/public', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: inputText,
          session_id: '',
          selected_text: textToSend, // Include selected text as context
          target_language: targetLanguage,
          use_personalization: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant message
      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        content: data.response,
        role: 'assistant' as const,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: `error-${Date.now()}`,
        content: 'Sorry, there was an error processing your request.',
        role: 'assistant' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setShowTextSelectionPopup(false); // Close popup after sending
    }
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen &&
          !target.closest(`.${styles.floatingChatContainer}`) &&
          !target.closest(`.${styles.floatingChatButton}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.floatingChat} ref={widgetRef}>
      {showTextSelectionPopup && (
        <div
          className={styles.textSelectionPopup}
          style={{ left: popupPosition.x, top: popupPosition.y }}
        >
          <button
            className={styles.askButton}
            onClick={() => {
              setInputText(`Explain this: ${selectedText.substring(0, 100)}...`);
              setIsOpen(true);
              setShowTextSelectionPopup(false);
            }}
          >
            💬 Ask
          </button>
        </div>
      )}

      {isOpen ? (
        <div className={styles.floatingChatContainer}>
          <div className={styles.chatHeader}>
            <h3>Physical AI Assistant</h3>
            <div className={styles.headerControls}>
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className={styles.languageSelector}
              >
                <option value="en">English</option>
                <option value="roman urdu">Roman Urdu</option>
              </select>
              <button
                className={styles.closeButton}
                onClick={toggleChat}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${styles[message.role]}`}
              >
                <div className={styles.messageContent}>
                  {message.content}
                </div>
                <div className={styles.timestamp}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.assistant}`}>
                <div className={styles.typingIndicator}>
                  Assistant is typing...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className={styles.inputForm}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about Physical AI..."
              className={styles.input}
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !inputText.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11.5L8.5 9.5L10 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9.5L13.5 7.5L15 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 7.5L18.5 5.5L20 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 13.5L18.5 11.5L20 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15.5L13.5 13.5L15 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 17.5L8.5 15.5L10 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19.5L13.5 17.5L15 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 4.5C9.5 3.39543 10.3954 2.5 11.5 2.5H12.5C13.6046 2.5 14.5 3.39543 14.5 4.5V19.5C14.5 20.6046 13.6046 21.5 12.5 21.5H11.5C10.3954 21.5 9.5 20.6046 9.5 19.5V4.5Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <button
          className={styles.floatingChatButton}
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H16.5L15.5 19C15.4333 19.1333 15.3542 19.2583 15.2625 19.375C15.1708 19.4917 15.0667 19.5958 14.95 19.6875L13.5 20.7C13.2333 20.9 12.9333 21 12.6 21C12.2667 21 11.9667 20.9 11.7 20.7L9.3 19.1C9.03333 18.9 8.8 18.6333 8.6 18.3C8.4 17.9667 8.3 17.6 8.3 17.2V16C8.3 15.4696 8.51071 14.9609 8.88579 14.5858C9.26086 14.2107 9.76957 14 10.3 14H13V12C13 11.2044 13.3161 10.4413 13.8787 9.87868C14.4413 9.31607 15.2044 9 16 9H17V7C17 6.46957 17.2107 5.96086 17.5858 5.58579C17.9609 5.21071 18.4696 5 19 5C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12L5 16H2V9L5 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default FloatingChatWidget;