import React from "react";
import { useParams } from "react-router-dom";
import categories from "../data/Categories.json"; // Assume this includes an array of your four categories

const CategoryDetail = () => {
  const { categoryName } = useParams(); // Get the category name from the URL

  let category;

  // Check which category the URL corresponds to
  if (categoryName.toLowerCase() === "iphone") {
    category = categories.find((cat) => cat.title.toLowerCase() === "iphone");
  } else if (categoryName.toLowerCase() === "tablets") {
    category = categories.find((cat) => cat.title.toLowerCase() === "tablets");
  } else if (categoryName.toLowerCase() === "headphones") {
    category = categories.find(
      (cat) => cat.title.toLowerCase() === "headphones"
    );
  } else if (categoryName.toLowerCase() === "laptops") {
    category = categories.find((cat) => cat.title.toLowerCase() === "laptops");
  } else {
    return <div>Category not found!</div>;
  }

  return (
    <div className="bg-red-50 p-10">
      <h1 className="font-bold text-center ">{category.title}</h1>
      <div className="flex flex-row justify-center space-x-16 p-14">
        {category.products.map((product, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-1/4 space-y-2 border-2 border-red-600 rounded-xl p-5"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-35"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <a href="#" className="bg-red-600 p-2 rounded-2xl text-white">
                add to cart
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDetail;
