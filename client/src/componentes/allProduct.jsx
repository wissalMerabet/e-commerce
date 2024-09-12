import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const USERID = window.localStorage.getItem("userID");

  
  useEffect(() => {
    Axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  

  return (
    <div className="container mx-auto max-w-7xl" id="products">
      <h1 className="text-3xl font-bold text-center text-Green mb-14">Products</h1>

      {/* Wrapper for scrolling content */}
      <div className="relative overflow-hidden">
        {/* The product list container with scrolling animation */}
        <div className="scroll-content flex space-x-14 animate-loop-scroll w-max">
          {products.map((product, index) => (
            <Link
              to={`/Productdetails/${product._id}`}
              key={index}
              className="bg-BgGray rounded-t-lg border-2 border-stone-300 flex-shrink-0 w-60 shadaw"
            >
              <img
                src={`../../assets/${product.image}`}
                alt={product.name}
                className="w-full h-80 rounded-xl object-cover"
              />
              <div className="mt-2 text-center p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-red-600 font-semibold">{product.price} DZ</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};