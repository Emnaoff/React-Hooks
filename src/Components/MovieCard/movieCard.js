import React from 'react';
import {Card,Button} from 'react-bootstrap';
import Rating from '../Rating/rating';
import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
    return (
        <div className="movie-card">

<Card style={{ width: '18rem',backgroundColor: 'black' ,color: 'white' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.type}
    </Card.Text>
    <Card.Text>
      <Rating rate={movie.rating}/>
    </Card.Text>
    
    <Link to={`/Details/${movie.id}`}>
  <Button variant="secondary">View More Details</Button>
  </Link>
      
       
  </Card.Body>
</Card>
            
        </div>
    )
}

export default MovieCard;