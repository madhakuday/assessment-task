import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-gray-300 animate-pulse rounded-md p-4 h-full w-full">
      <div className="bg-gray-400 w-full h-32 mb-4 rounded-md"></div>
      <div className="bg-gray-400 w-3/4 h-4 mb-2 rounded-md"></div>
      <div className="bg-gray-400 w-1/2 h-4 rounded-md"></div>
    </div>
  );
};

export default Skeleton;
