import React from "react";
import signIn from "../assets/img/signin-img.png";
import googleIcon from "../assets/svg/Icon-Google.svg";

const SignIn = () => {
  return (
    <div className="py-20 flex">
      <div>
        <img src={signIn} alt="signin img" className="object-cover" />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-medium text-black">
              Create an account
            </h1>
            <p>Enter your details below</p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 border-b border-[#999999] focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full py-3 border-b border-[#999999] focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 border-b border-[#999999] focus:outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#DB4444] text-white py-3 rounded-sm cursor-pointer"
            >
              Create Account
            </button>
          </form>
          <div className="mt-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-[#999999] rounded-sm cursor-pointer">
              <img src={googleIcon} alt="google" className="w-5 h-5" />
              <span className="text-gray-700">Sign up with Google</span>
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-[#4D4D4D]">
              Already have account?
              <a href="#" className="text-[#4D4D4D] font-medium underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
