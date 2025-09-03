import React from "react";

const Banner = () => {
  return (
    <div className="h-[48px] w-full bg-black flex items-center ">
      <span className="text-[#FAFAFA] text-center text-sm leading-[21px] w-full">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-bold underline cursor-pointer">ShopNow</span>
      </span>
      <div
        className="ml-auto flex items-center"
        style={{ marginRight: "200px" }}
      >
        <select className="bg-black text-white border-none text-sm focus:outline-none">
          <option>English</option>
          <option>Russian</option>
        </select>
      </div>
    </div>
  );
};

export default Banner;
