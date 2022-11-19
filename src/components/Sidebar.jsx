import React from "react";
import { Link } from "react-router-dom";
import { options } from "../options";
const Sidebar = () => {
  return (
    <div className="w-60  shadow-md bg-white dark:bg-gray-800 px-1  z-50 sidebar" 
    style={{flex:0.1}}>
      <ul className="">
        <li>
          <Link to="/product" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 dark:text-gray-100 text-ellipsis whitespace-nowrap dark:hover:text-black rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-400 transition duration-300 ease-in-out"> All Products</Link>
        </li>
        {options?.map((option) => {
          return (
            <li className="relative" key={option.key}>

              <Link
                to={`/product/getcategory/${option.key}`}
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis
                dark:text-gray-100 whitespace-nowrap rounded  dark:hover:text-black hover:bg-gray-100 transition duration-300 ease-in-out dark:hover:bg-gray-400"
                
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
