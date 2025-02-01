import React from "react";
import Destination from "./Destination";
import Navbar from "./Navbar";

function Destinations({ destinations, handleDeleteDestination }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Destinations
        </h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:scale-105"
            >
              {/* Card Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {destination.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {destination.description}
                </p>

                {/* Visited Status */}
                <p
                  className={`text-sm font-medium ${
                    destination.visited ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {destination.visited ? "Visited" : "Not Visited"}
                </p>
              </div>

              {/* Card Footer with Delete Button */}
              <div className="bg-gray-100 p-4 text-right">
                <button
                  onClick={() => handleDeleteDestination(destination.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
