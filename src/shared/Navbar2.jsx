import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';




const Navbar2 = () => {

  const {user,LogoutSubmit,applystore} = useContext(AuthContext)
  



console.log(applystore);





    return (
        <Navbar className='w-100 ' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className=''>

        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="fw-bold mx-auto">
            <Nav.Link to={"/"} as={Link} >Home</Nav.Link>
            <Nav.Link >About</Nav.Link>
            <Nav.Link >Career</Nav.Link>
            <Nav.Link to = {"/user/bookmark"} as={Link} >Bookmark : {applystore?.length}</Nav.Link>
        
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
{
  user ?
         <button onClick={LogoutSubmit} className='btn btn-danger'>logout</button>:
          
          <Link to={"/user/login"}><button className='btn btn-primary'>Login</button></Link>

}


            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navbar2;