import React from "react";
import { useState } from "react";
import "../App.css"
const Form = () => {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [errorUserName,setErrorUserName]=useState('');
  const [errorPassword,setErrorPassword]=useState('');
  const [errorEmail,setErrorEmail]=useState('');
  const [errorConfirmPassword,setErrorConfirmPassword]=useState('');
  const [userColor,setUserColor]=useState('');
  const [passwordColor,setPasswordColor]=useState('');
  const [emailColor,setEmailColor]=useState('');
  const [confirmPasswordColor,setConfirmPasswordColor]=useState('');
  const validate=e=>{
    e.preventDefault();
    if(username.length>8){
        setErrorUserName('');
        setUserColor('green');
    }else{
        setErrorUserName('Username must be more than 8 characters');
        setUserColor('red');
    }
    if(password.length>8){
        setErrorPassword('');
        setPasswordColor('green');
    }else{
        setErrorPassword('Password must be more than 8 characters');
        setPasswordColor('red');
    }
    if(email.includes('@gmail')){
        setErrorEmail('');
        setEmailColor('green');
    }else{
        setErrorEmail('Email must be a Gmail account');
        setEmailColor('red');
    }
    if(password!=='' && password===confirmPassword){
        setErrorConfirmPassword('');
        setConfirmPasswordColor('green');
    }else{
        setErrorConfirmPassword('Passwords do not match');
        setConfirmPasswordColor('red');
    }
  }
  return <div>
  <div className="card">
     <div className="card-image">
     </div>
     <form >
        <input type="text" placeholder="Name" style={{borderColor:userColor}} value={username} onChange={(e)=>setUserName(e.target.value)} />
        <p className="error">{errorUserName}</p>
        <input type="email" placeholder="Email" style={{borderColor:emailColor}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <p className="error">{errorEmail}</p>
        <input type="password" placeholder="Password" style={{borderColor:passwordColor}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <p className="error">{errorPassword}</p>
        <input type="password" placeholder="Confirm Password" style={{borderColor:confirmPasswordColor}} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <p className="error">{errorConfirmPassword}</p>
        <button type="submit" className="submit-btn" onClick={validate}>Submit</button>
     </form>
  </div>
  </div>;
};

export default Form;
