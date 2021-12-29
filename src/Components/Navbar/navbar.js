import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';


function navbar() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
<Container fluid>
<Navbar.Brand href="#">Tunflix </Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
  <Nav
    className="me-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll
  >
    <Nav.Link href="#action1">Home</Nav.Link>
    <Nav.Link href="#action2">Latest</Nav.Link>
    <NavDropdown title="Favourites" id="navbarScrollingDropdown">
    </NavDropdown>
  </Nav>
 
</Navbar.Collapse>
</Container>
</Navbar>
    </div>
    )
}
export default navbar