import React, { Component, useState } from "react";
//import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
         createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const currentUser = userCredential.user;
          alert('Register successfull!');
          navigate('/login');
        });
    }

    const handleLoginClick = () => {
        console.log('Button clicked!'); // 添加这行来检查点击事件是否被触发
        props.onFormSwitch('login');
        navigate('/login');
    }
    
    
    return (
        <div className="auth-form-container">
           <h2>Register</h2>
         <form className="register-form" action="" onSubmit={handleSubmit}>
             <label>Full Name</label>
             <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="Your Name" />
             <label htmlFor="email">Your Email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = "youremaill@email.com" id = "email" name = "email" /> 
             <label htmlFor="password">Password</label>
             <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />  
             <button className="login-dic" type="submit"><strong>Register</strong></button>
         </form>
         <button className="link-btn" onClick={handleLoginClick}>Already have an account? Login here!</button>
       </div>
   )

}