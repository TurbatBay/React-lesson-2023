import React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <input
              className="bg-gray-700 text-white border-2 border-transparent focus:border-gray-500 focus:outline-none rounded-md py-2 px-4 leading-5 w-96"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



