import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export const Signup = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  function createUser(e) {
    e.preventDefault(); 
    Axios.post("https://e-commerce-7os1.onrender.com/signUp", { name, email, password })
      .then(res => {
        console.log(res.data);
        navigate("/login");
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2 border-Green p-6 rounded-xl w-full max-w-md flex flex-col bg-white">
        <h1 className="font-bold text-3xl text-Green text-center">Signup</h1>

        <form className="flex flex-col mt-6">
          <div className="mt-4">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} 
              className=" p-4 border-2 border-Green w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} 
              className=" p-4 border-2 border-Green w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} 
              className=" p-4 border-2 border-Green w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className=" p-4 border-2 border-Green w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              onClick={createUser}
              className="bg-Green px-6 py-2 rounded-2xl text-white w-full"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-Green font-bold">Login</Link>
        </div>
      </div>
    </div>
  );
};
