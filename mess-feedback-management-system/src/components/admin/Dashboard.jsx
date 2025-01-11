import React from "react";
import { BarChart3, PieChart, TrendingUp, Users, Utensils, Star, MessageSquare } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Feedback", value: "1,284", icon: MessageSquare, trend: "+12.5%" },
    { label: "Average Rating", value: "4.2", icon: Star, trend: "+0.3" },
    { label: "Active Users", value: "892", icon: Users, trend: "+5.2%" },
    { label: "Daily Meals", value: "4", icon: Utensils, trend: "stable" },
  ];

  const renderStatCard = (stat, index) => (
    <div
      key={index}
      className="bg-white shadow rounded-lg p-4 flex items-center space-x-4"
    >
      <stat.icon className="text-indigo-600 w-8 h-8" />
      <div>
        <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
        <p className="text-gray-900 text-2xl font-bold">{stat.value}</p>
        <p className="text-green-500 text-sm font-medium">{stat.trend}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(renderStatCard)}
      </div>

      {/* Charts Section (Placeholder) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Feedback Trends</h2>
          <div className="flex items-center justify-center h-48">
            <BarChart3 className="w-16 h-16 text-gray-400" />
            <p className="text-gray-500 ml-4">Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Meal Ratings</h2>
          <div className="flex items-center justify-center h-48">
            <PieChart className="w-16 h-16 text-gray-400" />
            <p className="text-gray-500 ml-4">Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;