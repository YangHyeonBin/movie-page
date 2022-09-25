import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className='page-container'>
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '300px', height: '450px' }}
          src={IMG_BASE_URL + state.poster_path}
          alt={`${title} 포스터`}
        />
        <div style={{ marginLeft: '16px' }}>
          <h2
            style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}
          >
            {title}({state.original_title})
          </h2>
          <span style={{ display: 'block', marginBottom: '16px' }}>
            별점: {state.vote_average}
          </span>
          <p>{state.overview}</p>
        </div>
      </div>
    </div>
  );
}
