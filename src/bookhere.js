import React from 'react'
import pic4 from './pictures/out/out1.jpg'
import pic5 from './pictures/out/out6.jpg'
import pic6 from './pictures/out/out7.jpg'
import pic7 from './pictures/out/out14.jpg'
import pic8 from './pictures/out/out8.jpg'
import pic9 from './pictures/out/out13.jpg'
import pic10 from './pictures/gallery/pic1.jpg'
import pic13 from './pictures/gallery/pic3.jpg'
import pic14 from './pictures/gallery/pic4.jpg'
import pic17 from './pictures/gallery/pic5.jpg'
import pic16 from './pictures/gallery/pic6.jpg'
import pic18 from './pictures/gallery/pic7.jpg'
import pic19 from './pictures/gallery/pic8.jpg'
import pic20 from './pictures/gallery/pic9.jpg'
import pic21 from './pictures/gallery/pic10.jpg'
import pic22 from './pictures/gallery/pic11.jpg'
import pic23 from './pictures/gallery/pic12.jpg'
import { DefaultContext } from 'react-icons';
import book from './bookhere.module.css'
import { useRef } from "react";
import './App.css'
import pics from './gallery.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Book() {

     const [showBtn, setShowBtn] = useState(false)

     useEffect(() => {
          window.addEventListener("scroll", () => {
               if (window.scrollY > 300) {
                    setShowBtn(true);
               } else {
                    setShowBtn(false);
               }
          });
     }, [])

     const scrollTop = () => {
          window.scrollTop({
               top: 10,
               behavior: "smooth"
          })
     }

     const about = useRef(null);
     const contact = useRef(null);
     const photos = useRef(null);


     const scrollToSection = (elementRef) => {
          window.scrollTo({
               top: elementRef.current.offsetTop,
               behavior: 'smooth'
          })
     }


     const [gallery] = useState([{ id: 1, image: pic10 },
     { id: 2, image: pic13 }, { id: 2, image: pic14 },
     { id: 2, image: pic16 }, { id: 2, image: pic18 },
     { id: 2, image: pic17 }, { id: 2, image: pic18 },
     { id: 2, image: pic19 }, { id: 2, image: pic10 },
     { id: 2, image: pic20 }, { id: 2, image: pic21 },
     { id: 2, image: pic22 }, { id: 2, image: pic23 }])
     const axios = require("axios")
     let [bookhere, setEmployeeList] = useState([])
     useEffect(() => {
          axios.get('http://localhost:3000/empoyee/getAll').then((response) => setEmployeeList(response.data))
          console.log(bookhere)
     })

     return (
          <div className={book.back}>
              
               <div class="first" id="first">

                    <div class="topt" id="topt">
                         <div class="topt" id="topt1">
                              <h>BOOKING WITH WE HOUSE AND RELAX</h>
                         </div>



                        
                         <div class="topt" id="topt8">
                         <Link to="/hotel" > Proceed to book   </Link>
                         </div>
                         <div class="topt" id="topt5">
                         <Link to="/login" > Logout   </Link>
                         </div>





                    </div>
                    <div class="out" id="out">

                         <div class="out1" id="out1">

                              <img src={pic4} alt="P" />
                         </div>
                         <div class="out2" id="out2">
                              <img src={pic5} alt="P" />
                              <h>HELLO.AT HOUSE & RELAX</h>
                              <img src={pic6} alt="P" />
                              <img src={pic7} alt="P" />

                         </div>
                         <div class="out3" id="out3">

                              <div class="book" id="book">
                                   <div class="out4" id="out4">
                                        <div class="box" id="box">
                                             <label>Check-in:</label>

                                        </div>
                                        <div class="box" id="box2">

                                             <input type="date" placeholder="Check-in-Date" />
                                        </div>

                                   </div>
                                   <div class="out4" id="out4">
                                        <div class="box" id="box">
                                             <label>Check-out:</label>

                                        </div>
                                        <div class="box" id="box2">

                                             <input type="date" placeholder="Check-in-Date" />
                                        </div>

                                   </div>

                                   <div class="out4" id="out4">
                                        <div class="box" id="box">
                                             <label>Adults:</label>

                                        </div>
                                        <div class="box" id="box2">

                                             <input type="number" placeholder="0" />
                                        </div>

                                   </div>
                                   <div class="out4" id="out4">
                                        <div class="box" id="box">
                                             <label>Children:</label>

                                        </div>
                                        <div class="box" id="box2">

                                             <input type="number" placeholder="0" />
                                        </div>

                                   </div>
                              </div>



                              <div class="out5" id="out5">
                                   <button>Search</button>
                              </div>



                         </div>
                         <div class="under" id="under">
                              <div class="under" id="under1">
                                   <img src={pic8} alt="P" />
                                   <h>WELCOME TO BOOKING WITH WE HOUSE AND RELAX</h>
                                   <p><br /><br /><br />The rooms at the BOOKING WITH WE HOUSE AND RELAX are new, well-lit and inviting. <br />
                                        Our reception staff will be happy to help you during your stay in with us,<br />
                                        suggesting itineraries, guided visits and some good restaurants in the historic centre.<br />
                                        <br />
                                        <br />

                                        While you enjoy a cocktail by the swimming pool on the rooftop terrace, <br />
                                        you will be stunned by the breathtaking view of the bay of Isola Bella.<br />
                                        Here, during your summer stays, our bar serves traditional Sicilian dishes, snacks and salads.
                                        <br />
                                        <br />
                                        At the end of a stairway across from the hotel, the white pebbles on the beach of Isola Bella <br />
                                        await you as well as beach facilities with lounge chairs and umbrellas and areas with free access<br />
                                        to the pristine clear sea that becomes deep just a few metres from the shore . . .</p>

                                   <button>More Info</button>
                                   <div class="under" id="under2">
                                        <img src={pic9} alt="P" />



                                   </div>


                              </div>






                         </div>



                    </div>
                    <div class="gallery" id="gallery" >
                         <h>GALLERY</h>
                    </div>
                    <div className={pics.flexcontainer}>
                         {gallery.map((infoo, xid) => (
                              <div className={pics.formgroup} key={xid}>
                                   <div className={pics.userdata}><img src={infoo.image} alt="P" /></div>

                              </div>
                         ))}

                    </div>
                    <div class="last" id="last">
                         <div class="fot" id="fot1">
                              <div class="fot" id="fot2">
                                   <h>COMMUNITY
                                   </h>
                                   <p>Diversity & Belonging<br />

                                        Against Discrimination<br />
                                        Accessibility<br />
                                        Airbnb Associates<br />
                                        Frontline Stays<br />
                                        Guest Referrals<br />
                                        Gift cards<br />
                                        Airbnb.org</p>
                              </div>
                              <div class="fot" id="fot2">
                                   <h>HOST
                                   </h>
                                   <p>Host your home<br />

                                        Host an Online Experience<br />
                                        Host an Experience<br />
                                        Responsible hosting<br />
                                        Resource Center<br />
                                        Community Center</p>
                              </div>
                              <div class="fot" id="fot2">
                                   <h>SUPPORT
                                   </h>
                                   <p>Host your home<br />

                                        Our COVID-19 Response<br />
                                        Help Center<br />
                                        Cancellation options<br />
                                        Neighborhood Support<br />
                                        Trust & Safety</p>
                              </div>
                         </div>


                    </div>
               </div>

          </div>
     )
}

export default Book