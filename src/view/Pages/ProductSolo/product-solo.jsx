import { ShoppingCartIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'; 
import Card from '../Home/components/card';

function ProductSolo() {
    const cardCount = 10; 

    const renderCards = () => {
        return Array.from({ length: cardCount }, (_, index) => <Card key={index} />);
    };

  return (
    <div className='max-w-full xl:max-w-[80%] mx-auto px-4'>
      <div className="p-4 flex flex-col md:flex-row mt-16 gap-4">
        <div className="xl:w-2/5 w-full">
          <img
            className="w-full rounded-lg"
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/g-series-16-7630-laptop-lf-800x620.png?fmt=png-alpha&wid=800&hei=620"
            alt="product"
          />
          <div className="flex gap-2 overflow-x-auto mt-2">
            {[...Array(7)].map((_, index) => (
              <img
                key={index}
                className="w-[25%] bg-gray-300 rounded-sm flex-shrink-0"
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/g-series-16-7630-laptop-lf-800x620.png?fmt=png-alpha&wid=800&hei=620"
                alt="product"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:w-3/5 w-full shadow-lg p-4 rounded-md">
        <h2 className="text-2xl font-bold text-blue-700">Product Title</h2>

        <div className="flex items-center justify-start xl:justify-start flex-wrap mt-4 space-x-4">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < 4 ? 'text-yellow-400' : 'text-gray-300'
                  } dark:text-gray-600`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              4.0 (23 reviews)
            </span>
            
            <h1 className="text-xl font-bold text-green-700 flex items-center">
              <CurrencyDollarIcon className="w-6 h-6 mr-2" />
              900$
            </h1>

            <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center space-x-1">
              <ShoppingCartIcon className="w-10 h-10  text-blue-700" title="Add To Cart" />
            </button>
            
           
            

            
          </div>
          <p className="text-lg text-justify">
            Le PC Gamer Xtreme 2024 est une machine de haute performance conçue
            pour les passionnés de jeux vidéo et les professionnels de
            l'informatique. Équipé des dernières technologies, ce PC offre une
            expérience de jeu immersive et une puissance de traitement
            exceptionnelle. Caractéristiques principales : Processeur : Intel Core
            i9-13900K (16 cœurs / 24 threads) pour des performances ultra-rapides
            et une gestion multitâche fluide. Carte Graphique : NVIDIA GeForce RTX
            4080 avec 16 Go de GDDR6X, idéale pour les jeux en haute résolution et
            les applications graphiques intensives. Mémoire RAM : 32 Go DDR5 à
            6000 MHz, pour un multitâche sans compromis et des temps de réponse
            rapides. Stockage : SSD NVMe de 1 To pour des temps de chargement
            ultra-rapides et une capacité suffisante pour tous vos jeux et
            logiciels. Carte Mère : Carte mère ATX avec support pour PCIe 5.0 et
            6000 MHz, pour un multitâche sans compromis et des temps de réponse
            rapides. Stockage : SSD NVMe de 1 To pour des temps de chargement
            ultra-rapides et une capacité suffisante pour tous vos jeux et
            logiciels. Carte Mère : Carte mère ATX avec support pour PCIe 5.0 et
          </p>
        <button className='w-full bg-blue-700 text-white p-2 rounded-sm shadow-xl hover:bg-blue-800'>Acheter</button>
        </div>
      </div>
      <h1 className='w-full text-center font-bold text-2xl mt-8'>Other Products</h1>
      <div className="w-full max-w-6xl flex justify-center mx-auto my-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default ProductSolo;
