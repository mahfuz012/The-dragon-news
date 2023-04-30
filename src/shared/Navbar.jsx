import React from 'react';
import moment from 'moment';
import Logo from '../assets/logo.png'
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar2 from './Navbar2';
import NavHeader from './NavHeader';
import MarqueTool from './MarqueTool';
const Navbars = () => {
    return (
  <div>

<NavHeader />
<MarqueTool />
<Navbar2 />









        </div>
     
    );
};

export default Navbars;