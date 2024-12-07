import React from "react";
import { Home, RefreshCw } from "lucide-react";

const NotFoundPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 max-w-full relative bg-color/10 overflow-x-hidden">
      <img
        className="absolute top-[0px] left-0 w-[1600px] h-[870.8px] lg:w-[800px] lg:h-[435.4px]"
        alt=""
        src="/background.svg"
      />
      <img
        className="absolute top-0 rotate-180 left-[1600px] w-[1600px] h-[870.8px] lg:left-[800px] lg:w-[800px] lg:h-[435.4px]"
        alt=""
        src="/background.svg"
      />
      <div className="max-w-md w-full shadow-lg rounded-xl p-8 text-center mq750:max-w-[80%] bg-color/5 z-20">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Page Not Found</p>

          <p className="text-gray-500 mb-8">
            Oops! The page you're looking for seems to have taken a wrong turn.
            Don't worry, it happens to the best of us.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoHome}
              className="flex items-center bg-color cursor-pointer text-white px-4 py-2 rounded-md hover:bg-color/70 transition duration-300"
            >
              <Home className="mr-2" size={20} />
              Go Home
            </button>

            <button
              onClick={handleReload}
              className="flex items-center bg-gray-200 cursor-pointer text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
            >
              <RefreshCw className="mr-2" size={20} />
              Reload
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
          Error: Unable to find the requested page
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
