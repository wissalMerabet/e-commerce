import { useState, React, useEffect } from "react";
import Axios from "axios";

export const Cart = () => {
  const [cart, setCarts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/Cart").then((Response) => {
      setCarts(Response.data);
      console.log("all products in cart : ", cart);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-red-600">
        Product added
      </h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-4 p-14">
        {cart.map((product, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};
