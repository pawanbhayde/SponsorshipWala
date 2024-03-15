import React, { useState, useEffect } from 'react';
import axios from "axios";
import Image from 'next/image';
import "./style.css"
import  {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from  "../../utils/APIRoutes";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confrimPassword: "",  
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  useEffect(() => {
    if (localStorage.getItem('sw-user')){
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post( registerRoute, {
        username,
        email,
        password,
      });
      if(data.status === false) {
        toast.error(data.msg , toastOptions)
      }
      if(data.status === true) {
        localStorage.setItem('sw-user', JSON.stringify(data.user));
      }
  }
}

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if(password !== confirmPassword) {
      toast.error("Password and Confirm Password should be the same", toastOptions
      );
      return false;
    }else if (username.length <3 ) {
      toast.error("Username should be greater than 3 Characters", toastOptions)
      return false;
    }else if (password.length <8 ) {
      toast.error("Password should be equal to or greater than 8 Characters", toastOptions);
      return false;
    }else if (email===""){
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  }

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:event.target.value})
  }

  return <div className='h'>
    <div className='container'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <Image src={"/abc.jpg"} alt="Logo" width={60} height={60} />
          <h1>Sponsorship Wala</h1>
        </div>
        <input 
          type="text" 
          placeholder='Username' 
          name='username' 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type="email" 
          placeholder='Email' 
          name='email' 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type="password" 
          placeholder='Password' 
          name='password' 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type="password" 
          placeholder='Confirm Password' 
          name='confirmPassword'  
          onChange={(e) => handleChange(e)} 
        />
        <button type='submit'>Create User</button>
        <span>
          Already have an account? &nbsp; 
           <a href={"/login"}>Login</a> 
          </span>
      </form>
    </div>
    <ToastContainer />
  </div>
}
