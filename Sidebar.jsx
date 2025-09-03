import React from "react";
import dropdownIcon from "../assets/svg/dropdown.svg";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Sidebar = () => {
  return (
    <aside className="w-[300px] bg-white border-r border-[#E4E4E4] flex flex-col pt-10">
      {categories.map((cat, idx) => (
        <div
          key={cat}
          className="flex items-center justify-between pr-4 py-2 cursor-pointer hover:bg-[#F5F5F5] transition"
        >
          <span className="text-[16px] text-[#000] font-normal whitespace-nowrap">
            {cat}
          </span>
          {(idx === 0 || idx === 1) && (
            <img src={dropdownIcon} alt="dropdown" className="w-4 h-4" />
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
