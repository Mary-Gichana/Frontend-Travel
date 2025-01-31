import React from "react";

function Trip({ id, name, start_date, end_date, handleDeleteTrip }) {
  function handleDelete() {
    handleDeleteTrip(id);
  }

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:scale-105">
      {/* Card Content */}
      <div className="p-4">
        {/* Trip Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        {/* Trip Dates */}
        <p className="text-gray-600 text-sm mb-4">
          <strong>Start Date:</strong>{" "}
          {new Date(start_date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          <strong>End Date:</strong> {new Date(end_date).toLocaleDateString()}
        </p>
      </div>

      {/* Card Footer with Delete Button */}
      <div className="bg-gray-100 p-4 text-right">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Trip;
