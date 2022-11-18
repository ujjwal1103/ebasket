import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
import avatar from "../assets/man.png";
import cart from "../assets/shopping-cart.png"
import logo from "../assets/elogo.png"
import {FiSearch} from "react-icons/fi"
import axios from "axios";

const Navbar = ({setQuery}) => {
  const [navbar, setNavbar] = useState(true);
  const navigate = useNavigate()
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [menuActive, setMenuActive] = useState(false);
  const [cartItemsCount,setCartItemsCount] = useState(0);
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      axios.get(`http://localhost:8084/cartItemsByUserId/${user.id}`).then(res=>setCartItemsCount(res.data.length));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
    setNavbar(true);
    navigate('/home')
  };
  const search=()=>{
    navigate('/product')
  }
  return (
    <div className="h-16 bg-white z-50 flex p-2 sticky top-0 items-center border-b-2 drop-shadow-lg">
      {navbar && (
        <nav className="flex items-center w-full  mx-3 justify-between">
          <Link to={"/"} className="font-bold text-4xl text-blue-600 px-10 font-mono">
            <img src={logo} alt="" className="w-52 transition-all duration-300 drop-shadow-md hover:scale-105 "/>
          </Link>
          {/* <div className="flex gap-2 px-4 ">
            {showAdminBoard && (
              <li>
                <Link to={"/admin"}>Add Products</Link>
              </li>
            )}

            {currentUser && (
              <li>
                <Link to={"/user"}>User</Link>
              </li>
            )}
          </div> */}
          {/* {FaUserAlt} */}
          <div className="w-1/2 p-2 relative ">
            <input type="search"  className="py-2 px-3 rounded-md w-full border-2 outline-none" placeholder="search grocery"
            onChange={(e)=>setQuery(e.target.value)}
            />
            <span className="absolute right-5 top-[15px] text-2xl font-bold"
            ><button onClick={()=>{search()}}
            ><FiSearch/></button></span>
          </div>
          
          <div className="flex  gap-6">
          <div className="relative">
            <Link to="/cart"><img src={cart} alt="" className="w-10"/></Link>
              <span className="absolute -top-1 -right-2 bg-blue-800 flex items-center justify-center rounded-full text-sm text-white w-5 h-5">{cartItemsCount}</span>
              </div>
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
                    className={`absolute  bg-transparent right-1  w-60 py-10  top-3 ${
                      menuActive ? "block" : "hidden"
                    }`}
                  >
                    <ul className="bg-white rounded-md mt-4 py-2">
                      <li className="px-2 py-2 hover:bg-slate-100 hover:text-blue-900">
                        <Link to={"/profile"}>
                          {currentUser.username.substring(0, 1).toUpperCase() +
                            currentUser.username.substring(
                              1,
                              currentUser.username.length
                            )}
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
              <ul className="flex gap-3 items-center justify-end ">
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>

                <li>
                  <Link to={"/register"}>SignUp</Link>
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
