import React from 'react';
import {FaGoogle,FaFacebookF } from 'react-icons/fa';
import {BsGithub,BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';
import Qzone from './Qzone';

const RightNav = () => {
    return (
        <div className='border '>
           <h3 className='px-2 mt-2'>Login ID</h3>

           <div className='text-center'>
          <button className=' btn-primary btn border my-1'> <FaGoogle className=' mx-1 mb-1' /> Login with Google</button>
           <button className='btn-danger btn border '><BsGithub className='mb-1 mx-1' /> Login with Github</button>
           </div>


            <div className='mt-4'>
                <h3 className='my-2 mx-2'>Find Us</h3>

                <div>

              <div className='w-100 px-2 py-3 border '><FaFacebookF className='text-primary mb-1 mx-1' />Login with Facebook</div>
              <div className='w-100 px-2 py-3 border '><BsTwitter className='text-info mb-1 mx-1' /> Login with Twitter</div>
              <div className='w-100 px-2 py-3 border '><BsInstagram className='text-danger mb-1 mx-1' /> Login with Instagram</div>


            
                </div>
            </div>

<Qzone />






        </div>
    );
};

export default RightNav;