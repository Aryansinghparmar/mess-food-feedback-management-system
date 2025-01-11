import React, { useState } from "react";

const FeedbackSection = ({ onGiveFeedback }) => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: "John Doe", rating: 4, comment: "Great lunch!" },
    { id: 2, name: "Jane Smith", rating: 5, comment: "Loved the breakfast!" },
  ]);

  const averageRating = (
    feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) / feedbacks.length
  ).toFixed(1);

  return (
    <section id="feedback" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Feedback Section
        </h2>

        {/* Average Rating */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-700">Average Rating</p>
          <p className="text-4xl font-bold text-indigo-600">{averageRating} / 5</p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white shadow rounded-lg p-4">
              <p className="font-semibold text-gray-800">{feedback.name}</p>
              <p className="text-yellow-500">
                {"★".repeat(feedback.rating)}
                {"☆".repeat(5 - feedback.rating)}
              </p>
              <p className="text-gray-600 mt-2">{feedback.comment}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={onGiveFeedback}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
          >
            Give Feedback
          </button>
          <button
            onClick={() => alert("Load More functionality not implemented yet.")}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-400"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
