import React, { useState } from "react";
import { Link } from "react-router-dom";
import heartIcon from "../assets/svg/heart.svg";
import cartIcon from "../assets/svg/cart-black.svg";
import searchIcon from "../assets/svg/search.svg";
import userIcon from "../assets/svg/user.svg";
import manageAccountIcon from "../assets/svg/menu-user.svg";
import orderIcon from "../assets/svg/icon-mallbag.svg";
import cancelIcon from "../assets/svg/icon-cancel.svg";
import reviewsIcon from "../assets/svg/icon-reviews.svg";
import logoutIcon from "../assets/svg/Icon-logout.svg";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import SignUp from "../components/SignUp.jsx"

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const { getTotalItems } = useCart();

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white h-[72px] flex items-center border-b border-gray-200">
      <div className="container flex items-center justify-between">
        <div className="font-bold text-2xl tracking-wide">Exclusive</div>
        <ul className="flex gap-8">
          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-black"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-transparent hover:border-black transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal text-[16px] leading-6 border-b-2 border-transparent hover:border-black transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#'
              className="font-normal text-[16px] leading-6 border-b-2 border-transparent hover:border-black transition"
            >
              Sign Up
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] rounded-tr-sm text-sm focus:outline-none py-[10px] px-[16px] pr-14"
            />
            <img
              src={searchIcon}
              alt="search"
              className="-ml-8 w-6 h-6 cursor-pointer"
            />
          </div>
          <Link to="/wishlist" className="relative">
            <img
              src={heartIcon}
              alt="wishlist"
              className="w-6 h-6 cursor-pointer"
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#DB4444] text-white text-xs rounded-full flex items-center justify-center font-medium">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative">
            <img src={cartIcon} alt="cart" className="w-7 h-7 cursor-pointer" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#DB4444] text-white text-xs rounded-full flex items-center justify-center font-medium">
                {getTotalItems()}
              </span>
            )}
          </Link>

          {/* User Icon with Dropdown */}
          <div className="relative">
            <div
              onClick={toggleUserMenu}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                isUserMenuOpen ? "bg-red-500" : ""
              }`}
            >
              <img
                src={userIcon}
                alt="user"
                className={`w-6 h-6 transition-colors ${
                  isUserMenuOpen ? "filter brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 top-12 w-56 bg-black/4 backdrop-blur-[150px] border border-gray-200/20 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <div className="py-1">
                    <Link
                      to="/account"
                      className="flex items-center px-4 py-3 text-sm text-white"
                      onClick={closeUserMenu}
                    >
                      <img
                        src={manageAccountIcon}
                        alt="manage account"
                        className="w-4 h-4 mr-3"
                      />
                      Manage My Account
                    </Link>

                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm text-white"
                      onClick={closeUserMenu}
                    >
                      <img
                        src={orderIcon}
                        alt="order"
                        className="w-4 h-4 mr-3"
                      />
                      My Order
                    </a>

                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm text-white"
                      onClick={closeUserMenu}
                    >
                      <img
                        src={cancelIcon}
                        alt="cancellations"
                        className="w-4 h-4 mr-3"
                      />
                      My Cancellations
                    </a>

                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm text-white"
                      onClick={closeUserMenu}
                    >
                      <img
                        src={reviewsIcon}
                        alt="reviews"
                        className="w-4 h-4 mr-3"
                      />
                      My Reviews
                    </a>

                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm text-red-400"
                      onClick={closeUserMenu}
                    >
                      <img
                        src={logoutIcon}
                        alt="logout"
                        className="w-4 h-4 mr-3"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isUserMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={closeUserMenu} />
      )}
    </nav>
  );
};

export default Navbar;
