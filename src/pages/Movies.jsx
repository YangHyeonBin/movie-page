import React from 'react';
import Movie from '../components/Movie';
import { dummy } from '../dummyMovies';

export default function Movies() {
  return (
    <div className='movies'>
      {dummy.results.map((item, index) => (
        <Movie
          key={item.id + index}
          title={item.title}
          original_title={item.original_title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </div>
  );
}
