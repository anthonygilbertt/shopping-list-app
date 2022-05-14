import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import '../configureAmplify'
import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
// import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const Nav = () => {
  
  const [signedInUser, setSignedInUser] = useState(false)
  useEffect(() => {
    authListener()
  }, [])

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedInUser(true)
        case "signOut":
          return setSignedInUser(false)
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setSignedInUser(true)
    }
    catch(err) {
      console.log('error trying to catch signed in user: ', err);
    }
  }
  
  return (
    <nav className="flex justify-center pt-3 pb-3 space-x-4 border-b mt-10 ml-6 pb-10">
      {[
        ["Home", "/"],
        ["About Us", "/about-us"]
        // ["Create Order", "/create-order"],
        // ["Admin", "/admin"],
        // ["Login", "/login"],
        // ["Signup", "/signup"],
        // ["All Orders", "/all-orders"],
        // ["My Orders", "/my-orders"]
      ].map(([product, url], index) => (
        <>
          <NavLink to={url} key={index}>
            <a className="order-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{product}</a>
          </NavLink>

          {/* <NavLink to={url} key={index}>
            <a className="order-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{product}</a>
          </NavLink> */}
        </>
        ))
      }
      {
        signedInUser && (
          <>
            <Authenticator>
            {({ signOut, user }) => (
              <>
                {/* <p>Hello {user.username}</p> */}
                <NavLink to='/create-order'>
                  <a className="order-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Create Order</a>
                </NavLink><NavLink to='/my-orders'>
                  <a className="order-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">My Orders</a>
                </NavLink><NavLink to='/admin'>
                  <a className="order-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Admin / All Orders</a>
                </NavLink>
                <div className="">
                  <a className="order-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" onClick={signOut}>Sign out</a>
                </div>
              </>
            )}
            </Authenticator>
          </>
        )
      }
    </nav>
    // <div id="nav" className="flex justify-center pt-3 pb-3 space-x-4 border-b mt-10 ml-6 pb-10">
    //   <span className="border-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="homeNav">
    //     <NavLink
    //       data-dd-action-name="home-nav-link"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       to="/">
    //       Home
    //     </NavLink>
    //   </span>
    //   <span className="border-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
    //     <NavLink
    //       to="/create-order"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       data-dd-action-name="user-action-nav-link">
    //       Create Order
    //     </NavLink>
    //   </span>

    //   <span className="border-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
    //     <NavLink
    //       to="/admin"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       data-dd-action-name="user-action-nav-link">
    //       Admin
    //     </NavLink>
    //   </span>

    //   <span className="border-solid border-2 ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
    //     <NavLink
    //       to="/login"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       data-dd-action-name="user-action-nav-link">
    //       Login
    //     </NavLink>
    //   </span>

    //   <span className="border-solid border-2 ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
    //     <NavLink
    //       to="/signup"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       data-dd-action-name="user-action-nav-link">
    //       Signup
    //     </NavLink>
    //   </span>

      
    //   <span className="border-solid border-2 ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
    //     <NavLink
    //       to="/"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       data-dd-action-name="user-action-nav-link">
    //       Logout
    //     </NavLink>
    //   </span>

    //   <span className="border-solid border-2 ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
    //     <NavLink
    //       to="/my-orders"
    //       activeClassName="selected"
    //       activeStyle={{ textDecoration: "none" }}
    //       data-dd-action-name="user-action-nav-link">
    //       My Orders
    //     </NavLink>
    //   </span>
      
    // </div>
  );
};

export default withRouter(Nav);
