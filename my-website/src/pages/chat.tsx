import React from 'react';
import Layout from '@theme/Layout';
import ChatInterface from '../components/ChatInterface';

export default function ChatPage(): JSX.Element {
  return (
    <Layout title="Chat with Physical AI Textbook" description="Interactive chat interface">
      <main>
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Chat with Physical AI Textbook</h1>
          <p>Ask questions about the Physical AI textbook content</p>
          <ChatInterface />
        </div>
      </main>
    </Layout>
  );
}