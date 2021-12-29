import React from 'react';
import MovieCard from '../MovieCard/movieCard';
import './movieList.css';

function movieList({movieList}) {
    return (
        <div className="movieList">
            {
            movieList.map((el,key) => <MovieCard key={el.id} movie={el}/> )
        }
            
        </div>
    )
}

export default movieList