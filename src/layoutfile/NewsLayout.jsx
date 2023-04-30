import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';
import Navbars from '../shared/Navbar';
import NavHeader from '../shared/NavHeader';
import RightNav from '../shared/RightNav';

const NewsLayout = () => {
 





    return (
        <div className='container-fluid'>
            <NavHeader />
            <div className="row">
 <div className="col-sm-8 border  p-3">
 <Outlet />

  </div>
  <div className="col-sm-3">
  <RightNav />
  </div>

  </div>


        </div>
    );
};

export default NewsLayout;