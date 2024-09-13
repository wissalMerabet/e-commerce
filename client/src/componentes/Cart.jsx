import { useState, React, useEffect } from "react";
import Axios from "axios";

export const Cart = () => {
  const [cart, setCarts] = useState([]);
  const USERID = window.localStorage.getItem("userID");

  useEffect(() => {
    if (USERID) {
      Axios.get(`https://e-commerce-7os1.onrender.com/Cart?userID=${USERID}`)
        .then((response) => {
          setCarts(response.data);
          //console.log("All products in cart: ", response.data.length);
        })
        .catch((error) => {
          console.error("Error fetching cart items: ", error);
        });
    }
  }, [USERID]);



  return (
    <div className="m-40">
      <h1 className="text-3xl font-bold text-center text-Green">
        Product added
      </h1>
      <div className="flex flex-row justify-center space-x-16 p-14">
        {cart.map((product, index) => (
          <div
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
              <p className="text-red-600">{product.price} DZ</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
