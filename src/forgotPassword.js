import React, { useState } from "react";
import { auth } from "././config/firebase";
import { toast } from "react-toastify";

//import { async } from "@firebase/util";
//import { useSelector } from "react-redux";


const ForgortPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
       
        
        const config = {
            url: process.env.REACT_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true,

        };

        await auth.sendPasswordResetEmail(email, config)
        
        .then(() => { 
            setEmail("");
            setLoading(false);
            toast.success("Check your email for password reset link");
        })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
                console.log("ERROR MSG IN FORGOT PASSWORD", error);
            })
    };
    return (
        <div className="container col-md-6 offset-md-3 p-5">
            {loading ? (
                <h className="text-danger">Loading</h>
            ) : (
                <h>Forgort Password</h>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    aoutoFocus
                ></input>
                <br />
                <button className="btn btn-raised" disabled={!email}>
                    Submit
                </button>

            </form>
        </div>
    );
};

export default ForgortPassword;