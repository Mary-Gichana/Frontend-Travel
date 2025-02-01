import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-100 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-3xl font-extrabold text-black">Travel</p>

        <div className="flex-1 flex justify-center space-x-8">
          <NavLink
            to="/"
            className="text-black hover:text-yellow-300 transition duration-300 text-lg font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            className="text-black hover:text-yellow-300 transition duration-300 text-lg font-medium"
          >
            Destinations
          </NavLink>
          <NavLink
            to="/new-destination"
            className="text-black hover:text-yellow-300 transition duration-300 text-lg font-medium"
          >
            Add Destination
          </NavLink>
          <NavLink
            to="/trips"
            className="text-black hover:text-yellow-300 transition duration-300 text-lg font-medium"
          >
            Trips
          </NavLink>
          <NavLink
            to="/new-trip"
            className="text-black hover:text-yellow-300 transition duration-300 text-lg font-medium"
          >
            Add Trip
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
