import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Card from '../Home/components/card';
import Review from './components/Review';

function ProductSolo() {
    const [selectedImage, setSelectedImage] = useState("https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/g-series-16-7630-laptop-lf-800x620.png?fmt=png-alpha&wid=800&hei=620");

    const cardCount = 10;
    const reviews = [
        { reviewer: 'Jane Smith', rating: 5, comment: 'Exceeded my expectations!' },
        { reviewer: 'Alice Johnson', rating: 3, comment: 'Good value for the price.' },
        { reviewer: 'John Doe', rating: 4, comment: 'Great product! Highly recommend.' },
        { reviewer: 'Sam Wilson', rating: 5, comment: 'Amazing quality and performance.' },
        { reviewer: 'Emily Brown', rating: 4, comment: 'Very satisfied with my purchase.' },
        { reviewer: 'Sarah Miller', rating: 5, comment: 'Excellent product. Fast shipping.' },
        { reviewer: 'Tom Davis', rating: 4, comment: 'Good product. Would buy again.' },
        // Add more reviews as needed
    ];

    const smallImages = [
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/g-series-16-7630-laptop-lf-800x620.png?fmt=png-alpha&wid=800&hei=620",
        // Add more image URLs as needed
    ];

    const renderCards = () => {
        return Array.from({ length: cardCount }, (_, index) => <Card key={index} />);
    };

    const renderReviews = () => {
        return reviews.map((review, index) => (
            <Review
                key={index}
                reviewer={review.reviewer}
                rating={review.rating}
                comment={review.comment}
            />
        ));
    };

    return (
        <div className='max-w-full xl:max-w-[80%] mx-auto px-4'>
            <div className="p-4 flex flex-col md:flex-row mt-16 gap-4">
                <div className="xl:w-2/5 w-full">
                    <img
                        className="w-full rounded-lg"
                        src={selectedImage}
                        alt="product"
                    />
                    <div className="flex gap-2 overflow-x-auto mt-2">
                        {smallImages.map((img, index) => (
                            <img
                                key={index}
                                className="w-[25%] bg-gray-200 rounded-sm flex-shrink-0 cursor-pointer"
                                src={img}
                                alt="product"
                                onClick={() => setSelectedImage(img)} // Update the selected image on click
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-white xl:w-3/5 w-full shadow-lg p-6 rounded-md">
                    <h2 className="text-2xl font-bold text-blue-700">Product Title</h2>
                    <p className="text-justify">
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
                    <div className="flex items-center justify-start xl:justify-start flex-wrap mt-4 space-x-4">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-5 h-5 ${index < 4 ? 'text-yellow-400' : 'text-gray-300'} dark:text-gray-600`}
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
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <span className="text-3xl font-bold text-blue-900 dark:text-white">$599</span>
                        <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center space-x-1">
                            <ShoppingCartIcon className="w-10 h-10  text-blue-700" title="Add To Cart" />
                        </button>
                    </div>
                    <button className='w-full bg-blue-700 text-white p-2 rounded-sm shadow-xl hover:bg-blue-800'>Acheter</button>
                </div>
            </div>
            {/* Reviews Section */}
            <h1 className='w-full text-center font-bold text-2xl mt-8'>Customer Reviews</h1>
            <div className="w-full max-w-6xl mx-auto my-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {renderReviews()}
                </div>
            </div>
            <h1 className='w-full text-center font-bold text-2xl mt-8'>Other Products</h1>
            <div className="w-full max-w-6xl flex justify-center mx-auto my-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {renderCards()}
                </div>
            </div>
        </div>
    );
}

export default ProductSolo;
