import { useEffect, useState } from "react";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import NewDestinationForm from "./components/NewDestinationForm";
import NewTripForm from "./components/NewTripForm";
import Trips from "./components/Trips";
import { Routes, Route } from "react-router-dom";

function App() {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.log(error));
  }, []);

  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/trips")
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddDestination(newDestination) {
    setDestinations([...destinations, newDestination]);
  }
  function handleAddTrip(newTrip) {
    setTrips([...trips, newTrip]);
  }
  function handleDeleteDestination(id) {
    fetch(`http://127.0.0.1:5000/destinations/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setDestinations(
          destinations.filter((destination) => destination.id !== id)
        );
      })
      .catch((error) => console.error(error));
  }
  function handleDeleteTrip(id) {
    fetch(`http://127.0.0.1:5000/trips/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTrips(trips.filter((trip) => trip.id !== id));
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destinations"
            element={
              <Destinations
                destinations={destinations}
                handleDeleteDestination={handleDeleteDestination}
              />
            }
          />
          <Route
            path="/new-destination"
            element={
              <NewDestinationForm handleAddDestination={handleAddDestination} />
            }
          />
          <Route
            path="/trips"
            element={
              <Trips trips={trips} handleDeleteTrip={handleDeleteTrip} />
            }
          />
          <Route
            path="/new-trip"
            element={<NewTripForm handleAddTrip={handleAddTrip} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
