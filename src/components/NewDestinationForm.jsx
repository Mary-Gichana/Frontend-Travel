import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Destination name is required") // String required validation
    .min(3, "Destination name must be at least 3 characters long"), // Minimum length validation
  description: Yup.string()
    .required("Description is required") // String required validation
    .max(500, "Description must not exceed 500 characters"), // Maximum length validation
});

function NewDestinationForm({ handleAddDestination }) {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
  };

  const handleFormSubmit = (values) => {
    fetch("https://travel-flask-app-12.onrender.com/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((newDestination) => {
        handleAddDestination(newDestination);
        navigate("/destinations");
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 mt-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            New Destination
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
                    Destination Name
                  </label>
                  <Field
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="name"
                    placeholder="Enter destination name"
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
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <Field
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="description"
                    placeholder="Enter destination description"
                  />
                  {errors.description && touched.description && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.description}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Destination
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default NewDestinationForm;
