import React from "react";

function Trip({ id, name, start_date, end_date, handleDeleteTrip }) {
  function handleDelete() {
    handleDeleteTrip(id);
  }

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:scale-105">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        <p className="text-gray-600 text-sm mb-4">
          <strong>Start Date:</strong>{" "}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          <strong>End Date:</strong>
        </p>
      </div>

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
