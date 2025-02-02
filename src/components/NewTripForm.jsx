import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Navbar from "./Navbar";

function NewTripForm({ handleAddTrip }) {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    start_date: "",
    end_date: "",
  };

  const handleFormSubmit = (values, { resetForm }) => {
    fetch("http://127.0.0.1:5000/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values), // Send raw data
    })
      .then((response) => response.json())
      .then((newTrip) => {
        handleAddTrip(newTrip);
        resetForm();
        navigate("/trips");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="new-trip">
      <Navbar />
      <h2>New Trip</h2>

      <div className="new-trip-form">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ resetForm }) => (
            <Form>
              <h3>Add New Trip</h3>

              <Field
                className="input"
                type="text"
                name="name"
                placeholder="Trip name"
                required
              />
              <br />

              <Field className="input" type="date" name="start_date" required />
              <br />

              <Field className="input" type="date" name="end_date" required />
              <br />

              <button className="btn" type="submit">
                Add Trip
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewTripForm;
