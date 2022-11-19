
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect,useState,Suspense } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import SingleProduct from "./pages/SingleProduct";
import BoardAdmin from "./components/BoardAdmin";
import Navbar from "./components/Navbar";
import Allproduct from "./pages/Allproduct";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { fetchProducts } from "./redux/actions/productActions";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "./components/Loader";
import './components/sidebar.css'
const Home = React.lazy(() => import('./components/Home'))
const App = () => {
  const products = useSelector((state)=> state.allProducts.products)
  const dispatch = useDispatch()
  const [query,setQuery] = useState("")
  const [dark,setDark] = useState(false)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className={`${dark?"dark":""}`}>
      <Navbar setQuery={setQuery} setDark={setDark} dark={dark}/>
      <Suspense fallback={<Loader/>}>
        <div className="flex items-center justify-start  dark:bg-gray-800 ">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={ <Suspense fallback={<div>Loading...</div>}>< Home /></Suspense>} />
          <Route path="/product" element={<AllProducts query={query} products={products} />} />
          <Route path="/product/getcategory/:category" element={<Products query={query} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/allproducts" element={<Allproduct query={query} setQuery={setQuery}/>} />
          <Route path="/admin" element={<BoardAdmin />} />
          
        </Routes>
      </div>
      </Suspense>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
