import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ChooseProfile = () => {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // scroll to the bottom
      behavior: "smooth", // smooth scrolling
    });
  }, []);

  const [role, setRole] = useState("");
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-blue-900 flex flex-col justify-center items-center py-10 mt-40  lg:mt-10">
        {/* Heading centered */}
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          CHOOSE YOUR PFOFILE
        </h2>

        <div className="max-w-lg w-full mx-auto p-8 rounded-lg">
          <div className="space-y-6">
            {/* Select dropdown for profile options */}
            <div className="flex flex-col items-center">
              <select
                id="profile"
                className="w-full max-w-md mt-2 p-3 border rounded-md text-gray-600"
                onClick={handleRole}
              >
                <option value="" disabled selected>
                  Select your profile
                </option>
                <option value="user">USER</option>
                <option value="retailer">RETAILER</option>
                <option value="company">COMPANY</option>
                <option value="distributor">DISTRIBUTOR</option>
              </select>
            </div>

            {/* LOGIN and REGISTER buttons */}
            <div className="flex justify-center space-x-10 mt-4">
              <button className="w-60 bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800">
                LOGIN
              </button>
              <button
                className="w-60 bg-white text-black px-6 py-3 rounded-md shadow-md hover:bg-gray-300"
                onClick={() => {
                  if (!role) {
                    toast.info("SELECT ROLE FIRST");
                  } else {
                    navigate("/register", { state: { roleType: role } });
                  }
                }}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProfile;
