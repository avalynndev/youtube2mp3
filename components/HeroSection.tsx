import React from "react";

function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
      <h1 className="text-gray-900 pb-10">
        Responsive Navbar using <span className="text-blue-500">Next.js</span> &{" "}
        <span className="text-blue-400">Tailwind</span>
      </h1>
	  <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
      <a href="">
        <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16"> 
          <h1 className="text-center">Github 🚀 </h1>
        </div>
      </a>
    </div>
  );
}

export default HeroSection;
