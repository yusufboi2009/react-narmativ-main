import React from "react";
import starIcon from "../assets/svg/star.svg";
import heartSmallIcon from "../assets/svg/heartsmall.svg";
import heartIcon from "../assets/svg/heart.svg";
import quickViewIcon from "../assets/svg/QuickView.svg";
import { bestSellingProducts } from "../data/flashSales";
import { useWishlist } from "../context/WishlistContext";

const Card = ({ id, image, title, price, oldPrice, ratingCount }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        image,
        title,
        price,
        oldPrice,
        ratingCount,
      });
    }
  };

  return (
    <div className="w-full group">
      <div className="relative bg-[#F5F5F5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
        <img src={image} alt={title} className="max-h-[180px] object-contain" />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={handleWishlistToggle}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              inWishlist ? "bg-red-500" : "bg-white hover:bg-red-50"
            }`}
          >
            <img
              src={inWishlist ? heartIcon : heartSmallIcon}
              alt="wishlist"
              className={`w-4 h-4 ${
                inWishlist ? "filter brightness-0 invert" : ""
              }`}
            />
          </button>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <img src={quickViewIcon} alt="quick view" className="w-4 h-4" />
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
          {title}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-[#DB4444] font-medium">${price}</span>
          {oldPrice ? (
            <span className="text-[#808080] line-through">${oldPrice}</span>
          ) : null}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <img key={idx} src={starIcon} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <span className="text-[#808080] text-sm">({ratingCount})</span>
        </div>
      </div>
    </div>
  );
};

const BestSelling = () => {
  return (
    <section className="w-full">
      <div className="container py-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <span className="text-[#DB4444] font-semibold">This Month</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[36px] font-semibold leading-[48px]">
            Best Selling Products
          </h2>
          <button
            type="button"
            className="bg-[#DB4444] text-white px-12 py-3 rounded cursor-pointer"
          >
            View All
          </button>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-8">
          {bestSellingProducts.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
