import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import { TableHead } from "../Style";
import axios from "axios";
import request from "request";
import "./TS.css";
import TStable from "./TStable";

// import Logo1 from './Logo1.png'

const LA = () => {
  const [type, setType] = React.useState();
  const [name, setName] = React.useState();
  const [no, setNo] = React.useState();
  const [id, setId] = React.useState();
  const [dateFrom, setDateFrom] = React.useState();
  const [toDate, setToDate] = React.useState();
  const [depart, setDepart] = React.useState();
  const [ButtonName, setButtonName] = React.useState("Add");
  const [SearchNumber, setSearchNumber] = React.useState("");
  const [data, setData] = React.useState();
  const [show, setShow] = React.useState(false);
  const [HeaderData, setHeaderData] = useState();

  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow = () => {
    setShowModal1(true);
  };

  const Type_Func = (e) => {
    setType(e.target.value);
  };
  const Name_Func = (e) => {
    setName(e.target.value);
  };
  const Id_Func = (e) => {
    setId(e.target.value);
  };
  const DateFrom_Func = (e) => {
    setDateFrom(e.target.value);
  };
  const ToDate_Func = (e) => {
    setToDate(e.target.value);
  };
  const No_Func = (e) => {
    setNo(e.target.value);
  };
  const Depart_Func = (e) => {
    setDepart(e.target.value);
  };

  async function handleSubmit() {
    handleShow();
    const Data = {
      Name: name,
      Id: id,
      Type: type,
      FromDate: dateFrom,
      ToDate: toDate,
      No: no,
      Depart: depart,
    };
    console.log(Data);
    try {
      axios.post("http://localhost:3331/time", Data);
    } catch (error) {
      console.log(error);
    }
  }
  //Submit Patch func
  const Submit_PatchFunc = () => {
    if (ButtonName === "Add") {
      handleSubmit();
    } else if (ButtonName !== "Add") {
      updataData();
    }
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
      url: "http://localhost:3331/time",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
    setShow(true);
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
  //Get Filter data from Mongodb
  const FilterData = () => {
    setButtonName("Update");
    var options = {
      method: "GET",
      url: `http://localhost:3331/time/${SearchNumber}`,
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
  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/time/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Id: id,
        Type: type,
        FromDate: dateFrom,
        ToDate: toDate,
        No: no,
        Depart: depart,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    window.location.reload(false);
  };
  return (
    <>
      <div class="PRP_Div">
        <div class="PRP_fields ">
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
          <h2 style={{ textAlign: "center", color: "black" }}>
            <b>Time Sheet</b>
          </h2>
          {/* <h1 style={{textAlign:'center'}}><b>Create Accoun</b></h1> */}
          <label>Type</label>
          <br />
          <div class=" PRP_box" style={{ float: "left" }}>
            <div className="PRP_dropdown">
              <div class="PRP_select-style">
                <select
                  placeholder="Select"
                  name="Type"
                  value={type || (HeaderData && HeaderData.Type)}
                  onChange={Type_Func}
                >
                  <option class="abc">Select...</option>
                  <option class="abc" value="javascript">
                    Type 1
                  </option>
                  <option class="abc" value="html">
                    Type 2
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* Search button*/}
          <div class=" PRP_lab1">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                Find_FilterFunc();
              }}
            >
              {" "}
              <svg class="PRP-icon1" viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg>
            </a>
            <input
              type="number"
              onChange={(e) => {
                setSearchNumber(e.target.value);
              }}
              class="PRP-input3"
              placeholder="Search"
            />
          </div>
          <div>
            <label>Name</label>{" "}
            <label style={{ marginLeft: "12.5rem" }}>ID</label>
            <br />
            <div class=" PRP_box" style={{ float: "left" }}>
              <div className="PRP_dropdown">
                <div class="PRP_select-style">
                  <select
                    placeholder="Select"
                    name="Name"
                    value={name || (HeaderData && HeaderData.Name)}
                    onChange={Name_Func}
                  >
                    <option class="abc">Select...</option>
                    <option class="abc" value="javascript">
                      Name 1
                    </option>
                    <option class="abc" value="html">
                      Name 2
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="PRP_box" style={{ marginLeft: "1rem" }}>
              <input
                type="text"
                class="PRP-input"
                name="Id"
                value={id || (HeaderData && HeaderData.Id)}
                onChange={Id_Func}
              ></input>{" "}
            </div>
          </div>
          <div>
            <label>Department</label>{" "}
            <label style={{ marginLeft: "9.9rem" }}>No.</label>
            <div class=" PRP_box" style={{ float: "left" }}>
              <div className="PRP_dropdown">
                <div class="PRP_select-style">
                  <select
                    placeholder="Select"
                    name="Depart"
                    value={depart || (HeaderData && HeaderData.Depart)}
                    onChange={Depart_Func}
                  >
                    <option class="abc">Select...</option>
                    <option class="abc" value="javascript">
                      Department 1
                    </option>
                    <option class="abc" value="html">
                      Department 2
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="PRP_box" style={{ marginLeft: "1rem" }}>
              <input
                type="text"
                class="PRP-input"
                disabled="true"
                name="No"
                value={no || (HeaderData && HeaderData.No)}
                onChange={No_Func}
              />
            </div>
          </div>
          <div>
            <label>Date From</label>{" "}
            <label style={{ marginLeft: "10.5rem" }}>Date to</label>
            <div class="PRP_box" style={{ float: "left" }}>
              <input
                type="date"
                class="PRP-input"
                name="FromDate"
                value={dateFrom || (HeaderData && HeaderData.FromDate)}
                onChange={DateFrom_Func}
              />
            </div>
            <div class="PRP_box" style={{ marginLeft: "1rem" }}>
              <input
                type="date"
                class="PRP-input"
                name="ToDate"
                value={toDate || (HeaderData && HeaderData.ToDate)}
                onChange={ToDate_Func}
              />
            </div>
          </div>
          <Modal
            contentClassName="modal-PRP"
            show={showModal1}
            onHide={handleClose1}
          >
            <TStable />
          </Modal>
          <Modal
            className="modal Modal-big"
            show={show}
            onHide={handleClose}
            size="lg"
          >
            <div
              style={{
                background: "rgb(185 208 227)",
                width: "100%",
                height: "auto",
                borderRadius: "1rem",
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title
                  Style={{ marginLeft: "10rem" }}
                  id="example-modal-sizes-title-lg"
                >
                  Time Sheet Data
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {data && (
                  <Table bordered>
                    <TableHead>
                      <tr>
                        <th>#</th>
                        <th>No.</th>
                        <th>Name</th>
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
                          <td>{item.No}</td>
                          <td>{item.Name}</td>
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
            </div>
          </Modal>
          <br />
          <br /> <br />
          <br />
          <button
            class="PRP_add-button"
            onClick={(e) => {
              Submit_PatchFunc(e);
            }}
          >
            {ButtonName}
          </button>
          <button class="PRP_cancel-button">Cancel</button>
        </div>
      </div>
    </>
  );
};
export default LA;
