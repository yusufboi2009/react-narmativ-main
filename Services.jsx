import React from "react";
import deliveryIcon from "../assets/svg/icon-delivery.svg";
import customerServiceIcon from "../assets/svg/Icon-Customer-service.svg";
import secureIcon from "../assets/svg/Icon-secure.svg";
import arrowUpIcon from "../assets/svg/icons_arrow-up.svg";

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full">
      <div className="container py-[120px]">
        <div className="">
          <div className="w-full grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <img src={deliveryIcon} alt="Delivery" className="w-6 h-6" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-black mb-1 uppercase">
                FREE AND FAST DELIVERY
              </h4>
              <p className="text-sm text-gray-600">
                Free delivery for all orders over $140
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <img
                    src={customerServiceIcon}
                    alt="Customer Service"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-black mb-1 uppercase">
                24/7 CUSTOMER SERVICE
              </h4>
              <p className="text-sm text-gray-600">
                Friendly 24/7 customer support
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <img src={secureIcon} alt="Security" className="w-6 h-6" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-black mb-1 uppercase">
                MONEY BACK GUARANTEE
              </h4>
              <p className="text-sm text-gray-600">
                We return money within 30 days
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer"
              aria-label="Scroll to top"
            >
              <img src={arrowUpIcon} alt="Up" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
