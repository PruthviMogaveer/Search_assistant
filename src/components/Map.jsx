import React, { useState } from 'react';
import usStatesData from "../data/states.json";

// Comprehensive US States path data with initial percentages


const USPercentageMap = () => {
  const [stateData, setStateData] = useState(
    Object.fromEntries(
      Object.entries(usStatesData).map(([stateId, stateInfo]) => [stateId, stateInfo.percentage])
    )
  );

  const [hoveredState, setHoveredState] = useState(null);

  // Color function based on percentage
  const getColorForPercentage = (percentage) => {
    if (percentage === undefined) return 'rgba(200,200,255,0.5)';
    
    // Gradient from light blue to dark blue
    const intensity = Math.floor((percentage / 100) * 255);
    return `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
  };


  return (
    <div className="w-full h-[600px] relative">
      <svg 
        viewBox="0 0 800 600" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {Object.entries(usStatesData).map(([stateId, stateInfo]) => {
          const percentage = stateData[stateId];
          
          return (
            <path
              key={stateId}
              d={stateInfo.path}
              fill={getColorForPercentage(percentage)}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              onMouseEnter={() => setHoveredState(stateId)}
              onMouseLeave={() => setHoveredState(null)}
              className="transition-all duration-200 ease-in-out cursor-pointer hover:stroke-black hover:stroke-2"
            />
          );
        })}
      </svg>

      {/* Hover info display */}
      {hoveredState && (
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg text-black">
          <strong>{usStatesData[hoveredState].name} ({hoveredState})</strong>: 
          {stateData[hoveredState] !== undefined 
            ? `${stateData[hoveredState]}%` 
            : 'No data'}
        </div>
      )}
    </div>
  );
};

export default USPercentageMap;