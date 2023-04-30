import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../AuthProvider';

const Logins = () => {
    const navigation = useNavigate()
    
const location = useLocation()
const from = location?.state?.from?.pathname || "/"
console.log(location);

const [errorMessage,setErrorMessage] = useState('')

const {loginUser,loading} = useContext(AuthContext)

function loginSubmit(e){
    setErrorMessage('')
    e.preventDefault()
    const email= e.target.email.value
    console.dir(e.target);
    const password = e.target.password.value

    loginUser(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        e.target.reset()
        navigation(from,{ replace : true})
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      

       if(errorCode === "auth/wrong-password"){
        setErrorMessage("password not match, please again") 
       }else if(errorCode === "auth/user-not-found"){
        setErrorMessage("You have no account, register Now ") 
       }
   



        
      });

}







    return (
        <> 

  <form onSubmit={loginSubmit} className='shadow w-25 mx-auto my-5 py-5 '>
 <h1 className='text-danger font-bold'>Login</h1>


 <input className='border w-100 my-2 p-2 rounded' type='email' placeholder='type your email' name ='email' required>
    </input>  <br/>

 <input className='rounded border w-100  my-2 p-2 rounded' type='password' placeholder='type your password' name = 'password' required></input>  <br/>

 

 <input  className=' border rounded-2 my-2 p-2 rounded-md bg-danger text-white' type='submit' ></input>  
 <p className='text-secondary'>If Registration has not yet, then <Link to={'/user/register'} className='text-danger fw-bold'>Registration</Link></p>

<p>{errorMessage}</p>
            

 </form>    




        </>
    );
};

export default Logins;