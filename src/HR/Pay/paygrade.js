import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import { TableHead } from "../Style";
import axios from "axios";
import request from "request";
import "./grade.css";

const Form18 = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ButtonName, setButtonName] = React.useState("Add");
  const [SearchNumber, setSearchNumber] = React.useState("");
  const [data, setData] = React.useState();
  const [show, setShow] = React.useState(false);
  const [HeaderData, setHeaderData] = useState();
  const [grossSalary, setGrossSalary] = useState();
  const [name, setName] = useState();
  const [basicSalary, setBasicSalary] = React.useState();
  const [percent, setPercent] = useState();
  const [type, setType] = useState();
  const [overTime, setOverTime] = useState();
  // Add data function
  async function handleSubmit() {
    const newNote = {
      Gross_Salary: grossSalary,
      Name: name,
      Basic_Salary: basicSalary,
      Percent: percent,
      Type: type,
      OverTime: overTime,
    };
    try {
      axios.post("http://localhost:3331/pay", newNote);
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
  //Modal cancel button function
  const handleClose = () => {
    setShow(false);
  };
  //Submit Patch func
  const Submit_PatchFunc = () => {
    if (ButtonName === "Add") {
      handleSubmit();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(item);
    setButtonName("Update");
  };
  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/pay/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Gross_Salary: grossSalary,
        Name: name,
        Basic_Salary: basicSalary,
        Percent: percent,
        Type: type,
        OverTime: overTime,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    window.location.reload(false);
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
      url: "http://localhost:3331/pay",
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
  //Get Filter data from Mongodb
  const FilterData = () => {
    setButtonName("Update");
    var options = {
      method: "GET",
      url: `http://localhost:3331/pay/${SearchNumber}`,
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

  //onChange function
  const GrossSalary_Func = (e) => {
    setGrossSalary(e.target.value);
    console.log(e.target.value);
  };
  const Name_Func = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const BasicSalary_Func = (e) => {
    setBasicSalary(e.target.value);
    console.log(e.target.value);
  };
  const Percent_Func = (e) => {
    setPercent(e.target.value);
    console.log(e.target.value);
  };
  const Type_Func = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };
  const OverTime_Func = (e) => {
    setOverTime(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div class="PG_main_class">
        <div class="PG_field ">
          <img
            src="/logo3.png"
            height="80px"
            width="100px"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="show"
          />
          <h3 style={{ textAlign: "center" }}>Pay Grade Setup</h3>
        </div>
        <div class=" PG1_srh ">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              Find_FilterFunc();
            }}
          >
            <svg class="PG1_svg-icon13" viewBox="0 0 20 20">
              <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
            </svg>
          </a>
          <input
            type="number"
            onChange={(e) => {
              setSearchNumber(e.target.value);
            }}
            placeholder="Search"
            class="PG1_input_fields77"
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div>
          <label>Gross Salary </label>{" "}
          <label style={{ marginLeft: "8.5rem" }}>Name</label>
          <div>
            <div class="PG_na2" style={{ float: "left" }}>
              <input
                type="text"
                name="Gross_Salary"
                value={grossSalary || (HeaderData && HeaderData.Gross_Salary)}
                onChange={GrossSalary_Func}
                class="PG_Aware_user-input2"
              />
            </div>
          </div>
          <div>
            <div class="PG_na" style={{ float: "right" }}>
              <svg
                class="PG_svg-icon12"
                style={{ marginTop: "12.20px" }}
                viewBox="0 0 20 20"
              >
                <path
                  fill="none"
                  d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"
                ></path>
                <path
                  fill="none"
                  d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"
                ></path>
              </svg>
              <input
                type="text"
                name="Name"
                value={name || (HeaderData && HeaderData.Name)}
                onChange={Name_Func}
                class="PG_Aware_user-input1"
              />
            </div>
          </div>
        </div>
        <div>
          <label>Basic Salary </label>{" "}
          <label style={{ marginLeft: "8.5rem" }}>Percent</label>
          <div>
            <div class="PG_na2" style={{ float: "left" }}>
              <input
                type="text"
                name="Basic_Salary"
                value={basicSalary || (HeaderData && HeaderData.Basic_Salary)}
                onChange={BasicSalary_Func}
                class="PG_Aware_user-input2"
              />
            </div>
          </div>
          <div>
            <div class="PG_na2" style={{ float: "right" }}>
              <input
                type="text"
                name="Percent"
                value={percent || (HeaderData && HeaderData.Percent)}
                onChange={Percent_Func}
                class="PG_Aware_user-input2"
              />
            </div>
          </div>
        </div>
        <div>
          <label>Type</label>{" "}
          <label style={{ marginLeft: "11.75rem" }}>Over Time Rate</label>
          <div>
            <div class="PG-dropdown" style={{ float: "left" }}>
              <div class="PG-select-style">
                <select
                  placeholder="Select"
                  name="Type"
                  value={type || (HeaderData && HeaderData.Type)}
                  onChange={Type_Func}
                >
                  <option class="abc">Select..</option>
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
          <div>
            <div class="PG_na2" style={{ float: "right" }}>
              <input
                type="text"
                name="OverTime"
                value={overTime || (HeaderData && HeaderData.OverTime)}
                onChange={OverTime_Func}
                class="PG_Aware_user-input2"
              />
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
              PayGrade Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data && (
              <Table bordered>
                <TableHead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Percent</th>
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
                      <td>{item.Percent}</td>
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
        <br /> <br />
        <button
          class="PG-add-button"
          onClick={() => {
            Submit_PatchFunc();
          }}
        >
          {ButtonName}
        </button>
        <button class="PG-cancel-button">Cancel</button>
        <br />
      </div>
    </>
  );
};
export default Form18;
