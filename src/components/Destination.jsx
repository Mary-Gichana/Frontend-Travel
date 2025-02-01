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
      method: "PATCH",
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
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {userVisited ? (
          <button className="btn-1" onClick={handleUpdateToggle}>
            Visited
          </button>
        ) : (
          <button className="btn-1" onClick={handleUpdateToggle}>
            Not Visited
          </button>
        )}
      </td>
      <td>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Destination;
