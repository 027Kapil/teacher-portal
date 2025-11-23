import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    phone: "",
    email: "",
    gst: "",
    notes: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Order placed:", formData);
    alert("✅ Order placed successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Checkout</h2>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Billing Details */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Enter Billing Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name *</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name *</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Name (Optional)</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country / Region *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State / County *</label>
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Town / City *</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Postcode / ZIP *</label>
              <input
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Street Address *</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">GST Number (Optional)</label>
            <input
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Order Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            ></textarea>
          </div>
        </form>

        {/* Right Section - Order Details */}
        <div className="border rounded-lg p-6 bg-gray-50 space-y-4">
          <h3 className="text-xl font-semibold mb-4">Order Details</h3>

          <div className="space-y-2 border-b pb-3">
            <div className="flex justify-between text-sm">
              <span>Featured Candidate Plan (30-Days)</span>
              <span>₹199</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹199</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Credit / Debit Card / Internet Banking / UPI (Razorpay)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" />
              <span>Direct Bank Transfer (NEFT / IMPS / RTGS)</span>
            </label>
          </div>

          <div className="mt-4">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-sm">
                I have read and agree to the website terms and conditions *
              </span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
