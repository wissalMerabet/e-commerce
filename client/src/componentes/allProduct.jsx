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
    <div className="relative max-w-7xl overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-red-600">Products</h1>
      <div className="scroll-content flex space-x-16 animate-loop-scroll paused">
        {products.map((product, index) => (
          <Link to={`/Productdetails/${product._id}`} 
            key={index}
            className=" inline-block bg-BgGray rounded-md"

          >
            <img
              src={`../../assets/${product.image}`}
              alt={product.name}
              className="w-48 h-48 object-cover rounded-md"
            />
            <div className="mt-2 text-center">
              <h2 className=" ">{product.name}</h2>
              <p className="text-red-600">{product.price} DZ</p>

            </div>
            
            
          </Link>
        ))}
      </div>
    </div>
  );
};