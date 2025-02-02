import React, { useState } from "react";

function Destination({
  id,
  name,
  description,
  handleDeleteDestination,
  visited,
}) {
  const [userVisited, setUserVisited] = useState(visited);

  function handleUpdateToggle() {
    setUserVisited(!userVisited);

    fetch(`http://127.0.0.1:5000/destinations/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visited: !userVisited }),
    })
      .then((response) => response.json())
      .then((updatedDestination) => {
        setUserVisited(updatedDestination.visited);
      })
      .catch((error) => console.error(error));
  }

  function handleDelete() {
    handleDeleteDestination(id);
  }

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:scale-105">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <button
          onClick={handleUpdateToggle}
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            userVisited ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {userVisited ? "Visited" : "Not Visited"}
        </button>
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

export default Destination;
