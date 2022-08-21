import React from "react";

import Button from "./Button";
import { icons } from "../icons";

function Controls({ setImage, active }) {
  return (
    <div className="z-10 bg-gray-100 absolute w-full bottom-0 flex content-center">
      {icons.map((icon) => (
        <Button
          icon={icon.icon}
          onClick={() => setImage(icon.id)}
          active={active === icon.id && true}
          key={icon.id}
        />
      ))}
    </div>
  );
}

export default Controls;
