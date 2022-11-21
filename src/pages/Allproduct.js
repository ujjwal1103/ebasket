import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {MdDeleteForever} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'

import {deleteProduct, fetchProducts} from '../redux/actions/productActions'
import EditProduct from "../components/EditProduct";
const Allproduct = ({query}) => {
  const [currProduct, setcurrProduct] = useState();
  const [modal, setModal] = useState(false);  
  const products = useSelector((state)=> state.allProducts.products)
  const dispatch = useDispatch() 
  useEffect(() => {
    console.log("rendered");
    dispatch(fetchProducts())
  }, [dispatch]);
  const deleteItem = async (id) => {
    dispatch(deleteProduct(id))
    console.log("deleted"+ id)
  };
  return (
    <div className="flex flex-col height mt-10 ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          
          <div className="overflow-hidden">
            <table className="w-[90%] m-auto">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                   
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.filter(item=>item.title.toLowerCase().includes(query)||item.category.toLowerCase().includes(query)).map((item, index) => {
                  return (
                    <tr
                      key={item.id + item.title}
                      className=" bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 group"
                    >
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap">
                        {index}
                      </td>
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap">
                        {item.category}
                      </td>
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap">
                        <img
                          src={item.image}
                          alt="item.title"
                          className="w-20"
                        />
                      </td>
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap">
                        {item.title}
                      </td>
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap">
                        {item.price}
                      </td>
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap">
                        {item.description}
                      </td>
                      <td className=" text-gray-900  px-6 py-4 flex gap-2 items-center justify-center h-full mt-5">
                        <span
                          onClick={() => deleteItem(item.id)}
                          className="cursor-pointer opacity-0 text-4xl hover:text-red-700 group-hover:opacity-100"
                        >
                         <MdDeleteForever/>
                        </span>
                        <span
                          onClick={() => {
                            setModal(true);
                            setcurrProduct(item);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalScrollable"
                          className="cursor-pointer opacity-0 group-hover:opacity-100 text-4xl hover:text-blue-700"
                        >
                        < BiEdit/>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modal && (
        <EditProduct setModal={setModal} currentProduct={currProduct} />
      )}
    </div>
  );
};

export default Allproduct;
