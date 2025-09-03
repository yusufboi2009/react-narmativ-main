import React from "react";
import qrCode from "../assets/img/qrcode.png";
import appStore from "../assets/img/download-appstore.png";
import playMarket from "../assets/img/download-playmarket.png";
import rightIcon from "../assets/svg/footer-right-icon.svg";
import iconFacebook from "../assets/svg/Icon-Facebook.svg";
import iconTwitter from "../assets/svg/Icon-Twitter.svg";
import iconInstagram from "../assets/svg/icon-instagram.svg";
import iconLinkedin from "../assets/svg/Icon-Linkedin.svg";
import iconCopyright from "../assets/svg/icon-copyright.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container py-16">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p className="text-sm text-[#FAFAFA] mb-4">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-[#FAFAFA] rounded-sm py-3 pl-4 pr-12 placeholder:text-[#FAFAFA] text-sm focus:outline-none"
              />
              <img
                src={rightIcon}
                alt="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Support</h4>
            <p className="text-sm text-[#FAFAFA] max-w-[250px] mb-4">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-[#FAFAFA] mb-2">
              <a href="#" className="text-[#FAFAFA]">
                exclusive@gmail.com
              </a>
            </p>
            <p className="text-sm text-[#FAFAFA]">
              <a href="#" className="text-[#FAFAFA]">
                +88015-88888-9999
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Account</h4>
            <ul className="space-y-2 text-sm text-[#FAFAFA]">
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Quick Link</h4>
            <ul className="space-y-2 text-sm text-[#FAFAFA]">
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="block text-[#FAFAFA]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-4">Download App</h4>
            <p className="text-[12px] text-[#FAFAFA] mb-4">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a href="#">
                <img src={qrCode} alt="QR Code" className="w-20 h-20" />
              </a>
              <div className="flex flex-col gap-2">
                <a href="#">
                  <img
                    src={playMarket}
                    alt="Play Market"
                    className="w-[104px] h-10 object-contain"
                  />
                </a>
                <a href="#">
                  <img
                    src={appStore}
                    alt="App Store"
                    className="w-[104px] h-10 object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#">
                <img src={iconFacebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={iconTwitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={iconInstagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={iconLinkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3A3A3A]">
        <div className="container py-6 flex items-center justify-center gap-2 text-[#FAFAFA] text-sm">
          <img src={iconCopyright} alt="copyright" className="w-4 h-4" />
          <span>Copyright Rimel 2022. All right reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
