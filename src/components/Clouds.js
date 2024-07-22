import React from 'react';

const Cloud = ({ topClass, animate }) => {
  return (
    <div className={`absolute -z-40 ${topClass} ${animate}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="100"
        height="100"
        className="fill-current text-white"
      >
        <path d="M48,32a14,14,0,0,0-27.6-4.6A10,10,0,1,0,10,40H48a10,10,0,0,0,0-20H45.3A14.28,14.28,0,0,0,48,32Z" />
      </svg>
    </div>
  );
};

export default Cloud;