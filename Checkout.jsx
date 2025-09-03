import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: true,
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [couponCode, setCouponCode] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Add some products to your cart before checkout!
          </p>
          <Link
            to="/"
            className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-[#B91C1C] transition-colors inline-block cursor-pointer"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="container py-20">
        <nav className="text-sm text-gray-600">
          <span className="hover:text-[#DB4444] cursor-pointer">Account</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#DB4444] cursor-pointer">
            My Account
          </span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#DB4444] cursor-pointer">Product</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#DB4444] cursor-pointer">View Cart</span>
          <span className="mx-2">/</span>
          <span className="text-[#DB4444]">CheckOut</span>
        </nav>
      </div>

      {/* Main Checkout Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Billing Details Form */}
          <div>
            {/* Billing Details Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Billing Details
            </h2>

            {/* Billing Details Form */}
            <form className="space-y-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter company name (optional)"
                />
              </div>

              {/* Street Address */}
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Street Address*
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter street address"
                />
              </div>

              {/* Apartment */}
              <div>
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter apartment, floor, etc."
                />
              </div>

              {/* Town/City */}
              <div>
                <label
                  htmlFor="townCity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Town/City*
                </label>
                <input
                  type="text"
                  id="townCity"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter town or city"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter phone number"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-md"
                  placeholder="Enter email address"
                />
              </div>

              {/* Save Information Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#DB4444] border-gray-300 rounded accent-[#DB4444]"
                />
                <label
                  htmlFor="saveInfo"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary & Payment */}
          <div className="bg-white p-6 rounded-lg h-fit mt-20">
            {/* Order Items */}
            <div className="mb-6">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image || "/src/assets/img/g-27.png"}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-semibold text-gray-900">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <div className="space-y-2">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Subtotal:</span>
                  <span className="text-sm font-medium text-gray-900">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Shipping:</span>
                  <span className="text-sm font-medium text-green-600">
                    Free
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-base font-semibold text-gray-900">
                    Total:
                  </span>
                  <span className="text-base font-semibold text-gray-900">
                    ${total}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Payment Method
              </h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-[#DB4444] border-gray-300"
                  />
                  <span className="text-sm text-gray-700">Bank</span>
                  <div className="flex space-x-2 ml-auto">
                    <img
                      src="/src/assets/svg/Bkash.svg"
                      alt="bKash"
                      className="w-8 h-5 object-contain"
                    />
                    <img
                      src="/src/assets/svg/Visa.svg"
                      alt="VISA"
                      className="w-8 h-5 object-contain"
                    />
                    <img
                      src="/src/assets/svg/Mastercard.svg"
                      alt="Mastercard"
                      className="w-8 h-5 object-contain"
                    />
                    <img
                      src="/src/assets/svg/Nagad.svg"
                      alt="Nagad"
                      className="w-8 h-5 object-contain"
                    />
                  </div>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-[#DB4444] border-gray-300"
                  />
                  <span className="text-sm text-gray-700">
                    Cash on delivery
                  </span>
                </label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Coupon Code
              </h4>
              <div className="flex justify-between">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-[300px] h-[56px] px-3 border border-gray-300 rounded-[4px] text-sm"
                />
                <button
                  type="button"
                  className="bg-[#DB4444] text-white px-4 h-[56px] rounded-[4px] text-sm font-medium hover:bg-[#B91C1C] transition-colors cursor-pointer"
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="button"
              className="w-[200px] bg-[#DB4444] text-white py-3 px-4 rounded-[4px] font-medium hover:bg-[#B91C1C] transition-colors cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
