import React, { useState } from "react";
import leftArrow from "../assets/svg/icons_arrow-left.svg";
import rightArrow from "../assets/svg/icons_arrow-right.svg";
import iconPhone from "../assets/svg/Category-CellPhone.svg";
import iconComputer from "../assets/svg/Category-Computer.svg";
import iconWatch from "../assets/svg/Category-SmartWatch.svg";
import iconCamera from "../assets/svg/Category-Camera.svg";
import iconHeadphone from "../assets/svg/Category-Headphone.svg";
import iconGamepad from "../assets/svg/Category-Gamepad.svg";

const categories = [
  { id: "c1", title: "Phones", icon: iconPhone },
  { id: "c2", title: "Computers", icon: iconComputer },
  { id: "c3", title: "SmartWatch", icon: iconWatch },
  { id: "c4", title: "Camera", icon: iconCamera },
  { id: "c5", title: "HeadPhones", icon: iconHeadphone },
  { id: "c6", title: "Gaming", icon: iconGamepad },
  { id: "c7", title: "Phones", icon: iconPhone },
  { id: "c8", title: "Computers", icon: iconComputer },
];

const Tile = ({ title, icon }) => {
  const base =
    "w-full h-[145px] rounded flex flex-col items-center justify-center border transition cursor-pointer group";
  const state = "bg-white text-black border-[#E4E4E4]";
  const hover = "hover:bg-[#DB4444] hover:text-white hover:border-transparent";
  return (
    <div className={`${base} ${state} ${hover}`}>
      <img
        src={icon}
        alt={title}
        className="w-14 h-14 mb-3 transition group-hover:invert"
      />
      <span className="text-[16px] leading-[24px]">{title}</span>
    </div>
  );
};

const ArrowButton = ({ direction = "left", onClick }) => (
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

const CategorySlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const VISIBLE = 6;
  const total = categories.length;

  const prev = () => setStartIndex((s) => (s - 1 + total) % total);
  const next = () => setStartIndex((s) => (s + 1) % total);

  return (
    <section className="w-full">
      <div className="container">
        <hr className="border-[#E4E4E4]" />
        <div className="mt-20 flex items-center gap-3 mb-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <span className="text-[#DB4444] font-semibold">Categories</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[36px] font-semibold leading-[48px]">
            Browse By Category
          </h2>
          <div className="flex items-center gap-3">
            <ArrowButton direction="left" onClick={prev} />
            <ArrowButton direction="right" onClick={next} />
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div className="grid grid-cols-6 gap-8">
            {Array.from({ length: VISIBLE }).map((_, idx) => {
              const item = categories[(startIndex + idx) % total];
              return <Tile key={`${item.id}-${idx}`} {...item} />;
            })}
          </div>
        </div>

        <div className="mt-[70px]">
          <hr className="border-[#E4E4E4]" />
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
