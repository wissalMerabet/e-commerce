import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from 'axios';

export const Productdetails = () => {
  const USERID = window.localStorage.getItem("userID");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    setLoading(true);
    Axios.get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching the product details.');
        setLoading(false);
      });
  }, [id]);

  const addToCart = (product) => {
    Axios.post("http://localhost:3000/cart", {
      userID: USERID,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
    })
      .then(() => {
        alert("Product added to cart!");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  const availableSizes = ["S", "M", "L", "XL"];

  return (
    <div className="container mx-auto p-12">
      <h1 className="text-3xl font-bold text-center text-red-600">Product Details</h1>

      <div className="flex flex-row space-x-6 p-8">
        <div className="flex flex-col">
          <img src={`../../assets/${product.image}`} alt={product.name} className="w-full h-auto" />
          <ul className="flex space-x-2 mt-4">
            {Array(4).fill(product.image).map((image, index) => (
              <li key={index}>
                <img src={`../../assets/${image}`} alt={`${product.name} preview`} className="w-16 h-16 object-cover" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-3xl">{product.name}</h3>
          <h4 className="text-xl text-red-600">{product.price} DZ</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div className="flex flex-row space-x-6">
            <label className="text-lg font-medium">Size:</label>
            <div className="flex flex-col space-y-2">
              {availableSizes.map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => handleSizeChange(size)}
                    className="form-radio"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-row space-x-4 items-center">
            <button
              className="rounded-full bg-gray-200 px-3 py-1"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="w-12 h-10 text-center border-2 border-gray-300 rounded-lg"
              readOnly
            />
            <button
              className="rounded-full bg-gray-200 px-3 py-1"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
            <button
              className="bg-red-600 p-2 rounded-2xl text-white"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
