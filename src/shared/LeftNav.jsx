import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {

const [categories,setCategories] = useState([]);

useEffect(()=>{
   fetch("https://dragon-news-resource-mahfuz012.vercel.app/categories")
   .then(res =>res.json())
   .then(data => setCategories(data))

},[])




    return (
        <div className='border'>
      <h3 className='fw-bold text-center my-2'>All Caterogy</h3>
      <h2 className='border p-3 text-center bg-info my-3'>National News</h2>



      <div>
  {
    categories.map(p=>

   <Link className="LinkFocus text-decoration-none text-dark fw-bold "
   
   to={`/categories/${p.id}`}><li className ="border p-3 text-center list-unstyled">{p.name}</li></Link>
    
    
    )
  }


      </div>





        </div>
    );
};

export default LeftNav;