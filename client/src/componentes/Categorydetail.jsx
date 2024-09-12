import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios"; // Ensure Axios is imported
import { Link } from 'react-router-dom';

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

  // If the category does not exist or there are no maflex flex-row justify-center space-x-16 p-14tching products, return an error message
  if (!category || category.length === 0) {
    return <div>Category not found or no products available!</div>;
  }

  


  return (
    <div className=" p-10">
      <h1 className="font-bold text-center text-slate-900">{categoryName.toUpperCase()}</h1>
      <div className="flex flex-row justify-center space-x-16 p-14">
        {category.map((product, index) => {
          return (
            <Link to={`/Productdetails/${product._id}`} 
            key={index}
            className=" inline-block bg-BgGray  rounded-t-lg border-2 border-stone-300 "

          >
            <img
              src={`../../assets/${product.image}`}
              alt={product.name}
              className="w-48 h-48 object-cover rounded-t-lg"
            />
            <div className="mt-2 text-center p-4">
              <h2 className="text-lg font-semibold ">{product.name}</h2>
              <p className="text-red-600 font-semibold">{product.price} DZ</p>

            </div>
            
            
          </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDetail;
