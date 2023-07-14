import React from "react";
import subaruLogo from "../img/subaru-logo.webp";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="h-24 items-center px-12 flex justify-between">
          <li>
            <img className="max-w-xs w-36" src={subaruLogo} alt="subaru logo" />
          </li>
          <li className="text-blue-500 font-medium ">Menu</li>
        </ul>
      </nav>
    </div>
  );
}
