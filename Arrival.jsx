import React from "react";
import bigImg from "../assets/img/arrival-big-photo.png";
import womenImg from "../assets/img/arrival-women.png";
import small1 from "../assets/img/arrival3.png";
import small2 from "../assets/img/arrival4.png";

const Pill = ({ children }) => (
  <span className="inline-block bg-[#DB4444] text-white text-[12px] px-2 py-1 rounded-sm">
    {children}
  </span>
);

const Box = ({ children, className = "" }) => (
  <div className={`bg-black rounded flex items-end p-6 ${className}`}>
    {children}
  </div>
);

const Arrival = () => {
  return (
    <section className="w-full">
      <div className="container py-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <span className="text-[#DB4444] font-semibold">Featured</span>
        </div>
        <h2 className="text-[36px] font-semibold leading-[48px] mb-8">
          New Arrival
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <Box className="h-[600px] relative overflow-hidden">
            <img
              src={bigImg}
              alt="PlayStation 5"
              className="absolute inset-0 w-full "
            />
            <div className="relative z-10 max-w-[420px] text-white">
              <h3 className="text-[24px] font-semibold mb-2">PlayStation 5</h3>
              <p className="text-[14px] text-[#D1D1D1] mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button type="button" className="underline cursor-pointer">
                Shop Now
              </button>
            </div>
          </Box>

          <div className="grid grid-rows-2 gap-6">
            <Box className="h-[288px] relative overflow-hidden">
              <img
                src={womenImg}
                alt="Women's Collections"
                className="absolute inset-0 w-full h-full object-cover "
              />
              <div className="relative z-10 text-white">
                <h3 className="text-[24px] font-semibold mb-2">
                  Women's Collections
                </h3>
                <p className="text-[14px] text-[#D1D1D1] mb-4 max-w-[320px]">
                  Featured woman collections that give you another vibe.
                </p>
                <button type="button" className="underline cursor-pointer">
                  Shop Now
                </button>
              </div>
            </Box>

            <div className="grid grid-cols-2 gap-6">
              <Box className="h-[288px] relative overflow-hidden">
                <img
                  src={small1}
                  alt="Speakers"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] h-[220px] object-cover"
                />
                <div className="relative z-10 text-white">
                  <h3 className="text-[24px] font-semibold mb-2">Speakers</h3>
                  <p className="text-[14px] text-[#D1D1D1] mb-4">
                    Amazon wireless speakers
                  </p>
                  <button type="button" className="underline cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </Box>
              <Box className="h-[288px] relative overflow-hidden">
                <img
                  src={small2}
                  alt="Perfume"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] h-[220px] object-cover"
                />
                <div className="relative z-10 text-white">
                  <h3 className="text-[24px] font-semibold mb-2">Perfume</h3>
                  <p className="text-[14px] text-[#D1D1D1] mb-4">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button type="button" className="underline cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
