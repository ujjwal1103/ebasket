import { useState } from "react";
import { Link } from "react-router-dom";
import { options } from "../options";
import { GoTriangleLeft } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  const [open, setopen] = useState(true);
  return (
    <div
      className={`bg-white  w-72  h-full top-16 fixed z-30 duration-300 ease-in-out ${open?"left-0":"-left-[200px]"}`} 
    >

      <div className=" py-4 px-4 flex justify-end  ">
          <GiHamburgerMenu size={26} className="cursor-pointer"  onClick={()=>setopen(!open)}/>
      </div>

      <div
        className={`duration-300 lg:block lg:w-86 h-full dark:bg-slate-800`}
      >
        <ul className={``}>
          <li className="pt-4">
            <Link
              to="/product"
              className="flex items-center text-sm  px-6 h-12   text-gray-700 dark:text-gray-100  dark:hover:text-black rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-400 transition duration-300 ease-in-out"
            >
          
              All Products
            </Link>
          </li>
          {options?.map((option) => {
            return (
              <li className="relative pt-2 " key={option.key}>
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
      <div className="h-24 bg-white absolute top-[40%] left- lg:hidden">
        <button
          className=" flex items-center justify-center w-full h-full "
          onClick={() => {
            setopen(!open);
          }}
        >
          <GoTriangleLeft />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
