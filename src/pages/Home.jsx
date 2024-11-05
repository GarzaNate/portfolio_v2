import React, { useEffect } from "react";
import Hero from "../components/Hero";
import useScrollTracking from "../hooks/useScrollTracking";

const Home = () => {
  // Scroll tracking
  useScrollTracking();
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
