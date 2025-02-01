import React from "react";
import Destination from "./Destination";
import Navbar from "./Navbar";

function Destinations({ destinations, handleDeleteDestination }) {
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Visited</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => (
            <Destination
              key={destination.id}
              {...destination}
              handleDeleteDestination={handleDeleteDestination}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Destinations;
