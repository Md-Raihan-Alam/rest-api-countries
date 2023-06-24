import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
      <p className="ml-2 text-lg text-gray-900">Loading...</p>
    </div>
  );
};

export default LoadingPage;
