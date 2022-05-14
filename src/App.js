import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Home from "./Home";
import CreateOrder from './CreateOrder'
import Admin from './Admin'
import Login from './login'
import Nav from "./components/Nav";
import Signup from './Signup'
import MyOrders from './MyOrders'
import AboutUs from "./AboutUs";
// import AllOrders from './AllOrders'

// import "./styles.css";
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="App">
      <Nav loginStatus={signOut} />
      <Switch>

        {/* Home Page */}
          <Route 
            exact 
            path="/" 
            component={Home} 
            />

        {/* // Admin Dashboard(Admin level view) */}
          <Route
            exact
            path="/admin"
            render={() => {
              return <Admin />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <Login />;
            }}
          />

          <Route
            exact
            path="/create-order"
            render={() => {
              return <CreateOrder />;
            }}
          />

          <Route
            exact
            path="/signup"
            render={() => {
              return <Signup />;
            }}
          />

          <Route
            exact
            path="/my-orders"
            render={() => {
              return <MyOrders />;
            }}
          />

          <Route
            exact
            path="/about-us"
            render={() => {
              return <AboutUs />;
            }}
          />


        <Redirect to="/" />
      </Switch>
    </div>

          {/* <button onClick={signOut}>Sign out</button> */}
        </main>
      )}
    </Authenticator>
  );
}

export default App