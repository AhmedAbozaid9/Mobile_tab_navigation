import React from "react";

function Button({ icon, onClick, active }) {
  return (
    <button
      className={`px-5 py-2 flex-1 ${
        active && "bg-purple-500 text-gray-100"
      } hover:bg-purple-500 hover:text-gray-100 transition-colors ease-in-out duration-300`}
      onClick={onClick}
    >
      <i className={icon}></i>
    </button>
  );
}

export default Button;
