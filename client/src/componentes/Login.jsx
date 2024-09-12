import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

export const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:3000/login", {
      email,
      password,
    });
    console.log(response.data);
    window.localStorage.setItem("userID", response.data.userID);
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen shadow-lg">
      <div className="border-2 border-Green p-6 rounded-xl w-full max-w-md flex flex-col">
        <form className="w-full flex flex-col" onSubmit={handleLogin}>
          <h1 className="font-bold text-3xl text-center text-Green">Login</h1>

          <div className="mt-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className=" p-4 border-2 border-Green w-full rounded-xl"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className=" p-4 border-2 border-Green w-full rounded-xl"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-Green px-6 py-2 rounded-2xl text-white w-full"
            >
              Send
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          Not a member?{" "}
          <Link to="/Signup" className="text-Green font-bold">
            Sign-Up
          </Link>
        </div>
      </div>
    </div>
  );
};
