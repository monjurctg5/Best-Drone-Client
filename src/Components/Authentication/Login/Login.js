import React, { useState } from "react";
import Nav from "../../Shared/Nav/Nav";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
// import Spinner from '../../Shared/Spinner/Spinner';
// import Footer from '../../Shared/Footer/Footer';
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    signInWithGoogle,
    setIsLoading,
    isLoading,
    signIn,
    setUser,
    saveUser,
    style,
    w3_close,
    w3_open,
  } = useAuth();
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const location = useLocation();

  const redirec_uri = location.state?.from || "/";
  const close = () => {
    w3_close();
    history.push("/");
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    signIn(data.email, data.password).then((result) => {
      setIsLoading(false);
      history.push(redirec_uri);
    });
  };

  const googleSignIn = () => {
    setIsLoading(true);
    signInWithGoogle(history, redirec_uri);
  };

  return (
    <div className="mt-5">
      <Nav></Nav>

      <div className="w3-container modal-text">
        <h1 className="text-center mt-5">
          Please{" "}
          <span onClick={w3_open} className="text-success link ">
            Login
          </span>
        </h1>
        <div id="id01" className="w3-modal " style={{ display: `${style}` }}>
          <div
            className="w3-modal-content w3-card-5 w3-animate-zoom"
            style={{ maxWidth: "400px" }}
          >
            <div className="w3-center">
              <br />
              <span
                onClick={close}
                className=" w3-xlarge  w3-display-topright"
                title="Close Modal"
                style={{color:"#cf5e6a",cursor: "pointer" ,fontSize:"40px"}}

              >
                &times;{" "}
              </span>
            </div>

            <form className="w3-container" onSubmit={handleSubmit(onSubmit)}>
              <div className="login-input">
                <h3>please Login</h3>

                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                  {...register("email")}
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  {...register("password")}
                />
                <input className="input-submit" type="submit" value="login" />

                <div className=" text-center mb-2 ">
                  -----------------OR-----------------
                </div>

                <button className="google-btn" onClick={googleSignIn}>
                  <i className="fa fa-google fa-fw"></i> Login with Google+
                </button>
              </div>
            </form>

            <div className="w3-container mt-5 w3-border-top w3-padding-16 w3-light-grey">
              <button
                onClick={close}
                type="button"
                className="close-btn"
              >
                Cancel
              </button>
              <span className="w3-right w3-padding w3-hide-small">
                Not Registered?{" "}
                <Link
                  onClick={w3_open}
                  className="w3-right w3-hide-small "
                  to="registation"
                >
                  Signup
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
