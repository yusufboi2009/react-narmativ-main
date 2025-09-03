import React, { useState } from "react";
import leftArrow from "../assets/svg/icons_arrow-left.svg";
import rightArrow from "../assets/svg/icons_arrow-right.svg";
import starIcon from "../assets/svg/star.svg";
import heartSmallIcon from "../assets/svg/heartsmall.svg";
import heartIcon from "../assets/svg/heart.svg";
import quickViewIcon from "../assets/svg/QuickView.svg";
import { exploreProducts } from "../data/flashSales";
import { useWishlist } from "../context/WishlistContext";

const ColorPicker = ({ colors = [], value, onChange }) => {
  if (!colors.length) return null;
  return (
    <div className="flex items-center gap-2 mt-3">
      {colors.map((color, idx) => {
        const isSelected = value === color;
        return (
          <button
            key={`${color}-${idx}`}
            type="button"
            aria-label={`Select color ${color}`}
            onClick={() => onChange(color)}
            className={
              "w-4 h-4 rounded-full border transition " +
              (isSelected
                ? "ring-2 ring-offset-2 ring-[#DB4444] border-transparent"
                : "border-[#E4E4E4]")
            }
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

const Card = ({ id, image, title, price, ratingCount, isNew, colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "");
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
        ratingCount,
        isNew,
        colors,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="relative bg-[#F5F5F5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden group">
        <img src={image} alt={title} className="max-h-[180px] object-contain" />
        {isNew ? (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-[12px] px-2 py-1 rounded">
            NEW
          </span>
        ) : null}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={handleWishlistToggle}
            className={`w-8 h-8 rounded-full border border-[#E4E4E4] flex items-center justify-center cursor-pointer transition-colors ${
              inWishlist
                ? "bg-red-500 border-red-500"
                : "bg-white hover:bg-red-50"
            }`}
          >
            <img
              src={inWishlist ? heartIcon : heartSmallIcon}
              alt="wishlist"
              className={`w-5 h-5 ${
                inWishlist ? "filter brightness-0 invert" : ""
              }`}
            />
          </button>
          <button className="w-8 h-8 rounded-full bg-white border border-[#E4E4E4] flex items-center justify-center cursor-pointer">
            <img src={quickViewIcon} alt="quick view" className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition">
          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded-b"
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
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <img key={idx} src={starIcon} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <span className="text-[#808080] text-sm">({ratingCount})</span>
        </div>
        <ColorPicker
          colors={colors}
          value={selectedColor}
          onChange={setSelectedColor}
        />
      </div>
    </div>
  );
};

const ExploreProducts = () => {
  return (
    <section className="w-full">
      <div className="container py-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <span className="text-[#DB4444] font-semibold">Our Products</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[36px] font-semibold leading-[48px]">
            Explore Our Products
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#E9E9E9] transition cursor-pointer"
            >
              <img src={leftArrow} alt="prev" className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#E9E9E9] transition cursor-pointer"
            >
              <img src={rightArrow} alt="next" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-8">
          {exploreProducts.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="bg-[#DB4444] text-white px-8 py-3 rounded"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
