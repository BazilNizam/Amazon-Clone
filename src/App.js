import React, { useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {

  const[{}, dispatch] = useStateValue();



  useEffect(() => {
    // run once when app componenet runs
    auth.onAuthStateChanged(authUser => {
      console.log('the user is>>', authUser);
      if (authUser) {
        //user logged in

        dispatch({
          type:'SET_USER',
          user: authUser
        })
      
      
      } else {
        ///user logged out
        dispatch({
          type:'SET_USER',
          user: null
        })

        }
    })

  }, [])

  
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
