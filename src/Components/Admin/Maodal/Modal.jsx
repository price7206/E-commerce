import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";

const Modal = ({ setShowModal, setCategoryData , fetchdata}) => {
  const [text, setText] = useState("");

  
  const handelClickAdd = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/category`, { ...text, category_name: text })
      .then((res) => console.log(res.data));
      fetchdata()
  };

  useEffect(() => {
    
    fetchdata()
  }, []);

  return (
    <div className="modal-overlay-constainer">
      <div>
        <button onClick={() => setShowModal(false)}>x</button>
      </div>
      <div className="modal-container">
        <form action="">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button onClick={handelClickAdd}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
