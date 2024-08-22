import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6">
      <div
        className={`h-full rounded-full text-center text-white transition-width duration-300 ease-in-out ${progress > 5 ?  'bg-orange-500' : 'bg-red-500'}`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
