import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleReturnToShop = () => {
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Add some products to your cart to get started!
          </p>
          <button
            onClick={handleReturnToShop}
            className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-[#B91C1C] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="container py-4">
        <nav className="text-sm text-gray-600">
          <span
            className="hover:text-[#DB4444] cursor-pointer"
            onClick={handleReturnToShop}
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-[#DB4444]">Cart</span>
        </nav>
      </div>

      {/* Cart Table */}
      <div className="container py-8">
        <div className="bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Product
                  </th>
                  <th className="text-center py-4 px-6 font-medium text-gray-700">
                    Price
                  </th>
                  <th className="text-center py-4 px-6 font-medium text-gray-700">
                    Quantity
                  </th>
                  <th className="text-center py-4 px-6 font-medium text-gray-700">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-contain"
                          />
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                          >
                            ×
                          </button>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-gray-900">
                          ${item.price}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <span className="text-gray-600">-</span>
                        </button>
                        <span className="w-12 text-center font-medium">
                          {String(item.quantity).padStart(2, "0")}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-gray-600">+</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handleReturnToShop}
            className="px-6 py-3 bg-white text-gray-700 rounded border border-[#808080] hover:bg-gray-50 transition-colors"
          >
            Return To Shop
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 rounded border border-[#808080] hover:bg-gray-50 transition-colors">
            Update Cart
          </button>
        </div>

        {/* Coupon and Cart Total Section */}
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex gap-4 items-end">
              <div className="w-80">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-[#DB4444] text-white rounded cursor-pointer">
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="lg:w-96">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Cart Total
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-lg">Subtotal:</span>
                  <span className="font-semibold text-lg">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-lg">Shipping:</span>
                  <span className="font-semibold text-lg text-green-600">
                    Free
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                      Total:
                    </span>
                    <span className="text-xl font-bold text-[#DB4444]">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#DB4444] text-white py-4 rounded-lg  font-semibold cursor-pointer hover:bg-[#B91C1C] transition-colors"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
