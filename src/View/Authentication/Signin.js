import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './Signin.css';

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
  console.log("auth", localStorage.getItem("isAuthenticated"));

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Enter your email id here, It cannot be blank",
      }));
    } else if (userData.username == "admin" && userData.password == "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };

  return (
    <div className="container">
      <div className="row">
      <div className="equal">
      <img src="./images/unsplash_PhYq704ffdA.png" alt=""  className="home-side-banner"/>
      </div>
      <div className="equal">
    <div className="text-center">
      <div className="slide side-text">
        <img src="./images/Subtract.png" />
        <span>amax</span>
      </div>
      <div className="sign-in-text">
      <h1>Sign in</h1>
      </div>
      <form className="form-allign">
        <div className="form-group">
          <label>Email id</label>< br />
          <span className="email-icon"> 
          <img src="./images/vector.png"/>
          </span>
          <input
            className="form-control" id="email"
            type="text"
            name="email id" placeholder="Enter email id"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label> <br />
          <span className="email-icon"> 
          <img src="./images/pwd.png"/>
          </span>
          <input
            className="form-control"
            type="password"
            name="Enter your password" placeholder="Enter your password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="forgot-pwd">
          <span>Forgot Password?</span>
          </div>
        <button
          type="submit"
          className="btn btn-primary clr"
          onClick={handleSubmit}
        >
          Sign In
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
    </div>
    </div>
    
    </div>
    </div>
  );
}

export default Signin;
