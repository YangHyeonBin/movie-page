import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w1280';

export default function Movie(props) {
  const navigate = useNavigate();

  // props로 영화 상세페이지에 영화 관련 모든 정보를 넘겨주기 위해, 일부 props만 받아오는 것에서 props 전체를 받아오는 것으로 수정
  const movieItemClickHandler = () => {
    navigate(`/movie/${props.title}`, { state: props });
  };

  return (
    <div className='movie-container' onClick={movieItemClickHandler}>
      <img
        src={IMG_BASE_URL + props.poster_path}
        alt={`${props.title} 포스터`}
      />
      <div className='movie-info'>
        <h2>{props.title}</h2>
        <p>{props.vote_average}</p>
      </div>
    </div>
  );
}
