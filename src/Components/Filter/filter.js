import React  from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import Rating from '../Rating/rating';
import  './filter.css';

function Filter({setsearch,setrate,rate}) {

  

    return (
        <div>
          <div className="btn-group">

    

    </div>
             <Form className="d-flex">
    <FormControl
      type="search"
      placeholder="i.e Titanic"
      className="me-2"
      aria-label="Search"

      
      onChange={(e)=>setsearch((e.target.value))}
      
    />
    
    <Button variant="warning" >Search</Button>
    
    
  </Form>


         <Rating rate={rate} setrate={setrate}/>

        </div>
    )
}

export default Filter;