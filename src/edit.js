import React, { useState } from "react";
import { ref } from "./App";

function Edit({dev, setEditBox}) {
    const [hotel, setHotel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

function editDoc(updateDoc){
    ref.doc(updateDoc.id).update(updateDoc)
}

return (
<div>

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



            <div class="add2" id="add2">

                <button >Done</button>
               
              
            </div>



</div>
)


   
}
export default Edit