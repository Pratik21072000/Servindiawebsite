import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 py-6 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Services Platform. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="#"
              className="text-coral-300 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="ml-4 text-coral-300 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
