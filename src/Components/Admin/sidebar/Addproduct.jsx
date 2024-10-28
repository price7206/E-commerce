import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { baseUrl } from "../../BaseUrl/BaseUrl";
import { ImagebaseUrl } from "../../BaseUrl/BaseUrl";
import "./AddProduct.css";

const Addproduct = () => {
  const [showProductModal, setShowProductmodal] = useState(false);
  const [productData, setProductData] = useState([]);
  const fetchproduct = () => {
    axios.get(`${baseUrl}/api/products`).then((res) => {
      setProductData(res.data);
      // fetchproduct();
    });
  };

  const deleteCategoryById = (dataid) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${baseUrl}/api/products/${dataid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        fetchproduct();
      });
  };

  const handelupdate = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <div>
      <div>Add PRODUCT</div>
      <button onClick={() => setShowProductmodal(true)}> Add to product</button>
      <div>
        {showProductModal && (
          <Product
            setShowProductmodal={setShowProductmodal}
            fetchproduct={fetchproduct}
            onclose={setShowProductmodal}
          />
        )}
        <table className="table-category-container">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>name</th>
              <th>price</th>
              <th> description</th>
              <th>category</th>
              <th> countInStock</th>
              <th>imageFile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>{data.description}</td>
                  <td>{data.category}</td>
                  <td>{data.countInStock}</td>
                  <td>
                    <img src={baseUrl + data.imageUrl} width="150px" />
                  </td>
                  <div className="btn-handel">
                    <button onClick={() => handelupdate(data)}>Edit</button>{" "}
                    <br />
                    <button onClick={() => deleteCategoryById(data._id)}>
                      delete
                    </button>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addproduct;
