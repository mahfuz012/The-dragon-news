import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {


    const getData = useParams();

const getLoaderData = useLoaderData()

    
    const findData = getLoaderData.find(p=> p._id === getData.idno )


    const {title,image_url,details} = findData






    return (
        <div className='container'>
            <img src={image_url}  className='w-100 my-3'/>
            <h3 className='pe-5'>{title}</h3>
            <p>{details}</p>
            
    <Link to={"/categories/0"} ><button className='btn btn-danger'>All in this Categories</button></Link>
        </div>
    );
};

export default NewsDetails;