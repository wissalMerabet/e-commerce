import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";


export const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      return;
    }

    Axios.post("https://e-commerce-7os1.onrender.com/sendMsg", {
      name,
      email,
      message,
    })
      .then((res) => {
        console.log(res.data);
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Failed to send the message.");
        setSuccessMessage(""); // Clear success message if any
      });
  };
  const clearMessage = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className=" container mx-auto  flex flex-col p-4 mb-20 text-center bg-green-50 rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-Green p-6">
        Contact Me
      </h1>
      <form action="">
        <div className=" mt-4">
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            className="  p-4 border-2 border-Green w-96 rounded-xl"
          />
        </div>

        <div className=" mt-4">
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" p-4 border-2 border-Green w-96 rounded-xl"
          />
        </div>

        <div className=" mt-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="your message ..."
            className=" p-4 border-2 border-Green w-96 rounded-xl"
          />
        </div>

        <div className=" mt-4">
          <button onClick={sendMessage} type="submit" className="border-2 border-Green px-6  py-2 rounded-3xl self-center md:self-start  text-Green font-bold hover:bg-Green hover:text-white ">
            send
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-6 p-5 bg-green-100 text-green-500  rounded-lg relative">
          {successMessage}
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
            onClick={clearMessage}
          />
        </div>
      )}
      {errorMessage && (
        <div className="mt-6 p-5 bg-green-100 text-green-500 rounded-lg relative">
          {errorMessage}
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
            onClick={clearMessage}
          />
        </div>
      )}
    </div>
  );
};
