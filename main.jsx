import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSlider from "./components/HeroSlider";
import FlashSales from "./components/FlashSales";
import CategorySlider from "./components/CategorySlider";
import BestSelling from "./components/BestSelling";
import JblBanner from "./components/JblBanner";
import ExploreProducts from "./components/ExploreProducts";
import Arrival from "./components/Arrival";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Account from "./components/Account";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

const HomePage = () => (
  <>
    <div className="container flex">
      <Sidebar />
      <HeroSlider />
    </div>
    <FlashSales />
    <CategorySlider />
    <BestSelling />
    <JblBanner />
    <ExploreProducts />
    <Arrival />
    <Services />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <WishlistProvider>
    <CartProvider>
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  </WishlistProvider>
);
