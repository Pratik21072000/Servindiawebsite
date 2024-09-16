import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const roleType = location?.state?.roleType;

  console.log(roleType);
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // scroll to the bottom
      behavior: "smooth", // smooth scrolling
    });
  }, []);
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center py-10 mt-40  lg:mt-10">
      {/* Heading centered */}
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        REGISTER AS
        {` ${
          roleType === "user"
            ? "USER"
            : roleType === "distributor"
            ? "DISTRIBUTOR"
            : roleType === "company"
            ? "COMPANY"
            : roleType === "retailer"
            ? "RETAILER"
            : ""
        }`}
      </h2>

      <div className="bg-blue-500 max-w-6xl w-full mx-auto p-8 shadow-lg rounded-lg">
        <div className="space-y-6">
          {/* First row of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label htmlFor="state" className="font-semibold text-white">
                Select your State
              </label>
              <select
                id="state"
                className="mt-2 p-3 border rounded-md text-gray-600"
              >
                <option>Select your State</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="district" className="font-semibold text-white">
                Select your District
              </label>
              <select
                id="district"
                className="mt-2 p-3 border rounded-md text-gray-600"
              >
                <option>Select your District</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="taluka" className="font-semibold text-white">
                Select your Taluka
              </label>
              <select
                id="taluka"
                className="mt-2 p-3 border rounded-md text-gray-600"
              >
                <option>Select your Taluka</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="city" className="font-semibold text-white">
                Select your City/Village
              </label>
              <select
                id="city"
                className="mt-2 p-3 border rounded-md text-gray-600"
              >
                <option>Select your City/Village</option>
              </select>
            </div>
          </div>

          {/* Second row of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 p-3 border rounded-md text-gray-600"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="font-semibold text-white">
                Address
              </label>
              <input
                id="address"
                type="text"
                className="mt-2 p-3 border rounded-md text-gray-600"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold text-white">
                Location
              </label>
              <input
                id="location"
                type="text"
                className="mt-2 p-3 border rounded-md text-gray-600"
                placeholder="Enter your location"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact" className="font-semibold text-white">
                Contact Number
              </label>
              <input
                id="contact"
                type="text"
                className="mt-2 p-3 border rounded-md text-gray-600"
                placeholder="Enter your contact number"
              />
            </div>
          </div>

          {/* Third row of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-white">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 p-3 border rounded-md text-gray-600"
                placeholder="Enter your email ID"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="aadhar" className="font-semibold text-white">
                Aadhar No
              </label>
              <input
                id="aadhar"
                type="text"
                className="mt-2 p-3 border rounded-md text-gray-600"
                placeholder="Enter your aadhar no"
              />
            </div>
          </div>

          {/* Register button aligned to the right */}
          <div className="flex justify-end mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-sm shadow-md hover:bg-gray-300">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
