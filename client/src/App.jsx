import { CartProvider } from "./Cartcontext"; // Import the CartProvider
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Product } from "./components/Product";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import CategoryDetail from "./components/CategoryDetail";
import { Cart } from "./components/Cart";
import { AllProduct } from "./components/AllProduct";
import { ProductDetails } from "./components/ProductDetails";

export default function App() {
  return (
    <CartProvider> {/* Wrap the app in CartProvider */}
      <div className="bg-red-50">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
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
                  <NavBar />
                  <Hero />
                  <CategoryDetail />
                  <Footer />
                </>
              }
            />
            <Route
              path="/ProductDetails"
              element={
                <>
                  <NavBar />
                  <ProductDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Cart"
              element={
                <>
                  <NavBar />
                  <Cart />
                  <Footer />
                </>
              }
            />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}
