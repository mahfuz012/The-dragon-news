import React from 'react';
import Imgage1 from '../assets/qZone1.png'
import Imgage2 from '../assets/qZone2.png'
import Imgage3 from '../assets/qZone3.png'
import bg from '../assets/bg.png'


const Qzone = () => {
    return (
        <div className=' mt-3 bg-secondary '>
            <h2 className='px-2 text-white'>Qzone</h2>
            <div>
            <img src={Imgage1} />
            <img src={Imgage2} />
            <img src={Imgage3} />
            </div>

           <div className='position-relative  mt-5 '>
         <img className='w-100' src={bg}/>

    <div className='position-absolute top-0  mt-5 text-center'>
<h1 className='text-white'>Create an Amazing Newspaper</h1>
<p className='text-white mt-5 px-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
<button className='btn btn-danger p-3 mt-auto'>Learn More </button>



    </div>
           </div>

        </div>
    );
};

export default Qzone;