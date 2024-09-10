import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from "./componentes/NavBar";
import { Hero } from "./componentes/Hero";
import { Categories } from "./componentes/Categories";
import { Contact } from "./componentes/contact";
import { Footer } from "./componentes/footer";
import { Product } from "./componentes/Product";
import { Signup } from "./componentes/Signup";
import { Login } from "./componentes/Login";
import CategoryDetail from "./componentes/CategoryDetail";
import { Cart } from "./componentes/Cart";
import { AllProduct } from "./componentes/allProduct";
import { Productdetails } from "./componentes/Productdetails";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if userID exists in localStorage on page load
    const userID = window.localStorage.getItem("userID");
    if (userID) {
      setIsLoggedIn(true); // Set user as logged in if userID exists
    }
  }, []);

  return (
    <div className="bg-white">
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AllProduct />
                <Categories />
                <Footer />
              </>
            }
          />
          <Route
            path="/Categories/:categoryName"
            element={
              <>
                <Hero />
                <CategoryDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/Productdetails/:id"
            element={
              <>
                <Productdetails />
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
