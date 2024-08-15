import React from "react";
import Carousel from "./components/carousel";
import Card from "./components/card";

export default function Home() {
  const cardCount = 10; 

  const renderCards = () => {
    return Array.from({ length: cardCount }, (_, index) => <Card key={index} />);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto my-8">
        <Carousel />
      </div>

      <div className="w-full max-w-6xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderCards()}
        </div>
      </div>
    </div>
  );
}
