
import JobList from "@/components/JobList";
import { useState } from "react";

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobCategories = [
    { label: "View all", value: "all" },
    { label: "Finance", value: "Finance" },
    { label: "IT", value: "IT" },
    { label: "Admin", value: "Admin" },
    { label: "HR", value: "HR" },
    { label: "Digital", value: "Digital" },
  ];

  return (
    <section>
      <div className="relative bg-gray-100 min-h-screen overflow-hidden">
        {/* Gradient background shape */}
        <div className="absolute right-0 top-0 w-2/5 h-full bg-gradient-to-br from-green-300 via-teal-200 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="max-w-4xl mx-auto px-6 py-50">
            <div className="flex flex-col items-center w-full">
              <p className="text-lg text-green-600 font-medium mb-6 text-center">We are Hiring</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
                Be a part of our <br /> amazing team
              </h1>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                Join a team of diverse, talented individuals and help us build a culture that empowers everyone to thrive.
              </p>
              <div className="flex flex-wrap gap-4 mb-10 justify-center w-full">
                {jobCategories.map((cat) => (
                  <button
                    key={cat.value}
                    className={`px-4 py-2 rounded-full border border-black font-medium transition
                      ${selectedCategory === cat.value
                        ? "bg-black text-white border-black"
                        : "bg-white text-black hover:bg-gray-100"}
                    `}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="w-full">
                <JobList selectedCategory={selectedCategory} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
