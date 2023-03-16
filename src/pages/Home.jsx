import React from "react";
import Card from "../component/Card";
import Carousel from "../component/Carousel";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <div className="m-3">
        <Card />
      </div>
      <Footer />
    </div>
  );
}
