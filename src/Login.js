import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = e =>{
      e.preventDefault();

      auth

      .signInWithEmailAndPassword(email, password)
      .then(auth =>
        {
            history.push('/')
        })
        .catch(error => alert(error.message))

      // firebase
  }
  const register = e =>  {
    e.preventDefault();

    auth
       .createUserWithEmailAndPassword(email,password)
       .then((auth)=> {
           //Succefully created a new user with email and password
           if(auth) {
               history.push('/')
           }
       })
       .catch(error => alert(error.message))
    
    // frbase register
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1> Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            vaue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input type="Password" value={password} 
          onChange={e => setPassword(e.target.value)} />
          <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon COLONE Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
