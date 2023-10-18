import React from "react";

const LoadingFood = () => {
  return (
    <div className="bg-[#0F1D22] flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="w-20 h-20 border-lime-200 border-2 rounded-full"></div>
          <div className="w-20 h-20 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
          <div className="w-10 h-10 border-lime-200 border-2 rounded-full"></div>
          <div className="w-10 h-10 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
          <div className="w-5 h-5 border-lime-200 border-2 rounded-full"></div>
          <div className="w-5 h-5 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingFood;
