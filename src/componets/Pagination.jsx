import React from "react";

const Pagination = ({handlePrev, handleNext, pageNo}) => {
  return (
    <div className="bg-gray-400  p-4 m-8  flex justify-center ">
     <div onClick={handlePrev} className="px-8 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
     <div className="">{pageNo}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  );
};

export default Pagination;
