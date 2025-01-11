import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to MessMate
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">
          Your daily food feedback made simple and effective.
        </p>
        <a
          href="#feedback"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Provide Feedback
        </a>
      </div>
    </section>
  );
};

export default Hero;
