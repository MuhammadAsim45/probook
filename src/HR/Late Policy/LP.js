import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import { TableHead } from "../Style";
import axios from "axios";
import request from "request";
import "./LP.css";
// import Logo1 from './Logo1.png'

const Input = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ButtonName, setButtonName] = useState("Add");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [HeaderData, setHeaderData] = useState();
  const [name, setName] = useState();
  const [lateDays, setLateDays] = useState();
  const [deduction, setDeduction] = useState();
  const [deductionType, setDeductionType] = useState();

  //Submit Patch func
  const Submit_PatchFunc = () => {
    if (ButtonName === "Add") {
      handleSubmit();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };

  // Add data function
  async function handleSubmit() {
    const newNote = {
      Name: name,
      LateDays: lateDays,
      Deduction: deduction,
      Deduction_Type: deductionType,
    };

    try {
      axios.post("http://localhost:3331/late", newNote);
      setLoading(true);
      //alert('Data Successfully Add')
    } catch (error) {
      setMessage();
    }
    alert("Data Successfully added");

    setLoading(false);
    // window.location.reload(false)
    console.log(newNote);
  }
  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/late/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        LateDays: lateDays,
        Deduction: deduction,
        Deduction_Type: deductionType,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    window.location.reload(false);
  };
  //onChange function
  const Name_Func = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const LateDays_Func = (e) => {
    setLateDays(e.target.value);
    console.log(e.target.value);
  };
  const Deduction_Func = (e) => {
    setDeduction(e.target.value);
    console.log(e.target.value);
  };
  const DeductionType_Func = (e) => {
    setDeductionType(e.target.value);
    console.log(e.target.value);
  };
  // Function On All and Filter Button
  const Find_FilterFunc = async () => {
    if (SearchNumber === "") {
      AllData();
    } else {
      FilterData();
    }
  };
  //Get all Data from Mongodb
  const AllData = () => {
    var axios = require("axios");
    var data = {};
    var config = {
      method: "get",
      url: "http://localhost:3331/late",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {});
    setShow(true);
  };
  //Get Filter data from Mongodb
  const FilterData = () => {
    setButtonName("Update");
    var options = {
      method: "GET",
      url: `http://localhost:3331/late/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const data = response.body;
      const finalData = JSON.parse(data);
      setHeaderData(finalData);
    });
  };
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(item);
    setButtonName("Update");
  };
  //Modal cancel button function
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div class="LP_Div">
        <div class="LP_fields ">
          <img
            src="/Logo3.png"
            height="80px"
            width="100px"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="show"
          />
          <h2 style={{ textAlign: "center" }}>
            <b>Late Policy</b>
          </h2>
          {/* <h1 style={{textAlign:'center'}}><b>Create Accoun</b></h1> */}
          <div class=" LP_lab1" style={{ marginLeft: "18.5rem" }}>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                Find_FilterFunc();
              }}
            >
              {" "}
              <svg class="LP-icon1" viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg>
            </a>
            <input
              type="text"
              onChange={(e) => {
                setSearchNumber(e.target.value);
              }}
              class="LP-input3"
              placeholder="Search"
            />
          </div>

          <div>
            <label>Name</label>{" "}
            <label style={{ marginLeft: "11rem" }}>Late Days</label>
            <br />
            <div class="LP_lab" style={{ float: "left" }}>
              <input
                type="text"
                name="Name"
                value={name || (HeaderData && HeaderData.Name)}
                onChange={Name_Func}
                class="LP-input"
              />
            </div>
            <div class=" LP_box" style={{ marginLeft: "0.5rem" }}>
              <input
                type="text"
                name="LateDays"
                value={lateDays || (HeaderData && HeaderData.LateDays)}
                onChange={LateDays_Func}
                class="LP-input"
              />
            </div>
          </div>

          <div>
            <label>Deduction</label>{" "}
            <label style={{ marginLeft: "9.4rem" }}>Deduction Type</label>
            <div class="LP_lab" style={{ float: "left" }}>
              <input
                type="text"
                name="Deduction"
                value={deduction || (HeaderData && HeaderData.Deduction)}
                onChange={Deduction_Func}
                class="LP-input"
              />
            </div>
            <div class=" LP_box" style={{ marginLeft: "0.5rem" }}>
              <div className="LP_dropdown">
                <div class="select-style">
                  <select
                    placeholder="Select"
                    name="Deduction_Type"
                    value={
                      deductionType || (HeaderData && HeaderData.Deduction_Type)
                    }
                    onChange={DeductionType_Func}
                  >
                    <option class="abc">Select...</option>
                    <option class="abc" value="javascript">
                      Dimensions 1
                    </option>
                    <option class="abc" value="html">
                      Dimension 2
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Modal
            className="modal Modal-big"
            show={show}
            onHide={handleClose}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title
                Style={{ marginLeft: "10rem" }}
                id="example-modal-sizes-title-lg"
              >
                Late Policy Data
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {data && (
                <Table bordered>
                  <TableHead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Deduction</th>
                    </tr>
                  </TableHead>
                  <tbody style={{ textAlign: "center" }}>
                    {data.map((item, index) => (
                      <tr key={`${index}`}>
                        <td>
                          {index + 1}
                          <input
                            type="radio"
                            name="anynum"
                            id="1"
                            onChange={() => {
                              getvaluefromcheckbox(item, index);
                            }}
                            checked={item.isSelected}
                          />
                        </td>
                        <td>{item.Name}</td>
                        <td>{item.Deduction}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>

          <br />

          <br />
          <br />
          <br />
          {/* <div class="password"><svg fill="#999" viewBox="0 0 1024 1024"><path class="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input type="username" class="user-input" placeholder="Username" /></div> */}
          <button
            class="LP_add-button"
            onClick={() => {
              Submit_PatchFunc();
            }}
          >
            {ButtonName}
          </button>
          <button class="LP_cancel-button">Cancel</button>
        </div>
      </div>
    </>
  );
};
export default Input;
