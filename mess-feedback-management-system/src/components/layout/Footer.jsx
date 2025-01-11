import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-indigo-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              Instagram
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-indigo-600 px-4 py-2 rounded-md text-white shadow hover:bg-indigo-700"
          >
            Back to Top
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <p className="text-sm">© 2025 MessMate. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;