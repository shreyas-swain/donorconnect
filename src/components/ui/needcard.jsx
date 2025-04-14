
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getCompletionPercentage } from "@/lib/mockData";

const NeedCard = ({ need }) => {
  const completionPercentage = getCompletionPercentage(need);
  
  const getBgColor = () => {
    if (need.status === "Fulfilled") return "bg-green-100 text-green-800";
    if (need.priority === "High") return "bg-red-100 text-red-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <Link 
      to={`/needs/${need.id}`}
      className="block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-lg text-gray-800">{need.title}</h3>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getBgColor()}`}>
              {need.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{need.description}</p>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>{need.currentQuantity} of {need.targetQuantity} ({completionPercentage}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${need.status === "Fulfilled" ? "bg-green-500" : "bg-blue-500"}`}
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Category: {need.category}</span>
        <span>Priority: {need.priority}</span>
      </div>
    </Link>
  );
};

export default NeedCard;
