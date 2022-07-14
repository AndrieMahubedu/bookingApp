import {db} from "../config/firebase"
//import {collection} from "firebase/firestore"
import {
    collection, 
    getDocs,
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
     doc}
 from "firebase/firestore";

 const bookCollectionRef = collection(db, "books");
 class BookDataService {
    addHotels = (newHotel) => {
        return addDoc(bookCollectionRef, newHotel );

    };

    updatedHotels = (id, updatedHotel) => {
        const hotel = doc(db, "books", id);
        return updateDoc(hotel, updatedHotel);
    };

    deletedHotels = (id) => {
        const hotel = doc(db, "books", id);
        return deleteDoc(hotel);
    };

    getAllHotels = () => {
        return getDocs(bookCollectionRef);

    };

    getOneHotel = (id) => {
        const hotel = doc(db, "books", id);
        return getDoc(hotel);
    };
 }


 export default new BookDataService();