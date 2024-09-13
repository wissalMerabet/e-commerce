import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./componentes/NavBar";
import { Hero } from "./componentes/Hero";
import { Categories } from "./componentes/Categories";
import { Footer } from "./componentes/footer";
import { CategoryDetail } from "./componentes/CategoryDetail";
import { Productdetails } from "./componentes/Productdetails";
import { Cart } from "./componentes/Cart";
import { Signup } from "./componentes/Signup";
import { Login } from "./componentes/Login";
import Axios from 'axios';
import { AllProduct } from './componentes/allProduct';
import { Product } from './componentes/Product';
import { Contact } from './componentes/contact';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Check if user is logged in when the app loads
  useEffect(() => {
    const userID = window.localStorage.getItem("userID");
    if (userID) {
      setIsLoggedIn(true);
      // Fetch the cart count when the user is logged in
      Axios.get(`http://localhost:3000/Cart?userID=${userID}`)
        .then(response => {
          setCartItemCount(response.data.length);
        })
        .catch(error => {
          console.error("Error fetching cart count:", error);
        });
    }
  }, []);

  return (
    <div className="bg-white">
      <BrowserRouter>
        {/* Pass the cart count and setCartItemCount to NavBar */}
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cartItemCount={cartItemCount} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                
                <AllProduct />
                <Categories />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/Productdetails/:id"
            element={
              <>
                {/* Pass setCartItemCount to Productdetails */}
                <Productdetails setCartItemCount={setCartItemCount} />
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/Categories/:categoryName"
            element={
              <>
                <NavBar />
                <Hero />
                <CategoryDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/Cart"
            element={
              <>
                <Cart />
                
                <Footer />
              </>
            }
          />
          <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
