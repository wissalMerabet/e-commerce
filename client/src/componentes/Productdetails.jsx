import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from 'axios';

export const Productdetails = ({ setCartItemCount }) => {
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
    Axios.get(`https://e-commerce-7os1.onrender.com/products/${id}`)
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
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    Axios.post("https://e-commerce-7os1.onrender.com/cart", {
      user_id: USERID,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
    })
      .then(() => {
        alert("Product added to cart!");

        // Fetch updated cart count
        Axios.get(`https://e-commerce-7os1.onrender.com/cart?userID=${USERID}`)
          .then((response) => {
            setCartItemCount(response.data.length); // Update cart item count
          })
          .catch((error) => {
            console.error("Error fetching updated cart count:", error);
          });
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        alert("Error adding product to cart.");
      });
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  const availableSizes = ["S", "M", "L", "XL"];

  return (
    <div className="container mx-auto m-32 ">
      <h1 className="text-3xl font-bold text-center text-Green pb-10">Product Details</h1>

      <div className="flex flex-col  md:flex-row  md:space-x-6 space-y-16 space-x-0 md:space-y-0 p-10">
        <div className="flex flex-col">
          <img src={`../../assets/${product.image}`} alt={product.name} className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-lg" />
          <ul className="flex space-x-2 mt-4">
            {Array(4).fill(product.image).map((image, index) => (
              <li key={index}>
                <img src={`../../assets/${image}`} alt={`${product.name} preview`} className="w-16 h-16 object-cover rounded-lg" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-3xl">{product.name}</h3>
          <h4 className="text-xl text-red-600 font-semibold">{product.price} DZ</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div className="flex flex-row space-x-6">
            <label className="text-lg font-medium">Size:</label>
            <div className="flex flex-row items-center space-x-2">
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
              className="rounded-full bg-zinc-300 px-3 py-1"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="w-12 h-10 text-center border-2 border-gray-200 rounded-full"
              readOnly
            />
            <button
              className="rounded-full bg-zinc-300 px-3 py-1"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
            <button
              className="bg-Green p-2 rounded-2xl text-white hover:bg-green-700"
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
