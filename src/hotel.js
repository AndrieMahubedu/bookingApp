import React, { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";
import AddTask from './add.js';

import { collection, getDocs } from "firebase/firestore"
import {db } from "./config/firebase"


function Hotel() {

     const [books, setBooks] = useState([]);
    const userCollectionRef = collection(db, "books")
    useEffect(() => {

        const getBooks = async () => {
            
            const data = await getDocs(userCollectionRef);
            console.log(data);
            setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getBooks();
    }, []);

   
    // //....................
    const [ButtonPopup, setButtonPopup] = useState(false);
    let [ToDoListEnter, setToDoListEnter] = useState({
        id: '',
        title: '',
        description: '',
    });
    const Add = () => {
        const d = new Date();
        ToDoListEnter.id = d.getTime();
        setButtonPopup(true)
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setToDoListEnter(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    let addPopUp = (
        <div className="main">
            <div className="header">
                <h1>Book Now</h1>
            </div>
            <div class="bookPopUp" id="bookPopUp">
                                   <div class="out4" id="bookPopUp">
                                        <div class="box" id="bookPopUp">
                                             <label>Check-in:</label>

                                        </div>
                                        <div class="box" id="bookPopUp">

                                             <input type="date" placeholder="Check-in-Date" />
                                        </div>

                                   </div>
                                   <div class="out4" id="bookPopUp">
                                        <div class="box" id="box">
                                             <label>Check-out:</label>

                                        </div>
                                        <div class="box" id="bookPopUp">

                                             <input type="date" placeholder="Check-in-Date" />
                                        </div>

                                   </div>

                                   <div class="out4" id="bookPopUp">
                                        <div class="box" id="box">
                                             <label>Adults:</label>

                                        </div>
                                        <div class="box" id="box2">

                                             <input type="number" placeholder="0" />
                                        </div>

                                   </div>
                                   <div class="out4" id="bookPopUp">
                                        <div class="box" id="box">
                                             <label>Children:</label>

                                        </div>
                                        <div class="box" id="box2">

                                             <input type="number" placeholder="0" />
                                        </div>

                                   </div>
                              </div>

            <div className="form-group">
                <button type="submit" className="btn" onClick={Add}> Comfirm Boooking</button>
            </div>
        </div>
    );
    return (
        
        <div>
            
            <div class="first" id="first">

                <div class="topt" id="topt">






                    <div class="topt" id="topt3">
                    <Link to="/login" > Logout   </Link>
                    </div>



                </div>

            </div>
            {books.map((doc, index) => {
                return (
                    <div class="boxxx" id="boxxx" key={index}>

                        <div class="boxxx" id="inside">

                            <img src={doc.hotelImage} alt="PP" />

                        </div>

                        <div class="boxxx" id="inside1">
                            <h1>{doc.hotel}<br /><br /></h1>
                            <p1>{doc.description}<br /></p1>
                           
                             <p1>R</p1>
                            <p3>{doc.price}</p3>
                            <br /><br />
                            <a href={doc.map}>Show on Map</a>
                        </div>
                        <button type="button" onClick={Add}>Book Now</button>
                        <AddTask trigger={ButtonPopup} setTrigger={setButtonPopup}>
                            {addPopUp}
                        </AddTask>
                    </div>
                );
            })}




        </div>


    )
}

export default Hotel