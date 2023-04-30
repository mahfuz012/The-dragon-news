import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase init app';

export const  AuthContext = createContext([])

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoader] = useState(true) 

 const auth = getAuth(app);

function resiter(email,password){
    setLoader(true)
return createUserWithEmailAndPassword(auth, email, password)
}

function loginUser(email,password){
    setLoader(true)
return signInWithEmailAndPassword(auth, email, password)
}

function LogoutSubmit(){
 return signOut(auth)
}




useEffect(()=>{

    const unsubcribe = onAuthStateChanged(auth, currentUser =>{
     setUser(currentUser )
     setLoader(false)
   })
 

       return () => {
        return unsubcribe()
       }


 },[])





 
const [applystore,setApply] = useState([])

useEffect(()=>{
   const getID = JSON.parse(localStorage.getItem('bookmark'))
    if(getID){
        setApply(getID)
    }
 },[])





 function BookmarADd (props) {
const getId = JSON.parse(localStorage.getItem("bookmark"))
  
  const findData = getId?.find(p=>p._id === props._id)
  
  if(findData){
  
   const setNewData = getId?.filter(p=>p._id !== findData._id)
   
   localStorage.setItem("bookmark",JSON.stringify(setNewData))

   setApply(setNewData)
   return
  }
  
  let newValues = [...applystore];
  newValues.push(props);
  setApply( newValues  );
  
  localStorage.setItem("bookmark",JSON.stringify(newValues))
  
  }
  



const deliveryData={resiter,user,loginUser,LogoutSubmit,loading,BookmarADd,applystore}

    return (
        <div>

            <AuthContext.Provider value={deliveryData}> 
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;