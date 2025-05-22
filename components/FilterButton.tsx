import React from "react";

function FilterButton({ children, onClick }) {
  return (
    <button
      className="bg-[#56B280] py-1.5 px-10 text-white rounded-full cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
