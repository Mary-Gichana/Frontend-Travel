import React from "react";
import Header from "./Header";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Header />
      <main class="p-6">
        <h1 class="text-3xl font-bold mb-4">Welcome To The Travel App</h1>
        <p class="text-lg mb-6">
          Explore beautiful destinations around the world. Start your journey
          today! With this App you can be able to view and toggle destinations
          that you have visited and those you have not visited. You can delete a
          destination from the destination list and also add a new destination.
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="imgcard bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/08/15/11/capetown-2295679_1280.jpg"
              alt="image-4"
              class="w-full h-40 object-cover"
            />
            <p class="text-center py-2 text-sm">Beautiful oceans</p>
          </div>

          <div class="imgcard bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2024/09/13/17/05/beach-9045462_1280.jpg"
              alt="image-5"
              class="w-full h-40 object-cover"
            />
            <p class="text-center py-2 text-sm">Beautiful scenery</p>
          </div>

          <div class="imgcard bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/06/21/58/bird-7247045_1280.jpg"
              alt="image-6"
              class="w-full h-40 object-cover"
            />
            <p class="text-center py-2 text-sm">Beautiful birds</p>
          </div>

          <div class="imgcard bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2019/09/29/20/29/capetown-4514288_1280.jpg"
              alt="image-7"
              class="w-full h-40 object-cover"
            />
            <p class="text-center py-2 text-sm">Awesome animals</p>
          </div>

          <div class="imgcard bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/13/15/03/clouds-2062838_1280.jpg"
              alt="image-8"
              class="w-full h-40 object-cover"
            />
            <p class="text-center py-2 text-sm">Fascinating mountains</p>
          </div>

          <div class="imgcard bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/21/13/03/table-mountain-606658_1280.jpg"
              alt="image-9"
              class="w-full h-40 object-cover"
            />
            <p class="text-center py-2 text-sm">Beautiful mountains</p>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
}

export default Home;
