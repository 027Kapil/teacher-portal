import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../utils";

const plans = [
  {
    planId:"1",
    title: "Featured Candidate Plan (30-Days)",
    price: "₹199",
    duration: "30 Days",
    features: [
      { text: "Display Profile at the Top of Candidate Listing for 30-Days", available: true },
      { text: "Profile Completion with Green Check Mark", available: true },
      { text: "Personal Relevant Job Suggestion", available: true },
      { text: "Get Recommended by Team TR for New Job Updates/Interviews: NA", available: false },
      { text: "Get Confidential Job Updates Through Mail / WhatsApp: NA", available: false },
      { text: "Urgent TAG On Profile", available: true },
      { text: "View Contact Details on School/Institution Profile Page", available: true },
      { text: "Plan Expiry: 30 Days", available: true },
    ],
  },
  {
    planId:"2",
    title: "Featured Candidate Plan (60-Days)",
    price: "₹399",
    duration: "60 Days",
    features: [
      { text: "Display Profile at the Top of Candidate Listing for 60-Days", available: true },
      { text: "Profile Completion with Green Check Mark", available: true },
      { text: "Personal Relevant Job Suggestion", available: true },
      { text: "Get Recommended by Team TR for New Job Updates/Interviews", available: true },
      { text: "Get Confidential Job Updates Through Mail / WhatsApp", available: true },
      { text: "Urgent TAG On Profile", available: true },
      { text: "View Contact Details on School/Institution Profile Page", available: true },
      { text: "Plan Expiry: 60 Days", available: true },
    ],
  },
];

const PromotePlans = () => {
   const navigate = useNavigate();

    const handleNavigation = (path, linkName,plan) => {
        navigate(path);
      };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Promote Your Profile</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="border rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300" style={{marginBottom:"20px", padding:'20px'}}>
            <div>
              <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-2xl font-bold text-indigo-600 mb-4">{plan.price} <span className="text-sm text-gray-500">only</span></p>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`mr-2 text-lg ${feature.available ? "text-green-500" : "text-red-500"}`}>
                      {feature.available ? "✅" : "❌"}
                    </span>
                    <span className={feature.available ? "" : "line-through text-gray-400"}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="btn btn-sm btn-primary"     onClick={() => handleNavigation(ROUTE.CHECKOUT_PLAN, ROUTE.CHECKOUT_PLAN,plan)}>Get Started</button>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotePlans;
