import React,{useState} from 'react'
import axios from 'axios';
import { Form } from "semantic-ui-react";
import { options } from "../options";
const EditProduct = ({setModal , currentProduct}) => {
  const [title, setTitle] = useState(currentProduct.title);
  const [price,setPrice] = useState(currentProduct.price);
  const [quantity,setQuantity] = useState();
  const [unit,setUnit] = useState();
  const [description, setDescription] = useState(currentProduct.description);
  const [category, setCategory] = useState(currentProduct.category);
  const [img, setImg] = useState(currentProduct.image);

    



      const editProduct= async(e)=>{
        e.preventDefault();
          let product = {
            title:title,
            category:category, 
            description:description,
            price:price,
            unit:unit,
            quantity:quantity,
            image:img
          }
          await axios.put(`http://localhost:8084/product/edit/${currentProduct.id}`,product).then(()=>{alert("Product Updated SucessFully")
       setModal(false) }).catch(err=>alert(err))
          
          
          // navigate('/allproducts')
      }
    
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
   <>
       


{/*Modal */}
{/* <div className='flex '> */}
<div className="rounded-lg z-50 fade fixed top-1/2 left-1/2 w-1/2 shadow-lg outline-none overflow-x-hidden overflow-y-auto bg-slate-400 -translate-y-1/2 -translate-x-1/2"
  id="exampleModalScrollable" tabIndex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
        <div>
        <Form className="w-full p-4 " >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Product Title"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            
          />
           <Form.Input fluid label="Price" placeholder="price" onChange={e=>setPrice(e.target.value)}/>
        
        </Form.Group>
        <Form.Group widths="equal">
        <Form.Select
            fluid
            label="Category"
            options={options}
            selection
            placeholder="category"
            value={category}
            onChange={(result)=>setCategory(result.value)}
          />
        <Form.Input fluid label="Quantity" placeholder="quantity" onChange={e=>setQuantity(e.target.value)}/>
          <Form.Input fluid label="Unit" placeholder="unit" onChange={e=>setUnit(e.target.value)}/>
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
          {img && (
            <img src={img} alt="images"  className="w-1/3 h-auto" />
          )}
        </div>
        <Form.TextArea
          label="Product Discription"
          placeholder="Tell us more about you..."
          value={description}
          onChange={e=>setDescription(e.target.value)}
        />
        
      </Form>
        </div>



      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          onClick={()=>{setModal(false)}}
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          onClick={(e)=>{editProduct(e)}}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    
</div>
{/* </div> */}
</>
  )
}

export default EditProduct