import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios"; // Ensure Axios is imported

const CategoryDetail = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        console.log("Products fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  // Find the category based on the category name in the URL
  const category = products.filter(
    (product) => product.categorie.toLowerCase() === categoryName.toLowerCase()
  );

  // If the category does not exist or there are no matching products, return an error message
  if (!category || category.length === 0) {
    return <div>Category not found or no products available!</div>;
  }

  


  return (
    <div className="bg-red-50 p-10">
      <h1 className="font-bold text-center">{categoryName.toUpperCase()}</h1>
      <div className="flex flex-row justify-center space-x-16 p-14">
        {category.map((product, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-1/4 space-y-2 border-2 border-red-600 rounded-xl p-5"
            >
              <img
                src={`../../assets/${product.image}`}
                alt={product.name}
                className="w-20 h-35"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDetail;
