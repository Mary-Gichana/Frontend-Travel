import React from "react";
import Trip from "./Trip";
import Navbar from "./Navbar";

function Trips({ trips, handleDeleteTrip }) {
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-semibold text-center mt-8">Your Trips</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {trips.map((trip) => (
          <Trip key={trip.id} {...trip} handleDeleteTrip={handleDeleteTrip} />
        ))}
      </div>
    </div>
  );
}

export default Trips;
