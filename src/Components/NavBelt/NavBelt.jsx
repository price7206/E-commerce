import React, { useEffect, useState } from "react";
import "./Navbelt.css";
import { baseUrl } from "../BaseUrl/BaseUrl";
import axios from "axios";

const NavBelt = () => {
  const [dataCategory, setDataCategory] = useState([]);

  const fetchData = () => {
    axios.get(`${baseUrl}`).then((res) => setDataCategory(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="nav-belt-main-container">
      {dataCategory.map((i) => {
        return <div className="all-nav-belt-category">{i.category_name}</div>;
      })}
    </div>
  );
};

export default NavBelt;
