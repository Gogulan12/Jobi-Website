import React from "react";
import Navigation from "../Components/HomePage/Navigation";
import Header from "../Components/HomePage/Header";
import Trending from "../Components/HomePage/Trending";
import Center from "../Components/HomePage/Center";
import Quotes from "../Components/HomePage/Quotes";
import Collaboration from "../Components/HomePage/Collaboration";
import Footer from "../Components/HomePage/Footer";

export default function Homepage() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Trending />
      <Center />
      <Quotes />
      <Collaboration />
      <Footer />
    </div>
  );
}
