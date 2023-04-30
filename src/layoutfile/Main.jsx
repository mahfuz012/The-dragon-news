import React from 'react';
import Navbars from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../shared/LeftNav';
import RightNav from '../shared/RightNav';


const Main = () => {



    return (
        <div className='container'>
 <Navbars></Navbars>

<div className="container">
<div className="row border justify-content-center">

  
<div className="col-sm-3" >
<LeftNav/>
</div>

<div className="col-sm-6">
    <Outlet></Outlet>
</div>
<div className="col-sm-3">
  <RightNav/> 
</div>


</div>
</div>
            <Footer></Footer>




        </div>
    );
};

export default Main;