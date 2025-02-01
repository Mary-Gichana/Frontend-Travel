import React from "react";
import Destination from "./Destination";
import Navbar from "./Navbar";

function Destinations({ destinations, handleDeleteDestination }) {
  return (
    <div>
      <Navbar />
      <h1>Destinations</h1>
      <div>
        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            {...destination}
            handleDeleteDestination={handleDeleteDestination}
          />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
