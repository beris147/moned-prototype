import Loading from '@/components/ui/loading';
import React from 'react';

export default function LoadingChatPages() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Loading />
    </div>
  );
}
