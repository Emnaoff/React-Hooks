import React from 'react';
import {Button} from 'react-bootstrap';

function Details({what,match,history}) {
    const found =what.find ((el)=>el.id == match.params.id);
    return (
        <div className="Dets">

            <h2>{found.title} </h2>
            <p>{found.description}</p>
            <br/>

            <Button variant="danger" onClick={()=> history.goBack()}>Go Back</Button>
            <Button variant="warning" onClick={()=> history.push('/')}>Go Home</Button> 
            <br/>
            
        </div>
    )
}

export default Details;
