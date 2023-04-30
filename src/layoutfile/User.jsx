import React from 'react';
import Navbar2 from '../shared/Navbar2';
import NavHeader from '../shared/NavHeader';
import { Outlet } from 'react-router-dom';

const User = () => {
    return (
        <div className='container'>
   <div className="row"><Navbar2 /></div>

   <div className="row  ">
 <Outlet />
  
   </div>

        </div>
    );
};

export default User;