import React from "react";
import { useState } from "react";

import { images } from "../data.js";
import Controls from "./Controls.jsx";
import Image from "./Image";

function MobileTab() {
  const [image, setImage] = useState(0);

  return (
    <div className="relative w-340 h-600 mt-2 overflow-hidden rounded-lg border-solid border-gray-100 border-4">
      <div className="imgsContainer">
        {images.map((img, idx) => (
          <Image
            key={img.id}
            url={img.url}
            alt={img.alt}
            show={image === idx && true}
          />
        ))}
      </div>
      <Controls setImage={setImage} active={image}/>
    </div>
  );
}

export default MobileTab;
