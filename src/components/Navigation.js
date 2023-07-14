import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className=" h-24 items-center px-12 flex justify-between">
          <li>
            <img src="../img/subaru-logo.webp" alt="subaru logo" />
          </li>
          <li className=" text-blue-500 font-medium"> Menu</li>
        </ul>
      </nav>
    </div>
  );
}
