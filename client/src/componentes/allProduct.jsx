import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const USERID = window.localStorage.getItem("userID");

  if (!USERID) {
    console.error('USERID is missing.');
    alert('Please log in before adding products to the cart.');
    return;
  }

  useEffect(() => {
    Axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
        console.log("Products fetched successfully:", response.data);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
      });
  }, []);

  const addToCart = (product) => {
    console.log(product.name , product.price , product.image);
    Axios.post('http://localhost:3000/cart', {
      userID: USERID,
      name: product.name,
      price: product.price,
      image: product.image,
    })
      .then((response) => {
        alert('Product added to cart!');
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-red-600">Products</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-4 p-14">
        {products.map((product, index) => (
          <Link to="/Productdetails"
            key={index}
            className="flex flex-col items-center m-6 space-y-2 border-2 border-red-600 rounded-xl p-5"
          >
            <img
              src={`../../assets/${product.image}`}
              alt={product.name}
              className="w-20 h-35"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button 
              className="bg-red-600 p-2 rounded-2xl text-white" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};