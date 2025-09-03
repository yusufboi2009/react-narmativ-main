import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import trashIcon from "../assets/svg/trash.svg";
import cartIcon from "../assets/svg/cart-white.svg";
import starIcon from "../assets/svg/star.svg";
import quickViewIcon from "../assets/svg/QuickView.svg";
import { justForYouProducts } from "../data/flashSales";
import qrCode from "../assets/img/qrcode.png";
import appStore from "../assets/img/download-appstore.png";
import playMarket from "../assets/img/download-playmarket.png";
import rightIcon from "../assets/svg/footer-right-icon.svg";
import iconFacebook from "../assets/svg/Icon-Facebook.svg";
import iconTwitter from "../assets/svg/Icon-Twitter.svg";
import iconInstagram from "../assets/svg/icon-instagram.svg";
import iconLinkedin from "../assets/svg/Icon-Linkedin.svg";
import iconCopyright from "../assets/svg/icon-copyright.svg";

const WishlistItem = ({ product, onRemove, onAddToCart }) => {
  return (
    <div className="w-full group">
      <div className="relative bg-[#F5F5F5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[180px] object-contain"
        />

        <button
          onClick={() => onRemove(product.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center"
        >
          <img
            src={trashIcon}
            alt="remove"
            className="w-4 h-4 cursor-pointer"
          />
        </button>

        <div className="absolute left-0 right-0 bottom-0">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-black text-white py-2 rounded-b flex items-center justify-center gap-2 cursor-pointer"
          >
            <img src={cartIcon} alt="cart" className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-[16px] leading-[24px] font-semibold line-clamp-2 mb-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[#DB4444] font-medium">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { moveAllToCart, addToCart } = useCart();

  const handleMoveAllToCart = () => {
    moveAllToCart(wishlist);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Start adding products to your wishlist to see them here
            </p>
            <a
              href="/"
              className="inline-block bg-[#DB4444] text-white px-6 py-3 rounded"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Wishlist ({wishlist.length})
          </h1>
          <button
            onClick={handleMoveAllToCart}
            className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
          >
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <WishlistItem
              key={product.id}
              product={product}
              onRemove={removeFromWishlist}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Just For You Section */}
      <section className="w-full">
        <div className="container py-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[36px] font-semibold leading-[48px]">
              Just For You
            </h2>
            <button
              type="button"
              className="bg-[#DB4444] text-white px-8 py-3 rounded cursor-pointer hover:bg-[#C73E3E] transition-colors"
            >
              See All
            </button>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {justForYouProducts.map((product) => (
              <div key={product.id} className="w-full group">
                <div className="relative bg-[#F5F5F5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[180px] object-contain"
                  />

                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-[12px] px-2 py-1 rounded">
                      NEW
                    </span>
                  )}

                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                      <img
                        src={quickViewIcon}
                        alt="quick view"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>

                  <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
                    <button
                      type="button"
                      className="w-full bg-black text-white py-2 rounded-b cursor-pointer"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-[16px] leading-[24px] font-semibold mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#DB4444] font-medium">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <img
                          key={idx}
                          src={starIcon}
                          alt="star"
                          className="w-4 h-4"
                        />
                      ))}
                    </div>
                    <span className="text-[#808080] text-sm">
                      ({product.ratingCount})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
