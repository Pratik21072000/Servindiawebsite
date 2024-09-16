import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <header className="bg-blue-600 py-10 h-16 flex items-center justify-between px-6 shadow-md relative">
        {/* Hamburger Icon for Mobile */}
        <button
          className={`lg:hidden text-white text-2xl absolute left-6 top-1/2 transform -translate-y-1/2 z-20 ${
            sidebarOpen ? "hidden" : "block"
          }`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        {/* Logo for Mobile */}
        <div
          className={`lg:hidden absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center z-10`}
        >
          <img
            src="https://serv-india.com/wp-content/uploads/2024/08/logo-1-1-1.png"
            alt="Logo"
            className="w-32 sm:w-40 lg:w-48"
          />
        </div>

        {/* Left Side Menus (hidden on mobile) */}
        <div className="hidden lg:flex space-x-6 text-white font-medium">
          <a
            href="#categories"
            className="hover:text-white-600 hover:underline"
          >
            CATEGORIES
          </a>
          <Link to={"login"} className="hover:text-white-600 hover:underline">
            LOGIN
          </Link>
        </div>

        {/* Right Side Menus (hidden on mobile) */}
        <div className="hidden lg:flex space-x-6 text-white font-medium">
          <Link to={""} className="hover:text-white-600 hover:underline">
            HOME
          </Link>
          <a href="#about-us" className="hover:text-white-600 hover:underline">
            ABOUT US
          </a>
          <a
            href="#contact-us"
            className="hover:text-white-600 hover:underline"
          >
            CONTACT US
          </a>
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed inset-0 bg-blue-900 text-white lg:hidden transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}
        >
          <div className="flex justify-between items-center p-4">
            <button className="text-2xl" onClick={() => setSidebarOpen(false)}>
              ×
            </button>
            <h2 className="text-2xl font-bold">Menu</h2>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-8">
            <a
              href="#categories"
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              CATEGORIES
            </a>
            <Link
              to={"login"}
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              LOGIN
            </Link>
            <Link
              to={""}
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              HOME
            </Link>
            <a
              href="#about-us"
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              ABOUT US
            </a>
            <a
              href="#contact-us"
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </header>

      <header className="h-screen flex flex-col lg:flex-row items-center justify-between bg-white">
        <div className="flex items-center h-full w-full lg:w-auto">
          {/* Image */}
          <img
            src="https://serv-india.com/wp-content/uploads/2024/08/lady1-1.png"
            alt="Woman in Saree"
            className="lg:w-full lg:w-auto md:w-30 md:h-40 object-cover lg:h-full lg:ps-8 pt-4 mx-auto"
          />
        </div>
        <div className="text-center px-8 flex flex-col items-center mt-4 lg:mt-0 w-full lg:w-auto">
          {/* Centered Logo Image */}
          <img
            src="https://serv-india.com/wp-content/uploads/2024/08/logo-1-1-1.png"
            alt="Logo"
            className="mb-4 w-32 sm:w-40 lg:w-48" // Adjust the width for responsiveness
          />
          {/* Text Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-16">
            Helping Your Businesses to Achieve Big Growth
          </h2>
          <p className="text-lg font-semibold text-black sm:mb-20 mb-10">
            Hamara Kaam, Hamaari Pehchaan
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
