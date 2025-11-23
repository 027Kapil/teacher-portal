import React from "react";

const SchoolJobDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              School Teacher
            </h1>
            <p className="text-gray-600 mt-1">
              @Heartfulness International School • CBSE Board School
            </p>
            <p className="text-gray-500 mt-1">
              Hyderabad, Telangana, India — D.No: 13-110, Kanha Village, Nandigama, Ranga Reddy
            </p>
            <div className="text-gray-500 mt-2">
              📅 Posted: 13/10/2025 | 💰 Salary: ₹35,000 – ₹45,000 / Month
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Required Job Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Required Job Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
              <p><strong>Applications Accepting From:</strong> Anywhere in India</p>
              <p><strong>Job Role:</strong> School Teachers</p>
              <p><strong>Teaching Subjects:</strong> English, Social Science, Lab Assistant</p>
              <p><strong>Experience:</strong> 3 Years</p>
              <p><strong>Qualification:</strong> Master Degree</p>
              <p><strong>Specialization:</strong> B.Ed or equivalent</p>
              <p><strong>Professional Qualification:</strong> B.Ed</p>
              <p><strong>Gender:</strong> Any</p>
              <p><strong>Language Proficiency:</strong> English, Hindi</p>
              <p><strong>Benefits Offered:</strong> Provident Fund, Other</p>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Job Description
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Role Summary:</strong> Responsible for teaching as per CBSE curriculum,
              preparing students for board exams, and fostering scientific thinking and inquiry.
            </p>

            <h3 className="font-semibold text-gray-800 mt-4 mb-2">
              Key Responsibilities:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Plan and deliver engaging lessons aligned with CBSE/NCERT.</li>
              <li>Conduct lab practicals and maintain lab safety.</li>
              <li>Prepare students for board exams through tests and feedback.</li>
              <li>Maintain academic records and performance reports.</li>
              <li>Support students in science stream guidance.</li>
              <li>Participate in school events, PTMs, and departmental meetings.</li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Apply Section */}
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md">
              APPLY NOW
            </button>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <iframe
              title="school-location"
              className="w-full h-48"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.365821928165!2d78.4300!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z17.3850°N%2C78.4300°E!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

          {/* More Jobs Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              More Jobs From Heartfulness International School
            </h3>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <p className="font-medium text-gray-800">Primary Teacher Grades 1–5</p>
                <p className="text-sm text-gray-600">
                  Hyderabad, Telangana, India
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Pre–Primary School Teacher</p>
                <p className="text-sm text-gray-600">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
            <button className="w-full mt-4 text-blue-600 font-semibold hover:underline">
              VIEW ALL JOBS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolJobDetails;
