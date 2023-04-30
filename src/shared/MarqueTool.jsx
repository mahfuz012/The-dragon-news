import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueTool = () => {
    return (
        <div style={{backgroundColor:"#F3F3F3"}} className='border d-flex rounded px-3 py-2'>

        <button style={{width:"10rem"}} className='btn  btn-danger'>Latest News</button>
       
        <Marquee className='mt-3' pauseOnHover={true}>
       <p>React, the popular JavaScript library for building user interfaces, can render not only text, but also complex components like charts, forms, and menus.</p>
       ...............
       <p>With React, you can easily combine multiple components to create rich and interactive web pages that respond to user actions in real time.</p>
       </Marquee>
       
       </div>
    );
};

export default MarqueTool;