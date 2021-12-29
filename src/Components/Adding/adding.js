import React, {useState} from 'react';
import {Button,Modal,Form} from 'react-bootstrap';

export default function Adding({addMovie}) {

    /*The modals functions*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    /*Adding a movie*/ 
   const [title,setTitle]=useState('');
   const [type,setType]=useState('');
   const [description,setDescription]=useState('');
   const [image,setImage]=useState('');
   const [rating,setRating]=useState('');
   const [trailer,setTrailer]=useState('');


   const addNewMovie =()=>{
          addMovie({title,type,description,image,rating,trailer})
          handleClose()
   };
   
   
  
    return (
      <>
      <div className="add">
        <Button variant="warning" onClick={() => setShow(true)}>
          Help us to make our Movies Libray richer !
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Your Movie Proposition right here ...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <>

          {/*The form to add a movie*/}
          <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="Title"  onInput={(el)=>setTitle(el.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Description</Form.Label>
    <Form.Control type="email" placeholder="Brief description" onInput={(el)=>setDescription(el.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Poster</Form.Label>
    <Form.Control type="email" placeholder="The link for official poster here" onInput={(el)=>setImage(el.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Rate your experience with the movie here"onInput={(el)=>setRating(el.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Type</Form.Label>
    <Form.Control type="email" placeholder="Rate your experience with the movie here"onInput={(el)=>setType(el.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Trailer </Form.Label>
    <Form.Control type="email" placeholder="Rate your experience with the movie here"onInput={(el)=>setTrailer(el.target.value)} />
  </Form.Group>
  
</Form>

</>
          </Modal.Body>

          {/*The modals buttons*/}

          <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addNewMovie}>
            Add
          </Button>
        </Modal.Footer>

        </Modal>
        </div>
      </>
    );
  }
  
  