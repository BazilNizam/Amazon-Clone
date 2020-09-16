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
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51HQFi4GpDUTMmqaiXBG8GGS9koV3fgFYDrvTKfAIlEF2rN8bqne7Gti6iX0LnGFIC1iKWNgnCpKzVKmCC0gb7Hdm00VxKp5nBO"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once when app componenet runs
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>", authUser);
      if (authUser) {
        //user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        ///user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
