import React from 'react';
import Card from "./components/Card";

const cardCount = 10;

export default function Products() {
  const cards = Array.from({ length: cardCount }, (_, index) => ({
    id: index,
    title: `Card ${index + 1}`,
    description: `Le PC Gamer Xtreme 2024 est une machine de haute performance conçue pour les passionnés de jeux vidéo et les professionnels de l'informatique. Équipé des dernières technologies, ce PC offre une expérience de jeu immersive et une puissance de traitement exceptionnelle. ${index + 1}`,
    imageUrl: "https://www.bestmark.ma/pub/media/catalog/product/cache/25b125dca8e1d433263f9ae299f7439b/8/4/845m6ea-02.jpg",
    price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    reviews: {
      rating: (Math.random() * 5).toFixed(1), // Random rating between 0 and 5
      numberOfReviews: Math.floor(Math.random() * 100) // Random number of reviews between 0 and 100
    }
  }));

  return (
    <div className="p-4 min-h-screen max-w-[80%] flex flex-col xl:flex-row">
      <div className="bg-blue-800 xl:h-screen p-4  rounded-lg shadow-xl mb-6 w-full xl:w-1/4 xl:sticky xl:top-16">
        <h2 className="text-xl font-bold mb-4 text-center text-white">Filters</h2>
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col flex-1">
                <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
                <input
                  id="title"
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Search by title"
                />
                <label htmlFor="category" className="mt-2 mb-2 block text-sm font-medium text-white">Category</label>
                <select className="block text-sm font-medium text-black" defaultValue="0">
                  <option value="0">...</option>
                  <option value="1">Laptop</option>
                  <option value="2">PC Gamer</option>
                  <option value="3">Computer Dell</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="minPrice" className="block text-sm font-medium text-white">Min Price</label>
                <input
                  id="minPrice"
                  type="number"
                  min="0"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Min"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="maxPrice" className="block text-sm font-medium text-white">Max Price</label>
                <input
                  id="maxPrice"
                  type="number"
                  min="0"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="text-white hover:bg-blue-700 bg-blue-600 p-2 rounded ">
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Display Area */}
      <div className="w-full xl:w-3/4 xl:pl-4">
        <div className="flex flex-col space-y-4 cursor-pointer">
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              price={card.price}
              reviews={card.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
