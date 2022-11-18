import React, { useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { options } from "../options";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [img, setImg] = useState();

  const saveProduct = (e) => {
    e.preventDefault();
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
      .then((res) => alert("Product Added SucessFully"))
      .catch((err) => console.log(err));

    navigate("/allproducts");
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
    <div className="bg-slate-100 m-auto flex flex-col items-center  justify-center w-1/2 drop-shadow-md ">
      <Form className="w-full  p-4 " onSubmit={(e) => saveProduct(e)}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Input
            fluid
            label="Price"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Category"
            options={options}
            selection
            placeholder="category"
            onChange={(e, result) => setCategory(result.value)}
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
        <div className="p-2 border bg-slate-500 rounded-md text-white mb-4 cursor-pointer">
          <label htmlFor="uploadImage" className="cursor-pointer">
            Upload Product Image
          </label>
          <input
            type="file"
            onChange={(e) => PreviewImage(e)}
            name="uploadImage"
            id="uploadImage"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="border w-full h-auto flex items-center justify-center p-4">
          {img && <img src={img} alt="images" className="w-1/2 h-auto" />}
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
