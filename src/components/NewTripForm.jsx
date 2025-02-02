import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Trip name is required")
    .min(3, "Trip name must be at least 3 characters long"),
  start_date: Yup.date()
    .required("Start date is required")
    .min(new Date(), "Start date must be today or in the future"),
  end_date: Yup.date()
    .required("End date is required")
    .min(Yup.ref("start_date"), "End date must be after the start date"),
});

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
      body: JSON.stringify(values),
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
    <>
      <Navbar />
      <div className="new-trip min-h-screen bg-gray-50 flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            New Trip
          </h2>

          <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    className="block text-gray-600 text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Trip Name
                  </label>
                  <Field
                    className="input w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="name"
                    placeholder="Enter trip name"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    className="block text-gray-600 text-sm font-medium mb-2"
                    htmlFor="start_date"
                  >
                    Start Date
                  </label>
                  <Field
                    className="input w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date"
                    name="start_date"
                  />
                  {errors.start_date && touched.start_date && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.start_date}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    className="block text-gray-600 text-sm font-medium mb-2"
                    htmlFor="end_date"
                  >
                    End Date
                  </label>
                  <Field
                    className="input w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date"
                    name="end_date"
                  />
                  {errors.end_date && touched.end_date && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.end_date}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Trip
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default NewTripForm;
