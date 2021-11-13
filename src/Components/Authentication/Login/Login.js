import React, { useState } from 'react';
import Nav from '../../Shared/Nav/Nav';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
// import Spinner from '../../Shared/Spinner/Spinner';
// import Footer from '../../Shared/Footer/Footer';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const { signInWithGoogle, setIsLoading,
        isLoading, signIn, setUser, saveUser } = useAuth()
    const { register, handleSubmit } = useForm();

    const history = useHistory()
    const location = useLocation()

    const {style,w3_close,w3_open}=useAuth()
   
    const redirec_uri = location.state?.from || "/"
    const close=()=>{
        w3_close()
        history.push("/")
    }

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                setIsLoading(false)
                history.push(redirec_uri)

            })
    };

    const googleSignIn = () => {
        signInWithGoogle(history, redirec_uri)

    }


    return (
        <div>
            <Nav></Nav>

            <div className="w3-container modal-text">
                <h1 className="text-center mt-5" >Please <span onClick={w3_open} className="text-success link ">Login</span></h1>
                <div id="id01" className="w3-modal " style={{ display: `${style}` }}>
                    <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{ maxWidth: "400px" }}>

                        <div className="w3-center"><br />
                            <span onClick={close} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times; </span>
                            <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="Avatar" style={{ width: "30%" }} className="w3-circle w3-margin-top" />
                        </div>

                        <form className="w3-container" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w3-section">
                                <label><b>Email</b></label>
                                <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Email" name="email" required
                                    {...register("email")}
                                />
                                <label><b>Password</b></label>
                                <input className="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required
                                    {...register("password")}
                                />
                                <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit" >Login</button>
                            </div>

                        </form>
                        <button  class="google w3-button w3-block   w3-section w3-padding" onClick={googleSignIn}><i class="fa fa-google fa-fw">
                        
          </i> Login with Google+
        </button>

                        <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                            <button onClick={close} type="button" className="w3-button w3-red">Cancel</button>
                            <span className="w3-right w3-padding w3-hide-small">Not Registered?   <Link onClick={w3_open}  className="w3-right w3-hide-small " to="registation">Signup
                        </Link></span>
                        </div>

                    </div>
                </div>
            </div>
       
        </div>

    );
};

export default Login;