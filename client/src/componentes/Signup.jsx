import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export const Signup = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2 border-red-600 p-6 rounded-xl w-full max-w-md flex flex-col bg-white">
        <h1 className="font-bold text-3xl text-red-600 text-center">Signup</h1>

        <form className="flex flex-col mt-4">
          <div className="mt-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-red-50 p-4 border-2 border-red-600 w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-red-50 p-4 border-2 border-red-600 w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="bg-red-50 p-4 border-2 border-red-600 w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-red-50 p-4 border-2 border-red-600 w-full rounded-xl"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-red-600 px-6 py-2 rounded-2xl text-white w-full"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-red-600 font-bold">Login</Link>
        </div>
      </div>
    </div>
  );
};