import React from 'react';
import MovieCard from '../MovieCard/movieCard';
import './movieList.css';

function movieList({movieList,search,rate}) {
    return (
        <div className="movieList">
            {
            movieList.filter (el=>el.title.includes(search.trim()) ).map((el,key) => < MovieCard key={el.id} movie={el}/> )
        }
            
        </div>
    )
}

export default movieList;