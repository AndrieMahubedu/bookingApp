//import { Alert } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import BookDataService from "./services/book.services"
import {AiFillEdit, AiTwotoneDelete} from "react-icons/ai"
 

//...........
import pic1 from './pictures/out/out1.jpg'
//import pic2 from './pictures/icon/edit.png'
//import pic3 from './pictures/icon/delete.png'
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"
import {storage, db } from "./config/firebase"
import { ref , uploadBytesResumable, getDownloadURL}from "firebase/storage"
import {ProgressBar} from "react-bootstrap"

const AddHotel = () => {

    
    const [file, setfile] = useState(null);
    const [progressImage, setprogressImage] = useState(0)
    const [hotelImage, setHotelImage] = useState(null);
   const image=''
    const [books, setBooks] = useState([]);
    const userCollectionRef = collection(db, "books")
    useEffect(() => {

        const getBooks = async () => {

            const data = await getDocs(userCollectionRef);
            console.log(data);
            setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getBooks();
    },[]);
  //window.document.reload();
  
    const deleteHandler = async (id) => {
        await BookDataService.deletedHotels(id);
        
    };

    // const updateBook = async (id,{hotel,description, price}) => {
    //     const userDoc = doc(db,"books", id)
    //     const newFields = {hotel, description,price }
    //     await updateDoc(userDoc, newFields)
    // };

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
    //.......................
    const Navigate = useNavigate()

    const [hotel, setHotel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [map, setMap] = useState("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async () => {

        setMessage("");
        if (hotel === "" || description === "" || price === "" || map === "") {
            setMessage({ eror: true, msg: "All fields are mandatory!" });
            return;

        }
        const newHotel = {
            hotel,
            description,
            price,
            map,
            status,
            hotelImage
        };
        console.log(hotel, description, price, map);

        try {
            await BookDataService.addHotels(newHotel);
            setMessage({ error: false, msg: "New Book added successfully" });

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setHotel("");
        setDescription("");
        setPrice("");
        setMap("");
        Navigate("/addHotel")
    };

    const onInputChange = (e) => {
        setfile(e.target.files[0]);
        uploadImage(file)
    }

/*====================================== UPLOADING AND DOWNLOAD URL FROM FIREBASE ======================================*/
function uploadImage(file) {
        if (!file) return;
        const storageRef = ref(storage, `/picturs/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setprogressImage(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => { return setHotelImage(url) })
            }
        );
    }
    return (
        <>


            <div class="first" id="first">
                <h><Link to="/">Switch to user</Link></h>

            </div>
            <div class="ll" id="ll">
                <h>Add Hotel</h>

            </div>

            <div class="add" id="add">

                
                <input type="text" placeholder="Hotel Name" onChange={(e) => setHotel(e.target.value)} />

            </div>
            <div class="add" id="add">

                
                <input type="text" placeholder="Describe" onChange={(e) => setDescription(e.target.value)} />

            </div>
            <div class="add" id="add">

                
                <input type="number" placeholder="Add Price" onChange={(e) => setPrice(e.target.value)} />

            </div>
            <div class="add" id="add">

                
                <input type="text" placeholder="Add Location:" onChange={(e) => setMap(e.target.value)} />



            </div>

            <div className="form-group">
                        <input type="file" className="control-form" hidden name='hotel' id="add-control-hotelImage" value={image} onChange={onInputChange} />
                        <label for="add-control-hotelImage" className='btn btn-success uploadImage'>Click To Upload Hotel Image</label>
                        <div className='add-progress-bar'>
                            <ProgressBar now={progressImage} id='add-prog' />
                            <p id='add-progress-bar'>{progressImage} %</p>
                        </div>
                 </div>

            <div class="add2" id="add2">

                <button onClick={handleSubmit}>Done</button>
                {/* <button onClick={updateBook}>Refresh List</button> */}
              
            </div>
            <div class="ll" id="ll">
                <h>Hotel List</h>

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
                            <br />
                            <a href={doc.map}>Show on Map</a>
                        </div>
                        
                        <i>{<AiFillEdit size={30}  />}</i>
                        <i>{<AiTwotoneDelete size={30} onClick={ (e) => deleteHandler(doc.id)}/>}</i>
                    </div>
                );
            })}
        </>
    );
};
export default AddHotel;



