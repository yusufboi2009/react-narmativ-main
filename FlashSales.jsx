import React, { useEffect, useMemo, useState } from "react";
import leftArrow from "../assets/svg/icons_arrow-left.svg";
import rightArrow from "../assets/svg/icons_arrow-right.svg";
import starIcon from "../assets/svg/star.svg";
import quickViewIcon from "../assets/svg/QuickView.svg";
import heartSmallIcon from "../assets/svg/heartsmall.svg";
import heartIcon from "../assets/svg/heart.svg";
import { flashSalesProducts } from "../data/flashSales";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const MILLISECONDS_IN = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
};

const STORAGE_KEY = "flash_sales_deadline";

const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  discountPercent,
  ratingCount,
  id,
}) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();
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
        discountPercent,
        ratingCount,
      });
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title,
      price,
      oldPrice,
      discountPercent,
      ratingCount,
    });
    // Cart pagega o'tmaslik, faqat cartga qo'shish
  };

  return (
    <div className="w-full group">
      <div className="relative bg-[#F5F5F5] w-full h-[250px] flex items-center justify-center rounded overflow-hidden">
        <img src={image} alt={title} className="max-h-[180px] object-contain" />

        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#DB4444] text-white text-[12px] font-medium">
          -{discountPercent}%
        </div>
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
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 rounded-b cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-[16px] leading-[24px] font-semibold line-clamp-2 mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-3 mt-2">
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

const products = flashSalesProducts;

const ArrowButton = ({ direction = "left", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#E9E9E9] transition"
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <img
        src={direction === "left" ? leftArrow : rightArrow}
        alt={direction}
        className="w-5 h-5"
      />
    </button>
  );
};

const TimeBox = ({ label, value }) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-[12px] text-[#909090] leading-[18px] mb-1">
        {label}
      </span>
      <span className="text-[40px] font-semibold leading-[48px]">{value}</span>
    </div>
  );
};

const getTimeLeft = (target) => {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / MILLISECONDS_IN.day),
    hours: Math.floor((diff % MILLISECONDS_IN.day) / MILLISECONDS_IN.hour),
    minutes: Math.floor((diff % MILLISECONDS_IN.hour) / MILLISECONDS_IN.minute),
    seconds: Math.floor(
      (diff % MILLISECONDS_IN.minute) / MILLISECONDS_IN.second
    ),
  };
};

const FlashSales = () => {
  const targetTime = useMemo(() => {
    const now = Date.now();
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    const target =
      Number.isFinite(stored) && stored > now
        ? stored
        : now + 4 * MILLISECONDS_IN.hour;
    try {
      localStorage.setItem(STORAGE_KEY, String(target));
    } catch {}
    return target;
  }, []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updated = getTimeLeft(targetTime);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetTime]);

  const [startIndex, setStartIndex] = useState(0);
  const VISIBLE = 5;
  const CARD_WIDTH = 1; // grid bilan to'liq kenglik ishlatiladi
  const GAP_PX = 28;
  const PEEK_FRACTION = 0;
  const PEEK_PX = 0;
  const productsLength = products.length;
  const containerWidth =
    VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP_PX + PEEK_PX;

  const prev = () => {
    setStartIndex((s) => (s - 1 + productsLength) % productsLength);
  };
  const next = () => {
    setStartIndex((s) => (s + 1) % productsLength);
  };

  return (
    <section className="w-full mt-20">
      <div className="container py-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <span className="text-[#DB4444] font-semibold">Today's</span>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="min-w-[220px]">
            <h2 className="text-[36px] font-semibold leading-[48px]">
              Flash Sales
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <TimeBox
              label="Days"
              value={String(timeLeft.days).padStart(2, "0")}
            />
            <span className="text-[#DB4444] text-[32px] font-semibold mt-6">
              :
            </span>
            <TimeBox
              label="Hours"
              value={String(timeLeft.hours).padStart(2, "0")}
            />
            <span className="text-[#DB4444] text-[32px] font-semibold mt-6">
              :
            </span>
            <TimeBox
              label="Minutes"
              value={String(timeLeft.minutes).padStart(2, "0")}
            />
            <span className="text-[#DB4444] text-[32px] font-semibold mt-6">
              :
            </span>
            <TimeBox
              label="Seconds"
              value={String(timeLeft.seconds).padStart(2, "0")}
            />
          </div>

          <div className="flex items-center gap-3">
            <ArrowButton direction="left" onClick={prev} />
            <ArrowButton direction="right" onClick={next} />
          </div>
        </div>

        <div className="mt-8 overflow-hidden w-full">
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: VISIBLE }).map((_, idx) => {
              const p = products[(startIndex + idx) % productsLength];
              return <ProductCard key={`${p.id}-${idx}`} {...p} />;
            })}
          </div>
        </div>
        <div className="mt-18 flex justify-center">
          <button
            type="button"
            className="bg-[#DB4444] text-white px-6 py-3 rounded cursor-pointer"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
