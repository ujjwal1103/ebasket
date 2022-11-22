import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/actions/productActions";

import Card from "../components/Card";

const Products = ({ query }) => {
  const { category } = useParams();
 
  const products = useSelector((state) => state.productsByCategory.products);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchProductsByCategory(category));
  }, []);


  

  return (
    <div className="flex  relative  w-full">
      
    <Sidebar  />
   <div
      className="grid lg:grid-cols-4  lg:mt-0  gap-4 overflow-y-scroll grid-flow-row lg:gap-8 lg:p-10 lg:ml-72 ml-16 mt-32 "
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
         Item Not Found
        </div>
      )}
      
    </div>
    
   
  </div>
  );
};

export default Products;
