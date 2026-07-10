import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-24 min-h-[200px]">
      <div className="w-8 h-8 border-[3px] border-teal-500/20 border-t-teal-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
