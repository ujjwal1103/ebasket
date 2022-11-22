import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState, Suspense } from "react";
import Login from "./pages/Login";
import AdminOnly from "./components/AdminOnly";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BoardUser from "./components/BoardUser";
import SingleProduct from "./pages/SingleProduct";
import BoardAdmin from "./components/BoardAdmin";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import Allproduct from "./pages/Allproduct";
import AllProducts from "./pages/AllProducts";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { fetchProducts } from "./redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";
import Sidebar from "./components/Sidebar";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className={`${dark ? "dark" : ""}`}>
     <Navbar setQuery={setQuery} setDark={setDark} dark={dark} />

      <Suspense fallback={<Loader />}>
        <div className="flex  justify-start dark:bg-gray-800  flex-col relative mt-14 w-full ">
           
          <span
            className="hidden lg:block fixed top-20 left-80 z-50 text-white bg-blue-600 px-4 py-4 rounded-full text-2xl"
            onClick={() => {
              window.history.back();
            }}
          >
            <MdOutlineKeyboardBackspace />
          </span>
         

         
         
           <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/user" element={<BoardUser />} />

              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route element={<AdminOnly />}>
              <Route path="/admin" element={<BoardAdmin />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/home"
              element={
                <Suspense
                  fallback={
                    <div>
                      <Loader />
                    </div>
                  }
                >
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/product"
              element={<AllProducts query={query} products={products} />}
            />
            <Route
              path="/product/getcategory/:category"
              element={<Products query={query} />}
            />
            <Route element={<Protected />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route
              path="/allproducts"
              element={<Allproduct query={query} setQuery={setQuery} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes> 
        </div>
      </Suspense>
    </div>
  );
};

export default App;
