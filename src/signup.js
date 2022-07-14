import React, { useState } from 'react'
//import { useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./config/firebase";
import pic2 from './pictures/in/pic2.jpg'
import './App.css'

function Signup() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

      let history = useNavigate();

    const Register = () => {

        createUserWithEmailAndPassword(auth, email, password).then(() => {
            history("/login");
        }).catch((error) => {
            console.log(error)
        })


    };
    return (
        <div>
            <div class="one" id="one">

                <div class="header" id="header">

                    <div class="headerText" id="headerText">
                        <h1>BOOKING WITH WE HOUSE AND RELAX</h1>

                    </div>
                    <div class="headerLogin" id="headerLogin">
                    <Link to="/addHotel" > Admin   </Link>
                    </div>
                    

                </div>
            </div>


            <div class="Pic" id="Pic">



                <div class="log" id="log">

                    <h1>Register</h1>

                    <h2>Email:</h2>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />



                    <h3>Password:</h3>

                    <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />




                    <h4>Already have an account? <Link to="/login">Login</Link></h4>
   

                    <button onClick={Register}>Sign up</button>


                </div>


                <img src={pic2} alt="PP" />
            </div>

        </div>
    )
}

export default Signup

