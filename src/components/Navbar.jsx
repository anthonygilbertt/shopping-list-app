import React from "react";
import "../configureAmplify";
import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import Home from '../Home'

import { NavLink, Link, withRouter } from "react-router-dom";

const Navbar = () => {
  // Here we will manage the signed-in user State
  const [signedUser, setSignedUser] = useState(false);
  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "signOut":
          return setSignedUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (err) {}
  }

  return (
    // <nav className="flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gra-300">

    //   {[
    //     ["Home", "/"],
    //     ["Create Order", "/create-order"],
    //     ["My Orders", "/my-orders"],
    //     ["All Orders", "/all-orders"],
    //     ["Admin", "/admin"],
    //     ["About", "/about"],
    //   ].map(([title, url], index) => (
    //     <NavLink to={url} key={index}>
    //       <a className='rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900'>
    //         {" "}
    //       {title}
    //       </a>
    //     </NavLink>
    //   ))}

    //   {signedUser && (
    //     <Link href='/my-posts'>
    //       <a
    //         className='rounded-lg px-3 py-2 
    //                  text-slate-700
    //                  font-medium hover:bg-slage-100
    //                  hover:text-slate-900'
    //       >
    //         My Order
    //       </a>
    //     </Link>
    //   )}

    // </nav>

    <div id="nav">
    <span className="navButton" id="homeNav">
      <NavLink
        data-dd-action-name="home-nav-link"
        activeClassName="selected"
        activeStyle={{ textDecoration: "none" }}
        to="/">
        Home | 
      </NavLink>
    </span>

    <span className="navButton" id="startNav">
      <NavLink
        to="/admin"
        activeClassName="selected"
        activeStyle={{ textDecoration: "none" }}
        data-dd-action-name="user-action-nav-link">
        Admin
      </NavLink>
    </span>

    {/* <span className="navButton" id="startNav">
      <NavLink
        to="/error-demo"
        activeClassName="selected"
        activeStyle={{ textDecoration: "none" }}
        data-dd-action-name="error-nav-link">
        Errors
      </NavLink>
    </span> */}

    {/* <span className="navButton" id="middleNav">
      <NavLink
        to="/resource-demo"
        data-dd-action-name="resource-nav-link"
        activeClassName="selected"
        activeStyle={{ textDecoration: "none" }}>
        Resource Collection
      </NavLink>
    </span> */}

    {/* <span className="navButton" id="endNav">
      <NavLink
        to={sectorProp}
        activeClassName="selected"
        activeStyle={{ textDecoration: "none" }}
        data-dd-action-name="contacts-nav-link">
        Contacts
      </NavLink>
    </span> */}

  </div>
   );
}
 
export default Navbar;