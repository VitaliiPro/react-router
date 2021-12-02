import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <NavLink to="/" className="link-nav">
        Main
      </NavLink>
      <NavLink to="/post" className="link-nav">
        Post
      </NavLink>
      <NavLink to="/photo" className="link-nav">
        Photo
      </NavLink>
      <NavLink to="/contacts" className="link-nav">
        Contacts
      </NavLink>
    </header>
  );
};

export default Nav;
