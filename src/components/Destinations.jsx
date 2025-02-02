import React from "react";
import Destination from "./Destination";
import Navbar from "./Navbar";

function Destinations({ destinations, handleDeleteDestination }) {
  return (
    <div>
      <Navbar />

      <h2 className="text-2xl font-semibold text-center mt-8">
        Your Destinations
      </h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
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
