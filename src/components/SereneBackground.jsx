import React from "react";

const SereneBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>
      
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #7c3aed 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%237c3aed' stroke-width='0.5'/%3E%3C/svg%3E")`
      }}></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1200 40" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 L0,30 C100,35 300,25 500,30 C700,35 900,25 1200,30 L1200,40 Z" 
            fill="#7c3aed" 
          />
        </svg>
      </div>
    </div>
  );
};

export default SereneBackground;