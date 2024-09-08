import "./App.css";
import { NavBar } from "./componentes/navBar";
import { Hero } from "./componentes/Hero";
import { Categories } from "./componentes/Categories";
import { Contact } from "./componentes/contact";
import { Footer } from "./componentes/footer";
import { Product } from "./componentes/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./componentes/Signup";
import { Login } from "./componentes/Login";
import CategoryDetail from "./componentes/CategoryDetail";
import { Cart } from "./componentes/Cart";
import { AllProduct } from "./componentes/allProduct";
import { Productdetails } from "./componentes/Productdetails";

export default function App() {
  return (
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
            path="/Productdetails"
            element={
              <>
                <NavBar />
                <Productdetails />
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

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
