import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";

import {fetchProducts} from '../redux/actions/productActions'
import EditProduct from "../components/EditProduct";
const Allproduct = ({query}) => {

  const [currProduct, setcurrProduct] = useState();
  const [modal, setModal] = useState(false);
  

  const products = useSelector((state)=> state.allProducts.products)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8084/products/${id}`);
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.filter(item=>item.title.toLowerCase().includes(query)||item.category.toLowerCase().includes(query)).map((item, index) => {
                  return (
                    <tr
                      key={item.id + item.title}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
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
                      <td className=" text-gray-900 px-6 py-4 whitespace-wrap flex gap-2 items-center justify-center">
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Delete{" "}
                        </button>
                        <button
                          onClick={() => {
                            setModal(true);
                            setcurrProduct(item);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalScrollable"
                          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Edit{" "}
                        </button>
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
