import React from "react";

function Image({ url, alt, show }) {
  return (
    <img
      src={url}
      alt={alt}
      draggable="false"
      className={`object-cover absolute top-0 left-0 h-full z-1 select-none ${
        show ? "opacity-1" : "opacity-0"
      } 
      transition-opacity duration-300 ease-in-out
      `}
    />
  );
}

export default Image;
