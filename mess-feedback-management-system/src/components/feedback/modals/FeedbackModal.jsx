import React, { useState } from "react";
import { X } from "lucide-react"; // Icon for closing the modal

const FeedbackModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    rating: 0,
    feedback: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, rollNumber, rating, feedback } = formData;

    // Form validation
    if (!name || !rollNumber || !rating || !feedback) {
      setError("All fields are required.");
      return;
    }
    if (rating < 1 || rating > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    onSubmit(formData);
    setFormData({ name: "", rollNumber: "", rating: 0, feedback: "" });
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Submit Feedback</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rollNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Roll Number
            </label>
            <input
              id="rollNumber"
              name="rollNumber"
              type="text"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rating (1-5)
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              min="1"
              max="5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;