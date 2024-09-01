import React from 'react';

const CustomScrollbarContainer = ({ children }) => {
  return (
    <div className="custom-scrollbar">
      <style jsx>{`
        .custom-scrollbar {
          overflow-y: auto;
          height: 100%;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000235;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8080d7;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9090e7;
        }
      `}</style>
      {children}
    </div>
  );
};

export default CustomScrollbarContainer;