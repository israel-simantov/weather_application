import React from "react";

function LoadingScreen() {
  
    return (
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <div className="text-center">
          <div className="animate-spin text-blue-500 text-4xl mb-2">⏳</div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }


export default LoadingScreen;
