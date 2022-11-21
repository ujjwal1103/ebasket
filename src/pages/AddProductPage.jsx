import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { options } from "../options";
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFillImageFill} from 'react-icons/bs'
const AddProductPage = () => {
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  
  const saveProduct = (e) => {
    e.preventDefault();
    if((title === null || title === "" ) && 
    (category === null || category === "" )  && 
    (price === null || price === "" ) &&
    (description === null || description === "" )
    && (unit === null || unit === "" )
    ){
       alert("all field are required")
    }
    else{
      let product = {
        title: title,
        category: category,
        description: description,
        price: price,
        quantity: quantity,
        unit: unit,
        image: img,
      };
      axios
        .post("http://localhost:8084/addproduct", product)
        .then(() => {alert("Product Added SucessFully")})
        .catch(() => alert("You cannot add same product in a cart and all field are required"));
  
      
    }
    
  };

  


  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {
      console.log(e.target.files[0]);
      console.log(oFREvent.target.result);
      setImg(oFREvent.target.result);
    };
  }

  return (
    <div className="  w-full mx-10 my-20">
      <Form className="w-full  p-4 " onSubmit={(e) => saveProduct(e)}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Product Title"
            onChange={(e) => setTitle((e.target.value).trim())}
          />
         
           <Form.Select
            fluid
            label="Category"
            options={options}
            selection
            placeholder="category"
            onChange={(e, result) => setCategory(result.value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
        <Form.Input
            fluid
            label="Price"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Input
            fluid
            label="Quantity"
            placeholder="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Form.Input
            fluid
            label="Unit"
            placeholder="unit"
            onChange={(e) => setUnit(e.target.value)}
          />
        </Form.Group>
        <div className="border-dashed border-2 rounded-md  mb-3">
        <div className="p-2 text-center mb-4 cursor-pointer" onDragOver={(e) => PreviewImage(e)}>
          {!img && <>
          <span className="flex justify-center  text-4xl"><BsFillImageFill/></span>
          <h2 className="py-4 text-2xl">Upload Image Here</h2>
          <label htmlFor="uploadImage" className="cursor-pointer bg-blue-700 py-2 px-4 text-white rounded">
             Browse Image
          </label></> }
           
          <input
            type="file"
            onChange={(e) => PreviewImage(e)}
            name="uploadImage"
            id="uploadImage"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="w-full relative h-auto rounded flex items-center justify-center p-4">
          
          {img && <><button className="absolute right-10 top-0 text-4xl" onClick={()=>setImg("")}><AiFillCloseCircle/></button><img src={img} alt="images" className="w-1/3 h-auto" /></>}
        </div>
        </div>
        
        <Form.TextArea
          label="Product Discription"
          placeholder="Tell us more about you..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="">
          <Form.Button>Submit</Form.Button>

          <Link to="/allproducts" className="p-2 rounded-sm border">
            Show All products
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AddProductPage;
