import React from 'react';
import {Button} from 'react-bootstrap';

function footer() {
   
    return (
        <div className="foot" style={{color: 'white',backgroundColor:'black',textAlign:'center', fontFamily:'Verdana, Geneva, Tahoma, sans-serif',paddingBottom: '10px'}}>
 <hr/>
 <p>Tunflix</p>
 <hr/>
 <p>The official Website for illimitate Tunisian movies.</p>
 
 <p>Join our Newsletter for more.</p>
 
 <a href="https://mail.yahoo.com/d/folders/1" ><Button  variant="warning">You are one Click away!</Button></a>
 <hr/>
 <p style={{color: 'grey'}}>Copyrights © Tunflix 2021.</p>
            
        </div>
    )
}

export default footer;



