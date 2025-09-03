import React, { useState, useEffect, useRef } from "react";
import iphoneImg from "../assets/img/hero-iphone.png";
import appleLogo from "../assets/img/apple-logo.png";
import rightBtn from "../assets/svg/right-btn.svg";

const slides = [
  {
    logo: (
      <img
        src={appleLogo}
        alt="Apple Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    ),
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    link: "#",
    image: iphoneImg,
  },
  {
    logo: (
      <img
        src={appleLogo}
        alt="Apple Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    ),
    title: "iPhone 15 Series",
    discount: "Up to 15% off Voucher",
    link: "#",
    image: iphoneImg,
  },
  {
    logo: (
      <img
        src={appleLogo}
        alt="Apple Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    ),
    title: "iPhone 16 Series",
    discount: "Up to 5% off Voucher",
    link: "#",
    image: iphoneImg,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const slidesLength = slides.length;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesLength);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [slidesLength]);

  // Discount matnini ikki qatorga bo'lish uchun
  const discount = slides[current].discount;
  const discountWords = discount.split(" ");
  const firstLine = discountWords.slice(0, 3).join(" ");
  const secondLine = discountWords.slice(3).join(" ");

  return (
    <div className="w-full ml-[45px] bg-black flex flex-col px-20 mt-10">
      <div className="flex flex-row items-center flex-1 min-h-[344px] h-[344px]">
        <div className="flex-1 flex flex-col justify-center gap-0 md:gap-1 text-white z-10 h-full">
          <div className="flex items-center gap-2 mb-2">
            {slides[current].logo}
            <span className="font-poppins font-normal text-[16px] leading-[24px] opacity-80">
              {slides[current].title}
            </span>
          </div>
          <div className="font-inter font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] mb-4 md:mb-6">
            {firstLine}
            <br className="hidden md:block" />
            {secondLine}
          </div>
          <a
            href={slides[current].link}
            className="inline-flex items-center gap-2 text-white font-poppins font-medium text-[16px] leading-[24px] underline underline-offset-5 hover:text-gray-200 transition group"
          >
            Shop Now
            <img src={rightBtn} alt="right arrow" className="w-5 h-5" />
          </a>
        </div>
        <div className="flex-1 flex justify-end items-center z-10 h-full">
          <img
            src={slides[current].image}
            alt="iPhone"
            className="max-w-[460px] max-h-[320px] w-auto h-auto object-contain "
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mb-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={
              idx === current
                ? "w-[14px] h-[14px] rounded-full border-2 border-white bg-[#E94B4B] transition-all duration-200"
                : "w-[14px] h-[14px] rounded-full bg-gray-400 transition-all duration-200"
            }
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
