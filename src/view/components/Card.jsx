import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaMinusCircle , FaPlusCircle  } from "react-icons/fa";


export default function Card({ product, onDelete }) {
  const [isDeleteScheduled, setIsDeleteScheduled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleDeleteClick = () => {
    if (isDeleted || isDeleteScheduled) return;

    setIsDeleteScheduled(true);
    setProgress(0);

    setTimeout(() => {
      setProgress(100);
    }, 10);
  };

  useEffect(() => {
    let deleteTimeout;

    if (isDeleteScheduled) {
      deleteTimeout = setTimeout(() => {
        if (isDeleteScheduled) {
          setIsDeleted(true);
          onDelete(product.id); 
        }
      }, 4000);
    }

    return () => clearTimeout(deleteTimeout);
  }, [isDeleteScheduled, isDeleted, onDelete, product.id]);

  const handleCancelDelete = () => {
    setIsDeleteScheduled(false);
    setProgress(0);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (isDeleted) return null;

  return (
    <div className="flex flex-row justify-between items-center relative shadow-md mb-2 mt-1 mx-1 rounded-md bg-white opacity-95 hover:opacity-100 cursor-pointer">

      <div className="w-[90%]">
      <div className="flex justify-between items-center p-2">
        <div className="flex justify-start items-center">
          <img
            className="w-20 h-20 rounded-sm"
            src={product.image || "https://www.bestmark.ma/pub/media/catalog/product/cache/25b125dca8e1d433263f9ae299f7439b/8/4/845m6ea-02.jpg"}
            alt="Product"
          />
          <div className="ml-2">
            <h1 className="text-xl">{product.title || "Product Title"}</h1>
            <p className="text-xl text-blue-800">{product.price || "Price"} $</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          

          <div className="flex items-center mt-2">
            <button
              className=" w-8 h-8 flex justify-center items-center rounded-full "
              onClick={decreaseQuantity}
            >
              <FaMinusCircle className="w-5 h-5 text-gray-500" />
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className=" w-8 h-8 flex justify-center items-center rounded-full "
              onClick={increaseQuantity}
            >
              <FaPlusCircle  className="w-5 h-5 text-yellow-500" />
            </button>
          </div>
          
        </div>
        
      </div>

      {isDeleteScheduled && (
        <div className="w-full mt-2 relative">
          <div className="absolute left-0 top-0 h-2 w-full bg-gray-300   overflow-hidden">
            <div
              className="h-full bg-red-600  transition-all duration-[4000ms] ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button
            className="mt-4 w-full bg-gray-300 text-gray-700 px-2 py-1 rounded-bl-md hover:bg-blue-700 hover:text-white"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
      </div>

     

      <div className="flex justify-center items-center w-[10%] bg-red-700 hover:bg-red-800 absolute right-0 h-full rounded-r-md" onClick={handleDeleteClick}>
            <MdDelete
              className="w-6 h-6 cursor-pointer text-gray-200 hover:text-white mt-2"
              
            />
      </div>

      
    </div>
  );
}
