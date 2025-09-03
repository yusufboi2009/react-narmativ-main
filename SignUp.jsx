import React from "react";
import signIn from "../assets/img/signin-img.png";
import googleIcon from "../assets/svg/Icon-Google.svg";

const SignUp = () => {
  return (
    <div className="py-20 flex">
      <div>
        <img src={signIn} alt="signin img" className="object-cover" />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-medium text-black">
              Log in to Exclusive
            </h1>
            <p>Enter your details below</p>
          </div>

          <form className="space-y-6">
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
          </form>
          <div className="mt-6 flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#DB4444] text-white px-12 py-4 rounded-sm cursor-pointer"
            >
              Login
            </button>
            <a href="#" className="text-[#DB4444] font-medium underline">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
