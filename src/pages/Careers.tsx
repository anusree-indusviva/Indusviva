
import JobList from "@/components/JobList";
import { useState } from "react";

const FILTERS = [
  { label: "View all", value: "all" },
  { label: "Finance", value: "finance" },
  { label: "IT", value: "it" },
  { label: "Admin", value: "admin" },
  { label: "Special Projects", value: "specialprojects" },
  { label: "HR", value: "hr" },
  { label: "Compliance", value: "compliance" },
];

const Careers = () => {
  const [selected, setSelected] = useState("all");

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto pt-48 pb-12 px-4 sm:px-6 lg:px-8 text-left">
        <p className="text-teal-700 font-medium mb-2 text-lg">We are Hiring</p>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Be a part of our amazing team</h1>
        <p className="text-gray-600 mb-8">Join a team of diverse, talented individuals and help us build a culture that empowers everyone to thrive.</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              className={`px-5 py-2 rounded-full border border-gray-300 font-semibold shadow transition-colors ${selected === filter.value ? "bg-black text-white" : "bg-white text-gray-700"}`}
              onClick={() => setSelected(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Top border perfectly aligned with job cards */}
        <div className="border-t border-black w-full mb-6" />
        <JobList filter={selected} />
      </div>
    </section>
  );
};

export default Careers;
