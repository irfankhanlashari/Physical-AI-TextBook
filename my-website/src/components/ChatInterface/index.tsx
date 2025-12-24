import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatInterface.module.css';
import { API_ENDPOINTS } from '../../config/api';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  sources?: any[];
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [targetLanguage, setTargetLanguage] = useState('en'); // Default to English
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputText,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Get any selected text from the page
      const selectedText = window.getSelection?.()?.toString()?.trim() || '';

      // Call your backend API
      const response = await fetch(API_ENDPOINTS.CHAT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: inputText,
          session_id: sessionId,
          selected_text: selectedText, // Include any selected text as context
          target_language: targetLanguage,
          use_personalization: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: data.response,
        role: 'assistant',
        timestamp: new Date(),
        sources: data.sources,
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (data.session_id && !sessionId) {
        setSessionId(data.session_id);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: 'Sorry, there was an error processing your request.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Header with title and language selector */}
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
              {message.sources && message.sources.length > 0 && (
                <div className={styles.sources}>
                  <details>
                    <summary>Sources</summary>
                    {message.sources.map((source, idx) => (
                      <div key={idx} className={styles.source}>
                        <strong>{source.title}</strong>
                        <p>{source.content?.substring(0, 100)}...</p>
                      </div>
                    ))}
                  </details>
                </div>
              )}
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
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <div className={styles.inputContainer}>
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
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;