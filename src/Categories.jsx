import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import News from './HomeNews/News';
import { AuthContext } from './AuthProvider';


const Categories = () => {
const {BookmarADd} = useContext(AuthContext)
const {idno} = useParams();
const getdata = useLoaderData();

const data= getdata.filter(p=> Number(p.category_id) === Number(idno) )




 
















    return (
        <div>
        {
        (Number(idno) === 0)?

 getdata?.map(p=><News  BookmarADd={BookmarADd} data={p} />  ) : 

     (data.length === 0)? <img src='https://siliconangle.com/files/2013/02/no-data.png' className='p-sm-5'/> : data?.map(p=><News BookmarADd={BookmarADd} data={p} />  )

        }
        </div>
    );
};

export default Categories;