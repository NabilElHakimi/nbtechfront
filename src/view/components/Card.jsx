import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

export default function Card({ product, onDelete }) {
  const [isDeleteScheduled, setIsDeleteScheduled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);

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
          onDelete(product.id); // Call onDelete function with product ID
        }
      }, 4000);
    }

    return () => clearTimeout(deleteTimeout);
  }, [isDeleteScheduled, isDeleted, onDelete, product.id]);

  const handleCancelDelete = () => {
    setIsDeleteScheduled(false);
    setProgress(0);
  };

  if (isDeleted) return null;

  return (
    <div className="flex flex-col justify-between items-center p-2 shadow-md mt-1 mx-1 rounded-md bg-white opacity-95 hover:opacity-100 cursor-pointer">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center">
          <img
            className="w-20 h-20 rounded-sm"
            src="https://www.bestmark.ma/pub/media/catalog/product/cache/25b125dca8e1d433263f9ae299f7439b/8/4/845m6ea-02.jpg"
            alt="Product"
          />
          <div className="ml-2">
            <h1 className="text-xl">Product 1</h1>
            <p className="text-xl text-blue-800">900 $</p>
          </div>
        </div>
        <MdDelete
          className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-700"
          onClick={handleDeleteClick}
        />
      </div>

      {isDeleteScheduled && (
        <div className="w-full mt-2 relative">
          <div className="absolute left-0 top-0 h-2 w-full bg-gray-300 rounded overflow-hidden">
            <div
              className="h-full bg-red-600 rounded transition-all duration-[4000ms] ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button
            className="mt-4 w-full bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-blue-700 hover:text-white"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
