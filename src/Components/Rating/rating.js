import React from 'react';
import './rating.css';
function rating({rate} ) {
    const ratingArr = [1,2,3,4,5];
    return (
        <div className="rating">
            {ratingArr.map((el)=> el <=rate ? <i class="fas fa-play-circle"></i> :<i class="far fa-play-circle"></i> )}
        </div>
    )
}

export default rating