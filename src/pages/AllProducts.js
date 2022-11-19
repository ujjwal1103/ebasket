import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/sidebar.css";
import { fetchProducts } from "../redux/actions/productActions";
import Sidebar from "../components/Sidebar";
import AddToCart from "../components/AddToCart";
import { useDispatch, useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
const AllProducts = ({ query }) => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch]);

  return (
    <div className="flex items-center justify-start w-full  height ">
      <Sidebar />

      <div
        className="grid grid-cols-5  overflow-y-scroll grid-flow-row gap-8 p-16 height "
        style={{ flex: 1 }}
      >
        {products.length !== 0 ? (
          products
            ?.filter(
              (item) =>
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            )
            .map((pro, index) => {
              return (
                <div
                  className="rounded-md shadow-md flex flex-col items-center h-[289px] w-[200px] bg-white"
                  key={pro.id}
                >
                  <Link
                    to={`/product/${pro.id}`}
                    className=" rounded-md  flex flex-col items-center h-[289px] w-[200px] bg-white"
                    key={pro.id}
                  >
                    <span className="bg-blue-600 text-white text-center py-2 w-[80px] self-end rounded-tr-md rounded-bl-md">
                      {Math.floor(Math.random() * (15 - 5) + 5)}% off
                    </span>
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-[140px] transition-all duration-300 hover:scale-105 object-contain rounded-full"
                    />
                    <h2 className="text-2xl text-center font-bold">
                      {pro.title}
                    </h2>
                    <span className="">₹ {pro.price}</span>
                    <span className="line-through text-gray-400">
                      ₹ {Math.round(pro.price + (pro.price * 12) / 100)}
                    </span>
                  </Link>
                  <div>
                    {pro?.quantity === 0 ? (
                      <span className="rounded-tl-xl rounded-tr-xl  mt-2 font-bold py-2 px-3 text-red-600  text-center">
                        Out of Stock
                      </span>
                    ) : (
                      <div
                        className="rounded-tl-xl 
                    rounded-tr-xl  
                    mt-2 font-bold py-2 
                    px-3 text-white
                     bg-blue-500 
                     text-center"
                      >
                        <AddToCart
                          id={pro?.id}
                          productQuantity={1}
                          productPrice={pro?.price}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
        ) : (
          <div className="flex items-center justify-center  w-[1000px]">
            <MoonLoader
              color="black"
              loading="true"
              speedMultiplier={1}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
