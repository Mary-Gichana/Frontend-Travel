import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Navbar from "./Navbar";

function NewDestinationForm({ handleAddDestination }) {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
  };

  const handleFormSubmit = (values) => {
    fetch("http://127.0.0.1:5000/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/jSON" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((newDestination) => {
        handleAddDestination(newDestination);
        navigate("/destinations");
      });
  };

  return (
    <div className="new-destination">
      <Navbar />
      <h2>New Destination</h2>

      <div className="new-destination-form">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          <Form>
            <h3>Add New Destination</h3>

            <Field
              className="input"
              type="text"
              name="name"
              placeholder="Destination name"
            />
            <br />
            <Field
              className="input"
              type="text"
              name="description"
              placeholder="Description"
            />
            <br />

            <button className="btn" type="submit">
              Add Destination
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default NewDestinationForm;
