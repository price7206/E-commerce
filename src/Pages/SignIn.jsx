import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import { toast } from "sonner";
import { baseUrl } from "../Components/BaseUrl/BaseUrl";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelclicksignin = (e) => {
    e.preventDefault();
    // const payload = {
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password,
    // };
    axios.post(`${baseUrl}/api/auth/register`, formData).then((res) => {
      const token = res?.data?.token;
      localStorage.setItem("token", token);
      toast.success("user created successfully");
      console.log(res);
    });

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1> create new user</h1>
      <div className="main-container">
        <form>
          <label className="text-lable">
            <h3>USERNAME</h3>
          </label>
          <br />
          <input
            type="text"
            className="input-bar"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />{" "}
          <br />
          <label className="text-lable">
            <h3>Email</h3>
          </label>
          <br />
          <input
            type="Email"
            className="input-bar"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />{" "}
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
