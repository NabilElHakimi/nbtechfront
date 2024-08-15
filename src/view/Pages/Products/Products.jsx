import React, { useState } from 'react';
import Card from "./components/Card";

const cardCount = 10;

export default function Products() {
  const [titleFilter, setTitleFilter] = useState('');
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(100);

  const [cards] = useState(Array.from({ length: cardCount }, (_, index) => ({
    id: index,
    title: `Card ${index + 1}`,
    description: `Le PC Gamer Xtreme 2024 est une machine de haute performance conçue pour les passionnés de jeux vidéo et les professionnels de l'informatique. Équipé des dernières technologies, ce PC offre une expérience de jeu immersive et une puissance de traitement exceptionnelle.

Caractéristiques principales :
Processeur : Intel Core i9-13900K (16 cœurs / 24 threads) pour des performances ultra-rapides et une gestion multitâche fluide.
Carte Graphique : NVIDIA GeForce RTX 4080 avec 16 Go de GDDR6X, idéale pour les jeux en haute résolution et les applications graphiques intensives.
Mémoire RAM : 32 Go DDR5 à 6000 MHz, pour un multitâche sans compromis et des temps de réponse rapides.
Stockage : SSD NVMe de 1 To pour des temps de chargement ultra-rapides et une capacité suffisante pour tous vos jeux et logiciels.
Carte Mère : Carte mère ATX avec support pour PCIe 5.0 et USB 4.0 pour une connectivité future-proof.
Refroidissement : Système de refroidissement liquide haute performance pour maintenir des températures optimales même lors des sessions de jeu les plus intenses.
Alimentation : Bloc d’alimentation de 850W certifié 80+ Gold pour une efficacité énergétique accrue et une fiabilité maximale.
Boîtier : Boîtier en verre trempé avec éclairage RGB personnalisable pour un design moderne et élégant. ${index + 1}`,

    imageUrl: "https://www.bestmark.ma/pub/media/catalog/product/cache/25b125dca8e1d433263f9ae299f7439b/8/4/845m6ea-02.jpg",
    price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    reviews: {
      rating: (Math.random() * 5).toFixed(1), // Random rating between 0 and 5
      numberOfReviews: Math.floor(Math.random() * 100) // Random number of reviews between 0 and 100
    }
  })));

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    card.price >= minPriceFilter &&
    card.price <= maxPriceFilter
  );

  const handleClearFilters = () => {
    setTitleFilter('');
    setMinPriceFilter(0);
    setMaxPriceFilter(100);
  };

  return (
    <div className="p-4 min-h-screen max-w-[80%] flex">
      <div className="bg-gray-100 h-screen p-4 rounded-lg shadow mb-6 w-1/4  sticky top-0">
        <h2 className="text-xl font-bold mb-4 text-center">Filters</h2>
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col flex-1">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  id="title"
                  type="text"
                  value={titleFilter}
                  onChange={(e) => setTitleFilter(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Search by title"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Min Price</label>
                <input
                  id="minPrice"
                  type="number"
                  min="0"
                  value={minPriceFilter}
                  onChange={(e) => setMinPriceFilter(Number(e.target.value))}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Min"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Max Price</label>
                <input
                  id="maxPrice"
                  type="number"
                  min="0"
                  value={maxPriceFilter}
                  onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleClearFilters}
                className="text-red-500"
              >
                Clear Filters
              </button>
              <button
                onClick={() => setTitleFilter('')}
                className="text-blue-500"
              >
                Show All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 pl-4">
        <div className="flex flex-col space-y-4 cursor-pointer ">
          {filteredCards.map(card => (
            <Card
              key={card.id}
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