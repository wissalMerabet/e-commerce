import React from "react";
import categories from "../data/Categories.json";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Product = () => {
  
  const allProducts = categories.flatMap((category) => category.products);

  
  const shuffledProducts = shuffleArray([...allProducts]);

  // Select only the first 8 products
  const selectedProducts = shuffledProducts.slice(0, 8);

  return (
    <div className=" bg-red-50 p-20">
      <h1 className="text-3xl font-bold text-center text-red-600">Products</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-4 p-14">
        {selectedProducts.map((product, index) => (
          <Link to="/Productdetails"
            key={index}
            className="flex flex-col items-center m-6 space-y-2 border-2 border-red-600 rounded-xl p-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-35"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button href="#" className="bg-red-600 p-2 rounded-2xl text-white">
              add to cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
