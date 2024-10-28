import React, { useEffect, useState } from "react";
import { baseUrl } from "../Components/BaseUrl/BaseUrl";
import axios from "axios";
import "./Home.css";
import { axiosInstance } from "../Components/Axiosinstance";
const Home = () => {
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    axios.get(`${baseUrl}/api/products`).then((res) => {
      setProduct(res.data);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  const handelcartproduct = (product) => {
    const payload = product;
    axiosInstance.post(`${baseUrl}/api/add`, payload).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="card-mainContainer">
        {product.map((productData) => {
          return (
            <div className="card-container">
              <div>
                <img
                  src={baseUrl + productData.imageUrl}
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>{productData.name}</h3>
              <h3>{productData.price}</h3>
              <p>{productData.description}</p>
              <h4>{productData.countInStock}</h4>
              <button
                className="btn-Add-to-cart"
                onClick={() => handelcartproduct(productData)}
              >
                Add TO Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
