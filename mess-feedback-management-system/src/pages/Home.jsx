import React from "react";
import Hero from "../components/Hero";
import FeedbackSection from "../components/feedback/FeedbackSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeedbackSection onGiveFeedback={() => alert("Open feedback modal")} />
    </div>
  );
};

export default Home;
