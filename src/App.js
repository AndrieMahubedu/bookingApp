import {  BrowserRouter as  Router, Routes,
     Route
    } 
from "react-router-dom";
import Signup from "./signup";
import Home from "./login";
import Book from "./bookhere";
import Hotel from "./hotel";
import ForgortPassword from "./forgotPassword";
import AddHotel from "./addHotel";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <Router>
<div className="App">
  <Routes>
    <Route exact path="/" element={<Signup />} />  

    <Route exact path="/login" element={<Home />} />
    <Route exact path="/bookhere" element={<Book />} />
    <Route exact path="/hotel" element={<Hotel />} />
    <Route exact path="/forgotPassword" element={<ForgortPassword />} />
    <Route exact path="/addHotel" element={<AddHotel />} />
    </Routes>      
    
    
    </div>
    </Router>
    
  );
}

export default App;