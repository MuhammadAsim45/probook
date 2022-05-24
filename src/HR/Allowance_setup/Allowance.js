import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import { TableHead } from "../Style";
import request from "request";
import axios from "axios";
import "./allowance.css";

const Form12 = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [allowancetype, setAllowanceType] = React.useState();
  const [name, setName] = React.useState();
  const [percentage, setPercentage] = React.useState();
  const [percentType, setPercentType] = React.useState();
  const [taxable, setTaxable] = React.useState();
  const [amount, setAmount] = React.useState();
  const [calculationtype, setCalculationType] = React.useState();
  const [process, setProcess] = React.useState();

  const [ButtonName, setButtonName] = useState("Add");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [HeaderData, setHeaderData] = useState({});

  //Submit Patch func
  const Submit_PatchFunc = () => {
    if (ButtonName === "Add") {
      senddata();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };

  //Add data to mongo
  async function senddata() {
    const bata = {
      AllowanceType: allowancetype,
      Name: name,
      Percentage: percentage,
      PercentType: percentType,
      Taxable: taxable,
      Amount: amount,
      CalculationType: calculationtype,
      Process: process,
    };

    if (
      allowancetype == null ||
      name == null ||
      percentage == null ||
      percentType == null ||
      taxable == null ||
      amount == null ||
      calculationtype == null ||
      process == null
    ) {
      setError("Please filled all fields");
    } else {
      try {
        axios.post("http://localhost:3331/allowancesetup", bata);
        setLoading(true);
        console.log(bata);
        alert("Data Successfully added");
        setAmount("");
      } catch (error) {
        setMessage();
      }
    }
    setLoading(false);
    // window.location.reload(false)
  }

  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/allowancesetup/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        AllowanceType: allowancetype,
        Name: name,
        Percentage: percentage,
        PercentType: percentType,
        Taxable: taxable,
        Amount: amount,
        CalculationType: calculationtype,
        Process: process,
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
      url: "http://localhost:3331/allowancesetup",
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
      url: `http://localhost:3331/allowancesetup/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const data = response.body;
      const finalData = JSON.parse(data);
      setHeaderData(finalData);
      console.log(finalData);
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
      <div className="HR_main_Awareance">
        <div className="Aw_field ">
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
          <h2 style={{ textAlign: "center" }}>Allowance Setup </h2>
        </div>

        <div className="AW1_search ">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              Find_FilterFunc();
            }}
          >
            <svg className="AW1_svg-icon13" viewBox="0 0 20 20">
              <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
            </svg>
          </a>
          <input
            type="text"
            onChange={(e) => {
              setSearchNumber(e.target.value);
            }}
            maxlength="10"
            placeholder="Number"
            className="AW1_input_fields77"
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div>
          <div>
            <label>Allowance Type </label>{" "}
            <label style={{ marginLeft: "7.5rem" }}>Name</label>
            <div className="AWR1-dropdown">
              <div className="AWR1-select-style">
                <select
                  placeholder="Select "
                  name="AllowanceType"
                  value={
                    allowancetype || (HeaderData && HeaderData.AllowanceType)
                  }
                  onChange={(e) => {
                    setAllowanceType(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option className="abc">Select..</option>
                  <option className="abc" value="javascript">
                    Dimensions 1
                  </option>
                  <option className="abc" value="html">
                    Dimension 2
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="na">
              <svg
                className="svg-icon12"
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
                maxlength="10"
                className="Aware_user-input1"
                name="Name"
                value={name || (HeaderData && HeaderData.Name)}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <label>Percentage</label>{" "}
          <label style={{ marginLeft: "9.34rem" }}>Percent Type</label>
          <div className="na2">
            <input
              type="text"
              // {...register("test", {
              //   required: "error message", // JS only: <p>error message</p> TS only support string
              // })}
              maxlength="10"
              style={{ float: "left" }}
              className="Aware_user-input2"
              name="Percentage"
              value={percentage || (HeaderData && HeaderData.Percentage)}
              onChange={(e) => {
                setPercentage(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div>
            <div
              className="AWR1-dropdown"
              style={{
                marginLeft: "12.20rem",
                marginTop: "-2.9rem",
                float: "right",
              }}
            >
              <div className="AWR1-select-style">
                <select
                  placeholder="Select"
                  name="PercentType"
                  value={percentType || (HeaderData && HeaderData.PercentType)}
                  onChange={(e) => {
                    setPercentType(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option className="abc">Select..</option>
                  <option className="abc" value="javascript">
                    Dimensions 1
                  </option>
                  <option className="abc" value="html">
                    Dimension 2
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label> Taxable </label>{" "}
          <label style={{ marginLeft: "10.99rem" }}>Amount</label>
          <div className="AWR1-dropdown">
            <div className="AWR1-select-style">
              <select
                placeholder="Select"
                name="Taxable"
                value={taxable || (HeaderData && HeaderData.Taxable)}
                onChange={(e) => {
                  setTaxable(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option className="abc">Select..</option>
                <option className="abc" value="javascript">
                  Dimensions 1
                </option>
                <option className="abc" value="html">
                  Dimension 2
                </option>
              </select>
            </div>
          </div>
          <div className="na">
            <input
              type="text"
              maxlength="10"
              className="Aware_user-input2"
              style={{ marginLeft: "9.35" }}
              name="Amount"
              value={amount || (HeaderData && HeaderData.Amount)}
              onChange={(e) => {
                setAmount(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
          <label> Calculation Type </label>{" "}
          <label style={{ marginLeft: "7.10rem" }}>Process </label>
          <div className="AWR1-dropdown">
            <div className="AWR1-select-style">
              <select
                placeholder="Select "
                name="CalculationType"
                value={
                  calculationtype || (HeaderData && HeaderData.CalculationType)
                }
                onChange={(e) => {
                  setCalculationType(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option className="abc">Select..</option>
                <option className="abc" value="javascript">
                  Dimensions 1
                </option>
                <option className="abc" value="html">
                  Dimension 2
                </option>
              </select>
            </div>
          </div>
          <div>
            <div
              className="AWR1-dropdown"
              style={{
                marginLeft: "12.20rem",
                marginTop: "-2.9rem",
                float: "right",
              }}
            >
              <div className="AWR1-select-style">
                <select
                  placeholder="Select "
                  name="Process"
                  value={process || (HeaderData && HeaderData.Process)}
                  onChange={(e) => {
                    setProcess(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option className="abc">Select..</option>
                  <option className="abc" value="javascript">
                    Dimensions 1
                  </option>
                  <option className="abc" value="html">
                    Dimension 2
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <br />

        <button
          className="AWR-add-button"
          onClick={() => {
            Submit_PatchFunc();
          }}
        >
          {ButtonName}
        </button>
        <button className="AWR-cancel-button">Cancel</button>
      </div>
      <br />

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
            Allowance Setup Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data && (
            <Table bordered>
              <TableHead>
                <tr>
                  <th>#</th>
                  <th>Allowance Type </th>
                  <th>Name</th>
                  <th>Percentage</th>
                  <th>Percent Type</th>
                  <th>Taxable</th>
                  <th>Amount</th>
                  <th>Calculation Type</th>
                  <th>Process</th>
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
                    <td>{item.AllowanceType}</td>
                    <td>{item.Name}</td>
                    <td>{item.Percentage}</td>
                    <td>{item.PercentType}</td>
                    <td>{item.Taxable}</td>
                    <td>{item.Amount}</td>
                    <td>{item.CalculationType}</td>
                    <td>{item.Process}</td>
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
    </>
  );
};
export default Form12;
