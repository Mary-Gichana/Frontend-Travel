import React from "react";
import Header from "./Header";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-100 min-h-screen">
        <Header />
        <main className="container mx-auto text-center py-12 px-4">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            Welcome to The Travel App
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore beautiful destinations around the world. Start your journey
            today! With this App, you can view and add new destinations. You can
            also add a new trip and list of trips.
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="/destinations"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore Destinations
            </a>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
              <img
                src="https://media.istockphoto.com/id/1299198919/photo/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-white-sandbar-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=zuTuzhsB1UAFNplY9S0dgpjgGT2d91WqsnvaHw3jVDg="
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Beautiful Beach
                </h3>
                <p className="text-gray-600 text-sm">
                  Relax on the sandy beaches and enjoy the clear blue waters.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
              <img
                src="https://media.istockphoto.com/id/1739119878/photo/traveler-woman-hiking-solo-in-mountains-of-norway-outdoor-activity-travel-summer-vacations.webp?a=1&b=1&s=612x612&w=0&k=20&c=-se3RIErK8xJ2lzjwGUzY-VzotpKMSWw0B4ycqzpr7Y="
                alt="Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Mountain Adventure
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover breathtaking views and hike through majestic
                  mountains.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
              <img
                src="https://media.istockphoto.com/id/2168651658/photo/picturesque-view-of-cinque-terre-italy-with-colorful-houses-perched-along-the-coastline.jpg?s=612x612&w=0&k=20&c=5dlqm-CTVYNYi74Pg3jfz1BNtCpYuHrYuDa974mQ08A="
                alt="Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  City Escape
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore the vibrant city life, with amazing architecture and
                  culture.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Contact />
    </>
  );
}

export default Home;
