import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(progress), 300);
  }, [progress]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-gray-500 mb-2">Overall Progress</h3>

      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-700"
          style={{ width: `${width}%` }}
        ></div>
      </div>

      <p className="text-right mt-2 text-sm">{progress}%</p>
    </div>
  );
};

export default ProgressBar;