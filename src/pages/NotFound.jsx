import React from 'react';
import { useNavigate } from 'react-router-dom';

// NotFound 페이지는 자주 사용되는 페이지가 아니어서 인라인으로 스타일 적용한다!

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='page-container'>
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '64px 0 40px ',
          fontSize: '32px',
          fontWeight: '700',
        }}
      >
        <span style={{ marginBottom: '16px' }}>
          해당 페이지를 찾지 못했습니다.
        </span>
        <span style={{ fontSize: '24px', lineHeight: '1.6' }}>
          주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
        </span>
      </p>
      <button
        type='button'
        onClick={() => navigate('/')}
        style={{
          fontSize: '20px',
          lineHeight: '1.6',
          color: 'white',
          backgroundColor: '#22254b',
          borderRadius: '32px',
          padding: '4px 16px',
          cursor: 'pointer',
        }}
      >
        메인 페이지로 이동
      </button>
    </div>
  );
}
