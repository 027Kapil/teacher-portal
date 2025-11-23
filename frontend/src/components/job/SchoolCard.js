import React from "react";

const SchoolCard = ({ school }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-sm border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-200 mb-4">
      {/* Left Section */}
      <div className="flex items-center gap-4 w-full md:w-2/3">
        <img
          src={school.logo}
          alt={school.name}
          className="w-16 h-16 object-contain rounded-lg border border-gray-100"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{school.name}</h3>
          <p className="text-sm text-blue-600 font-medium">{school.board}</p>
          <p className="text-sm text-gray-500">{school.location}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row items-center gap-3 mt-3 md:mt-0">
        {school.isFeatured && (
          <span className="bg-yellow-400 text-xs text-white font-semibold px-2 py-1 rounded-md">
            Featured
          </span>
        )}

        {school.vacancies > 0 && (
          <span className="text-blue-600 font-medium text-sm">
            {school.vacancies} Vacancies
          </span>
        )}

        <div className="flex gap-2">
          <button className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            View
          </button>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Easy Apply
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample Data
const FindSchools = () => {
  const schools = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_logo.png",
      name: "Shri Ganesh Group of Institutions",
      board: "CBSE Board School",
      location: "Sidhi, Madhya Pradesh, India",
      vacancies: 2,
      isFeatured: true,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Blue_logo.png",
      name: "Heartfulness International School",
      board: "CBSE Board School",
      location: "Hyderabad, Telangana, India",
      vacancies: 3,
      isFeatured: false,
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Schools</h2>

      <div className="max-w-5xl mx-auto">
        {schools.map((school, index) => (
          <SchoolCard key={index} school={school} />
        ))}
      </div>
    </div>
  );
};

export default FindSchools;
