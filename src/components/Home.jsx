import React from "react";
import Header from "./Header";
import Contact from "./Contact";

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-100 min-h-screen">
      <Header />
      <main className="container mx-auto text-center py-12 px-4">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to The Travel App
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Explore beautiful destinations around the world. Start your journey
          today! With this App, you can view and toggle destinations that you
          have visited and those you have not visited. You can delete a
          destination from the destination list and also add a new destination.
        </p>
        <div className="flex justify-center">
          <a
            href="#destinations"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Explore Destinations
          </a>
        </div>
      </main>
      <Contact />
    </div>
  );
}

export default Home;
