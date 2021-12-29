import React,{useState}from 'react';
import {Card,Button,Modal} from 'react-bootstrap';
import Rating from '../Rating/rating';

function MovieCard({movie}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="warning" onClick={handleShow}>
        view Trailer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {movie.trailer}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default MovieCard