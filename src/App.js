import React, { useEffect } from 'react';
import './app.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import Login from './components/login/login';
import Payment from './components/payment/payment';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './stateprovider';
import { SET_USER } from './constants/constants';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
  "pk_test_51JaPAuAR0tEdIxcmJiglvKkNfVEAZyNrGIrH90FfNlEShDBu7rOEDqM7T7aw7G44f5v8u1DUOlqB7ldJa0WmUWjl00eS68IB59"
);


function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>> ", authUser)
      if (authUser) {
        // The user just logged in
        dispatch({
          type: SET_USER,
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: SET_USER,
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <AnimatePresence>
          {/* Will render on every screen view */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header motion={motion} />
              <Checkout motion={motion} />
            </Route>
            <Route path="/payment">
              <Header motion={motion} />
              <Elements stripe={promise}>
                <Payment motion={motion} />
              </Elements>
            </Route>

            {/* Default Route stays at the bottom */}
            <Route path="/">
              <Header motion={motion} />
              <Home motion={motion} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
