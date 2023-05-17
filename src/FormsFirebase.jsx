import React, { useState } from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./context/authContext";

function FormsFirebase() {
  const auth = useAuth();
  const {displayName} = auth.user
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  const handleLogout = () => {
    auth.logout();
  }
  return (
    <>
        <div className="App">
          {displayName && <h5>welcome : {displayName}</h5>}
          
          <form className="form" style={{backgroundImage: 'linear-gradient(to right, #ffff, #ffff)'}} >
            <h3 className="title">Login</h3>          
            <div className="login">
              <h2>Login with your account</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                type="password"
                placeholder="Password"
              />
              <button onClick={(e) => handleLogin(e)} className="button" style={{backgroundColor: 'rgb(78, 177, 235)', color: '#ffff'}}>
                SING IN
              </button>

              <div className="conectGoogle">
                <div className="or">
                  <hr /><p>Or continue with</p> <hr />
                </div>
                <button onClick={(e) => handleGoogle(e)} className="buttonGoogle">
                  <FontAwesomeIcon icon={faG} style={{fontSize: 35, padding: 5}}/>
                </button>
              </div>
            </div>
          </form>


          <form className="form">
            <h3 className="title" style={{color: '#fff'}}>Sing Up</h3>
            <div className="singup">
              <h2>New here?</h2>
              <p>Sing up and discover a great amount of new oportunities!</p>
              <input
                className="input impsingup"
                type="text"
                placeholder="Name"
              />
              <input
                onChange={(e) => setEmailRegister(e.target.value)}
                className="input impsingup"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPasswordRegister(e.target.value)}
                className="input impsingup"
                type="password"
                placeholder="Password"
              />
              <button onClick={(e) => handleRegister(e)} className="button" style={{color: 'rgb(78, 177, 235)'}} >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

      <div className="logout">
        <button onClick={()=> handleLogout()} className="button" style={{backgroundColor: 'rgb(78, 177, 235)', color: '#ffff', paddingInline: 100}}>LOGOUT</button>
      </div>    
    </>
  );
}

export default FormsFirebase;

