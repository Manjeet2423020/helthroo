import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-[5%] md:mx-[10%] max-w-7xl relative z-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
