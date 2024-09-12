import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const USERID = window.localStorage.getItem("userID");

  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const shuffledProducts = shuffleArray([...products]);
  const selectedProducts = shuffledProducts.slice(0, 6);

  

  return (
    <div className="container mx-auto max-w-7xl m-32">
      <h1 className="text-3xl font-bold text-center text-Green mb-14">
        soma Of our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 m-4">
        {selectedProducts.map((product, index) => (
          <Link
            to={`/Productdetails/${product._id}`}
            key={index}
            className=" bg-BgGray  rounded-t-lg border-2 border-stone-300 m-20 md:m-4 shadaw"
          >
            <img
              src={`../../assets/${product.image}`}
              alt={product.name}
              className="w-full h-80 rounded-xl"
            />
            <div className="mt-2 text-center p-4">
              <h2 className="text-lg font-semibold ">{product.name}</h2>
              <p className="text-red-600 font-semibold">{product.price} DZ</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
