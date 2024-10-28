import React, { useState } from "react";
import "./Product.css";
import { baseUrl } from "../../BaseUrl/BaseUrl";
import axios from "axios";
import { toast } from "sonner";

const Product = ({ setShowProductmodal, fetchproduct, onclose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    countInStock: "",
    imageFile: "",
  });

  const { name, price, description, category, countInStock, imageFile } =
    formData;

  const handelsubmitimage = (e) => {
    e.preventDefault();

    const formDataValue = new FormData();
    const token = localStorage.getItem("token");

    formDataValue.append("name", name);
    formDataValue.append("description", description);
    formDataValue.append("price", price);
    formDataValue.append("category", category);
    formDataValue.append("countInStock", countInStock);
    formDataValue.append("imageFile", imageFile);

    axios
      .post(`${baseUrl}/api/products`, formDataValue, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("product added successfully");
        fetchproduct();
        onclose(false);
      });
  };

  console.log(formData);

  return (
    <>
      <div className=" product-form-main-container">
        <button onClick={() => setShowProductmodal(false)}>x</button>
        <div className="product-modal-container">
          <form action="">
            <lable>name</lable>
            <input
              type="text"
              value={name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <br />
            <br />
            <lable>category</lable>
            <input
              type="text"
              value={category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
            <br />
            <br />
            <lable>price</lable>
            <input
              type="number"
              value={price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <br />
            <br />
            <lable> description</lable>
            <input
              type="text"
              value={description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />
            <br />
            <br />
            <lable>imageFile</lable>

            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setFormData({ ...formData, imageFile: e.target.files[0] });
              }}
            />
            <br />
            <br />
            <lable> countInStock</lable>
            <input
              type="number"
              value={countInStock}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  countInStock: e.target.value,
                })
              }
            />
            <br />
            <br />
            <button onClick={handelsubmitimage}>submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
