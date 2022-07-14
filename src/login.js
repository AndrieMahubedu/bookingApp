//import { Link, useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import pic2 from './pictures/in/pic2.jpg'
import './App.css'
import { auth } from "./config/firebase";



function Login() {


      let history = useNavigate();

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState("");

   

      

      const login = (()=>{

            signInWithEmailAndPassword(auth, email, password).then(()=>{
                  history("/bookhere");
            }).catch((err)=>{
                  console.log(err);

            })
      })
            
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

                    <h1>Log In</h1>

                    <h2>Email:</h2>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />



                    <h3>Password:</h3>

                    <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />


                    <h4>Already have an account? <Link to="/">Register</Link></h4>
                    
                    <button onClick={login}>Login</button><br/>
                    
                    <Link to="/forgotPassword" className="float-right text-danger"> Forgot Password   </Link>
                </div>     
               
                
               
        
             <img src={pic2} alt="PP" />
                   
                           
       </div>
  
  </div>
  )
}

export default Login