import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Edituser from "./Edituser";

const ViewDetails = () => {
  const [data, setData] = useState([]);

  // getting all the users
  const allusers = async () => {
    const alldata = await fetch("http://localhost:8000/getAll");
    const res = await alldata.json();
    setData(res);
  };
  const deleteHandler = async (id) => {
    console.log(id);
    try {
      const deleteuser = await fetch(`http://localhost:8000/delete/${id}`,{
        method:"DELETE"
      });
      if (deleteuser) {
        alert("deleted Sucessfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allusers();
  }, []);
  //   console.log(data);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{<Edituser user={user} />}</td>
                <td
                  onClick={() => {
                    deleteHandler(user._id);
                  }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ViewDetails;
