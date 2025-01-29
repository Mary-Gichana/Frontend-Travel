import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <p className="logo">Travel</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destinations">Destinations</NavLink>
        <NavLink to="/new-destination">Add Destination</NavLink>
        <NavLink to="/trips">Trips</NavLink>
        <NavLink to="/new-trip">Add Trip</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
