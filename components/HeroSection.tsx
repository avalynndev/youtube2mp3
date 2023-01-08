import React from "react";

function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
      <h1 className="text-gray-900 pb-10">
        Responsive Navbar using <span className="text-blue-500">Next.js</span> &{" "}
        <span className="text-blue-400">Tailwind</span>
      </h1>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
			<button type="button" id="button">
          Download
        </button>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
	  <input
          type="text"
          placeholder="Input your youtube video id"
          name="URL"
          id="youtubeid"
        />
        <button type="button" id="button">
          Download
        </button>
      <a href="">
        <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
          <h1 className="text-center">Download🔻</h1>
        </div>
      </a>
    </div>
  );
}

export default HeroSection;
