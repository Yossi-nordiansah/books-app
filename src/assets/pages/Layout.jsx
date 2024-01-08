import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-800 min-h-[100vh] py-10 laptop:px-40 tablet:px-24 mobile-sm:px-4">
      <div className="bg-gray-600 p-8 rounded-lg">
        <div className="flex items-center justify-center">
          <p className="text-2xl text-white font-bold mobile-sm:mb-6">Book App</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;