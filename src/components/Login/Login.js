import React, { useState, useEffect } from 'react';
import useForm from "../../Utils/useForm";
import validate from "../../Utils/LoginFormValidationRules";
import { Redirect } from "react-router-dom";
import axios from "axios";
import './Login.css';


const Form = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [isMailActive, setIsMailActive] = useState(false);
const [isPasswordActive, setIsPasswordActive] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
        
  console.log(errors);
  
  function login() {
    const bodyFormData = new URLSearchParams();
    bodyFormData.append('username', values.email);
    bodyFormData.append('password', values.password);
    axios({
      method: "post",
      url: authURL,
      data: bodyFormData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    })
      .then(function (response) {
        //handle success
        setLoggedIn(true);
        props.parentCallback(true);
        return <Redirect to="/default" />;
      })
      .catch(function (response) {
        //handle error
        
      });
    
  }

  const [passwordShown, setPasswordShown]=useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  

 const authURL = "https://nestdep.herokuapp.com/auth/login/";

/* export default function Auth(){

	const [amaxAuth, setAmaxAuth] = useState([]);

  useEffect(() => {
    axios.get(`${authURL}`).then((response) => {
      setAmaxAuth(response.data);
	  
    });
  }, []); */
const getState = (value, active, error) => {
  return active ? 'active' : error ? 'error' : value ? 'active' : 'inactive';
  
}

  return (
    <div className="page">
      <div className="row">
        <div className="equal">
          <img src="./images/unsplash_PhYq704ffdA.png" alt=""  className="home-side-banner"/>
        </div>
        <div className="equal">
          {loggedIn && <Redirect to="/default" />}
          <div className="container">
            {/* {amaxAuth.map(function(data, index){ */}
          <div className="slide side-text">
        <img src="./images/Subtract.png" />
        <span>amax</span>
        
      </div>
      
            <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <div>
                <label className="label">Email id</label>
                <div className="control">
                {/* <img src="./images/email.svg" />   */}
                <svg  className={getState(values.email, isMailActive, Boolean(errors.email))} width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0.756104H2C0.9 0.756104 0 1.6561 0 2.7561V14.7561C0 15.8561 0.9 16.7561 2 16.7561H18C19.1 16.7561 20 15.8561 20 14.7561V2.7561C20 1.6561 19.1 0.756104 18 0.756104ZM17.6 5.0061L11.06 9.0961C10.41 9.5061 9.59 9.5061 8.94 9.0961L2.4 5.0061C2.15 4.8461 2 4.5761 2 4.2861C2 3.6161 2.73 3.2161 3.3 3.5661L10 7.7561L16.7 3.5661C17.27 3.2161 18 3.6161 18 4.2861C18 4.5761 17.85 4.8461 17.6 5.0061Z" fill="#BCBCBC"/>
</svg>
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange} onFocus={()=>setIsMailActive(true)} onBlur={()=>setIsMailActive(false)}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                    
                  )}
                </div>
                </div>
              </div>
              <div className="field">
              <div>
                <label className="label">Password</label>
                <div className="control">
                {/* <img onClick={togglePassword} src="./images/pwd.svg" /> */}
                <svg  className={getState(values.password, isPasswordActive, Boolean(errors.password))} onClick={togglePassword} width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0.256104C6 0.256104 1.73 3.3661 0 7.7561C1.73 12.1461 6 15.2561 11 15.2561C16 15.2561 20.27 12.1461 22 7.7561C20.27 3.3661 16 0.256104 11 0.256104ZM11 12.7561C8.24 12.7561 6 10.5161 6 7.7561C6 4.9961 8.24 2.7561 11 2.7561C13.76 2.7561 16 4.9961 16 7.7561C16 10.5161 13.76 12.7561 11 12.7561ZM11 4.7561C9.34 4.7561 8 6.0961 8 7.7561C8 9.4161 9.34 10.7561 11 10.7561C12.66 10.7561 14 9.4161 14 7.7561C14 6.0961 12.66 4.7561 11 4.7561Z" fill="#BCBCBC"/>
</svg>
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    onChange={handleChange} onFocus={()=>setIsPasswordActive(true)} onBlur={()=>setIsPasswordActive(false)}
                    value={values.password || ""}
                    required
                  />
                  </div>
                </div>
                <div className="forgot-pwd">
                  <span>Forgot Password?</span>
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        {/* } */}
      </div>
      </div>
      </div>
    </div>
    
  );/* } */
};

export default Form;
