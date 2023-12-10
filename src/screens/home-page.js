import React from "react";
import {NavLink} from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/contact">Move to Contact Page</NavLink>
    </div>
  )
}

export default HomeScreen;
