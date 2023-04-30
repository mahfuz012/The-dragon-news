import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import swal from 'sweetalert';



const Register = () => {
const [valid,setValid] = useState([])
const [errorMessage,setErrorMessage] = useState('')
const [Passwordmatch,setPasswordmatch] = useState('')

const {resiter,user,LogoutSubmit} = useContext(AuthContext)
const navigator = useNavigate()

console.log(user);

function SubmitForm(e){
    e.preventDefault()
    setErrorMessage('')
 
  const email= e.target.email.value
  const displayName = e.target.text.value
  const password = e.target.password.value
  const confirm = e.target.confirm.value


if(password === confirm){

    setPasswordmatch("")
resiter(email,password,displayName)
.then((userCredential)=>{
    const user = userCredential.user;
    e.target.reset()
     
    LogoutSubmit()
    swal({
        text: "successfully completed",
        icon: "success",
      });

      navigator("/user/login")

})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorMessage){
        setErrorMessage("You are use same email") 

    }

})


}else{
   setPasswordmatch("password is not same")
 }
    


}






function passwordValidation(e){
const password = e.target.value;
if(!/(?=.*[A-Z])/.test(password) ){
    setValid("password should be UpperCase")
    SetBorderRed(true)
}
else if(! /(?=.*[0-9])/.test(password)){
    setValid("password should be number")
}
else if(!/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(password)){
    setValid("password should be spceial character") 
}
else if(password.length < 6){
    setValid("password should be 6 digit or more ") 
}else{
    setValid("") 
}





}








 return (
        <>
<form onSubmit={SubmitForm}  className='shadow w-25  mx-auto my-5 '>
            <h1 className='font-bold text-danger'>Register</h1>

 <input   className='border my-2 w-100 p-2 rounded' type='text' placeholder='type your name' name = 'text' ></input>  <br/>

 <input className='border w-100  my-2 p-2 rounded' type='email' placeholder='type your email' name='email' required ></input>  <br/>

 <input onInput={passwordValidation} className={`border w-100  my-2 p-2 rounded' `} type='password' placeholder='type your password' name='password' required></input>  <br/>

 <small className='text-danger fw-bold'>{valid}</small>
 <input className='border w-100  my-2 p-2 rounded' type='password' placeholder='confirm your password' name='confirm'></input>  <br/>
<small className='text-danger fw-bold'>{Passwordmatch}</small>
 <input className='border w-100 text-white bg-danger my-2 p-2 rounded' type='submit' placeholder='type your name' ></input>  
 <p className='text-danger fw-bold'>{errorMessage}</p>
 <p className='mt-3'>Login if you have registered before, <Link className='text-danger fw-bold' to={"/user/login"}>Login</Link></p> 
 </form>    

        </>
    );
};

export default Register;