import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import { baseUrl } from "../Components/BaseUrl/BaseUrl";
import { toast } from "sonner";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handelclicksignin = (e) => {
    e.preventDefault();
    const value = {
      email: formData.email,
      password: formData.password,
    };

    axios.post(`${baseUrl}/api/auth/login`, value).then((res) => {
      setFormData({
        email: "",
        password: "",
      });
      toast.success("user login successfully");
      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="main-container">
        <form>
          <label className="text-lable">
            <h3>useremail</h3>
          </label>
          <br />
          <input
            type="email"
            className="input-bar"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />{" "}
          <br />
          <label className="text-lable">
            <h3>PASSWORD</h3>
          </label>
          <br />
          <input
            type="password"
            className="input-bar"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />{" "}
          <br />
          <br />
          <div className="button-Sign-in-up">
            <button className="button" onClick={handelclicksignin}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
