import NavigationHeroSection from "@/components/NavigationHeroSection";
import React, { useState } from "react";

const Cv: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <section className="euphoria-script-regular ">
        <NavigationHeroSection title="Application Form" path="cv" />
      </section>

      {/* Form or Thank You */}
      {!submitted ? (
        <form className="max-w-xl w-full mx-auto bg-gray-100 shadow-2xl rounded-2xl p-10 mt-24 mb-24 border border-gray-200" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-extrabold text-center mb-10 tracking-tight text-gray-900">Application Form</h2>
          <p className="text-center text-gray-500 mb-8">Complete this form to submit your CV for review.</p>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Name <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 transition" />
              <input type="text" placeholder="Last Name" className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 transition" />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 transition" />
          </div>
          {/* Date */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Date <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 transition" />
          </div>
          {/* Mobile */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Mobile <span className="text-red-500">*</span></label>
            <input type="tel" placeholder="Mobile Number" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 transition" />
          </div>

          {/* CV Upload */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2">CV <span className="text-red-500">*</span></label>
            <input type="file" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>

          <button type="submit" className="w-full bg-green-900 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition">Submit</button>
        </form>
      ) : (
  <div className="max-w-xl w-full mx-auto bg-gray-100 shadow-2xl rounded-2xl p-10 mt-24 mb-24 border border-gray-200 text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-green-900">Thank you for applying!</h2>
          <p className="text-lg text-gray-700">Your application has been received. We appreciate your interest and will review your submission soon.</p>
        </div>
      )}
    </div>
  );
};

export default Cv;