import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
import avatar from "../assets/man.png";
import cart from "../assets/shopping-cart.png";
import logo from "../assets/elogo.png";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/actions/productActions";
const Navbar = ({ setQuery, dark, setDark }) => {
  const [navbar, setNavbar] = useState(true);
  const navigate = useNavigate();
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [menuActive, setMenuActive] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      dispatch(fetchCart(user.id))
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
    
  }, [cartItems?.userId]);

   

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
    setNavbar(true);
    navigate("/home");
  };

  const search = () => {
    navigate("/product");
  };
  return (
    <div className="lg:h-16 mt-0 bg-white dark:bg-gray-700 z-50  lg:z-10 lg:flex flex  p-2 fixed w-full top-0 items-center border-b-2 dark:border-gray-800 drop-shadow-lg">
      {navbar && (
        <nav className="lg:flex  flex lg:items-center w-full lg:gap-0 gap-5 flex-col-reverse lg:flex-row mx-3 lg:justify-between">
          <Link
            to={"/"}
            className="hidden lg:block font-bold text-4xl text-blue-600 px-10 font-mono"
          >
            <img
              src={logo}
              alt=""
              className="w-52 transition-all duration-300 drop-shadow-md hover:scale-105 "
            />
          </Link>
          <div className="lg:w-1/2 lg:p-2 relative  ">
            <input
              type="search"
              className="lg:py-2 py-5 px-3 text-2xl lg:text-xl  rounded-md w-full border-2 outline-none bg-transparent focus:bg-gray-50"
              placeholder="search grocery"
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="absolute right-5 top-[16px] lg:top-[15px] text-4xl lg:text-lg font-bold">
              <button
                onClick={() => {
                  search();
                }}
              >
                <FiSearch />
              </button>
            </span>
          </div>

         

          <div className="flex justify-between items-center  flex-row-reverse lg:flex-row  gap-6">
            <div className="relative ">
              <Link to="/cart">
                <img src={cart} alt="" className="w-10" />
              </Link>
              <span className="absolute -top-1 -right-2 bg-blue-800 flex items-center justify-center rounded-full text-sm text-white w-5 h-5">
               {cartItems?.length}
              </span>
            </div>

            <Link
              to={"/"}
              className=" block lg:hidden font-bold text-4xl text-blue-600 px-10 font-mono"
            >
              <img
                src={logo}
                alt=""
                className="w-52 lg:hidden transition-all duration-300 drop-shadow-md hover:scale-105 "
              />
            </Link>
            {currentUser ? (
              <div className="flex gap-3 items-center justify-end  ">
                <li className="">
                  <div
                    onMouseOver={() => {
                      setMenuActive(true);
                    }}
                    onMouseOut={() => {
                      setMenuActive(false);
                    }}
                    className="w-10 h-10 relative cursor-pointer "
                  >
                    <img src={avatar} alt="" className="w-10" />

                    <div
                      className={`absolute  bg-transparent lg:right-1  w-60 py-10  top-3 ${
                        menuActive ? "block" : "hidden"
                      }`}
                    >
                      <ul className="bg-white rounded-md mt-4 py-2">
                        <li className="px-2 py-2 hover:bg-slate-100 hover:text-blue-900">
                          <Link to={"/profile"}> Profile (
                            {currentUser.username
                              .substring(0, 1)
                              .toUpperCase() +
                              currentUser.username.substring(
                                1,
                                currentUser.username.length
                              )})
                          </Link>
                        </li>
                        {showAdminBoard && (
                          <>
                            <li className="px-2 py-2 hover:bg-slate-100 hover:text-blue-900">
                              <Link to={"/admin"}>Add Product</Link>
                            </li>
                            <li className="px-2 py-2 hover:bg-slate-100 hover:text-blue-900">
                              <Link to="/allproducts">All Products</Link>
                            </li>
                          </>
                        )}

                        <li
                          className="px-2 py-2 hover:bg-slate-100 "
                          onClick={() => setDark(!dark)}
                        >
                          <span>{dark === true ? "Light" : "Dark"}</span>
                        </li>
                        <li className="px-2 py-2 hover:bg-slate-100  hover:text-blue-900">
                          <Link to="/home" onClick={logOut}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </div>
            ) : (
              <div className="flex  items-center ">
                <ul className="flex gap-3 items-center justify-end dark:text-white ">
                  <li>
                    <Link to={"/login"} className="hover:text-gray-400">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link to={"/register"} className="hover:text-gray-400">
                      SignUp
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
