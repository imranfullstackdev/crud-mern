import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Edituser = ({ user }) => {
  // console.log(user.user._id);
  const [data, setData] = useState(user);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editHandler = async (e, id) => {
    e.preventDefault();
    try {
      const editHandler = await fetch(`http://localhost:8000/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(editHandler);
      if (editHandler) {
        navigate("/");
        alert("Edited Sucessfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
            />
            <br />
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={changeHandler}
            />
            <br />
            <button
              type="button"
              onClick={(e) => {
                editHandler(e, data._id);
              }}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary">
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edituser;
