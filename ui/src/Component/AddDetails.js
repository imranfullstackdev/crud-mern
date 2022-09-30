import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDetails = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { name, phone } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { data };
      const addUser = await fetch("http://localhost:8000/adddata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.data),
      });
      const res = await addUser.json();
      if (addUser.status !== 200) {
        alert(res.err);
      } else {
        alert(res.mess);
        navigate("/View");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <form onSubmit={submitHandler}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
          <br />
          <label>Phone:</label>
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={changeHandler}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddDetails;
