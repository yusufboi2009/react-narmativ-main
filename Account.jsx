import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimell111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "1234",
    newPassword: "",
    confirmPassword: "",
  });

  // Separate state for display values (welcome message)
  const [displayData, setDisplayData] = useState({
    firstName: "Md",
    lastName: "Rimel",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Update display values only when saving
    setDisplayData({
      firstName: formData.firstName,
      lastName: formData.lastName,
    });

    // Here you would typically save to backend
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleCancel = () => {
    // Reset form to original values
    setFormData({
      firstName: "Md",
      lastName: "Rimel",
      email: "rimell111@gmail.com",
      address: "Kingston, 5236, United State",
      currentPassword: "1234",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Success Message Modal */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <span className="font-medium">Yangilandi</span>
        </div>
      )}

      {/* Breadcrumb and Welcome Message in same row */}
      <div className="flex justify-between items-center mb-8">
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">My Account</span>
        </nav>

        <h2 className="text-xl font-medium text-gray-900">
          Welcome!{" "}
          <span className="text-[#DB4444]">
            {displayData.firstName} {displayData.lastName}
          </span>
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-8">
        {/* Left Sidebar Navigation */}
        <div className="w-64">
          <div className="bg-gray-50 rounded-lg">
            {/* Manage My Account Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Manage My Account
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/account/profile"
                    className="text-[#DB4444] font-medium hover:text-red-600 transition-colors ml-[35px] block"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/address"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    Address Book
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/payment"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    My Payment Options
                  </Link>
                </li>
              </ul>
            </div>

            {/* My Orders Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                My Orders
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/account/returns"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    My Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/cancellations"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  >
                    My Cancellations
                  </Link>
                </li>
              </ul>
            </div>

            {/* My WishList Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                My WishList
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/wishlist"
                    className="text-gray-700 hover:text-gray-900 transition-colors ml-[35px] block"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content Area - Edit Your Profile Form */}
        <div className="flex-1">
          <div className="bg-white p-8 rounded-lg">
            {/* Edit Your Profile Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#DB4444] mb-6">
                Edit Your Profile
              </h2>

              {/* Two Column Layout for Input Fields */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* First Name */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Password Changes Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Password Changes
                </h3>

                <div className="space-y-4">
                  {/* Current Password */}
                  <div>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Current Password"
                      className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                    />
                  </div>

                  {/* New Password */}
                  <div>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="New Password"
                      className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                    />
                  </div>

                  {/* Confirm New Password */}
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm New Password"
                      className="w-full px-4 py-4 bg-[#F5F5F5] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="px-6 py-3 bg-[#DB4444] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
