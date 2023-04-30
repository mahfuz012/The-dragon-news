import moment from 'moment';
import React from 'react';
import Logo from '../assets/logo.png'
const NavHeader = () => {
    return (
        <div className='border container d-flex flex-column align-items-center my-3'>


        <img className='w-50' src={Logo}  />
        <p><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
    
   </div>
    );
};

export default NavHeader;