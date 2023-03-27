import React from "react";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import Trending from "../Components/Trending";
import Center from "../Components/Center";
import Quotes from "../Components/Quotes";
import Collaboration from "../Components/Collaboration";
import Footer from "../Components/Footer";

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
