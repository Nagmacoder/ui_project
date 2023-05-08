import React from "react";
import { Head } from "../component/Head";
import Navbar from "../component/Navbar";
import HomeContent from "../component/HomeContent";
import ConfigureReadline from "./ConfigureReadline";
// import ConfigureReadline from "ConfigureReadline";

const Home = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <HomeContent />

      <ConfigureReadline />
    </div>
  );
};

export default Home;
