import React from 'react';
import UserPage from '../components/user-page';

export default function ChatPage() {
  return (
    <UserPage>
      <div style={{ display: 'flex', height: '100%' }}>
        <aside
          style={{
            width: '250px',
            borderRight: '1px solid #ccc',
            padding: '1rem',
          }}
        >
          <h2>Recent Chats</h2>
          <ul>
            <li>Chat 1</li>
            <li>Chat 2</li>
            <li>Chat 3</li>
          </ul>
        </aside>
        <main style={{ flex: 1, padding: '1rem' }}>
          <h2>Conversation</h2>
          <div
            style={{
              border: '1px solid #ccc',
              height: '100%',
              padding: '1rem',
            }}
          >
            {/* Empty canvas for conversation */}
          </div>
        </main>
      </div>
    </UserPage>
  );
}
