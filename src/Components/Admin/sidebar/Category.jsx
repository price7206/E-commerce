import React, { useEffect, useState } from "react";
import "./Category.css";
import Modal from "../Maodal/Modal";
import axios from "axios";

const Category = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchdata = () => {
    axios

      .get(`http://localhost:8080/category`)
      .then((res) => setCategoryData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchdata();
    setIsLoading(false);
  }, []);
  const deleteCategoryById = (deleteid) => {
    axios
      .delete(`http://localhost:8080/category/${deleteid}`)
      .then((res) => console.log(res.data));
    fetchdata();
  };
  // const handelupdate = (idupdate) => {
  //   axios
  //     .put(`http://localhost:8080/category/${idupdate}`,categoryData)
  //     .then((res) => console.log(res.data));
  //   fetchdata();
  // };
  return (
    <div>
      <div className="add-category-nev">
        <div>
          <h1>AddCategoryPanel</h1>
        </div>
        <div>
          <button onClick={() => setShowModal(true)}>AddCategory</button>
        </div>
      </div>
      {isLoading ? (
        "loading..."
      ) : (
        <table className="table-category-container">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Categoryname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.category_name}</td>
                  <span>
                    <button>Edit</button>
                    <button onClick={() => deleteCategoryById(data._id)}>
                      delete
                    </button>
                  </span>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setCategoryData={setCategoryData}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default Category;
