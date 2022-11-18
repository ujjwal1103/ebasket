import React from "react";
import { Link } from "react-router-dom";
import { options } from "../options";
const Sidebar = () => {
  return (
    <div className="w-60  shadow-md bg-white px-1  z-50 sidebar">
      <ul className="">
        {options?.map((option) => {
          return (
            <li className="relative" key={option.key}>
              <Link
                to={`/product/getcategory/${option.key}`}
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                {option.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
