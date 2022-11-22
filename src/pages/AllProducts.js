import React, { useEffect,useState } from "react";

import { fetchProducts } from "../redux/actions/productActions";
import Sidebar from "../components/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
import Card from "../components/Card";

const AllProducts = ({ query }) => {
  
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    
    dispatch(fetchProducts());

    
  }, []);

  return ( 
    <div className="flex  relative  w-full">
      
      <Sidebar  />
     <div
        className="grid lg:grid-cols-4  lg:mt-12  gap-4 overflow-y-scroll grid-flow-row lg:gap-8 lg:p-10 lg:ml-72 ml-16 mt-32 "
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
                <Card pro={pro} key={pro.id}/>
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
 
  )
};

export default AllProducts;
