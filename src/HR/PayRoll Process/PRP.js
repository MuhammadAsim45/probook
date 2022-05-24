import React, { useState } from "react";
import "./PRP.css";
import { Button, Table, Alert } from "react-bootstrap";
import request from "request";
import axios from "axios";
import { Modal, ModalBody } from "react-bootstrap";
import { TableHead } from "../Style";
import TableModal from "./TableModal";

// import Logo1 from './Logo1.png'

const LA = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow = () => {
    setShowModal1(true);
  };

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [docentry, setDocEntry] = React.useState();
  const [fiscalyearcode, setFiscalYearCode] = React.useState();
  const [monthcode, setMonthCode] = React.useState();
  const [remarks, setRemarks] = React.useState();
  const [docnum, setDocNum] = React.useState();
  const [month, setMonth] = React.useState();

  const [ButtonName, setButtonName] = useState("Add");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [HeaderData, setHeaderData] = useState({});

  //onChange function
  const Doc_Entry_fun = (e) => {
    setDocEntry(e.target.value);
    console.log(e.target.value);
  };
  const Fiscal_Year_Code_fun = (e) => {
    setFiscalYearCode(e.target.value);
    console.log(e.target.value);
  };
  const Month_Code_fun = (e) => {
    setMonthCode(e.target.value);
    console.log(e.target.value);
  };
  const Remarks_fun = (e) => {
    setRemarks(e.target.value);
    console.log(e.target.value);
  };
  const Doc_Num_fun = (e) => {
    setDocNum(e.target.value);
    console.log(e.target.value);
  };
  const Month_fun = (e) => {
    setMonth(e.target.value);
    console.log(e.target.value);
  };

  //Submit Patch func
  const Submit_PatchFunc = () => {
    if (ButtonName === "Add") {
      Senddata();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };

  //Add data to mongo
  async function Senddata() {
    handleShow();
    const bata = {
      DocEntry: docentry,
      FiscalYearCode: fiscalyearcode,
      MonthCode: monthcode,
      Remarks: remarks,
      DocNum: docnum,
      Month: month,
    };
    try {
      axios.post("http://localhost:3331/payrollprocess", bata);
      setLoading(true);
      console.log(bata);
      //alert('Data Successfully Add')
    } catch (error) {
      setMessage();
    }
    alert("Data Successfully added");

    setLoading(false);
    // window.location.reload(false)
  }

  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/payrollprocess/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DocEntry: docentry,
        FiscalYearCode: fiscalyearcode,
        MonthCode: monthcode,
        Remarks: remarks,
        DocNum: docnum,
        Month: month,
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
      url: "http://localhost:3331/payrollprocess",
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
      url: `http://localhost:3331/payrollprocess/${SearchNumber}`,
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
          <h2 style={{ textAlign: "center" }}>
            <b>Payroll Process</b>
          </h2>
          {/* <h1 style={{textAlign:'center'}}><b>Create Accoun</b></h1> */}
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
              type="text"
              onChange={(e) => {
                setSearchNumber(e.target.value);
              }}
              class="PRP-input3"
              placeholder="Search"
            />
          </div>
          <div>
            <label>DocEntry</label>{" "}
            <label style={{ marginLeft: "10.2rem" }}>Fiscal Year Code</label>
            <br />
            <div class="PRP_lab" style={{ float: "left" }}>
              <input
                type="text"
                name="DocEntry"
                value={docentry || (HeaderData && HeaderData.DocEntry)}
                onChange={Doc_Entry_fun}
                class="PRP-input"
              />
            </div>
            <div class=" PRP_box" style={{ marginLeft: "1rem" }}>
              <div className="PRP_dropdown">
                <div class="select-style">
                  <select
                    placeholder="Select"
                    name="FiscalYearCode"
                    value={
                      fiscalyearcode ||
                      (HeaderData && HeaderData.FiscalYearCode)
                    }
                    onChange={Fiscal_Year_Code_fun}
                  >
                    <option class="abc" value="html">
                      Select...
                    </option>
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
          <div>
            <label>Month Code</label>{" "}
            <label style={{ marginLeft: "8.8rem" }}>Remarks</label>
            <div class="PRP_box" style={{ float: "left" }}>
              <input
                type="text"
                name="MonthCode"
                value={monthcode || (HeaderData && HeaderData.MonthCode)}
                onChange={Month_Code_fun}
                class="PRP-input"
                placeholder=""
              />
            </div>
            <div class="PRP_box" style={{ marginLeft: "1rem" }}>
              <input
                type="text"
                name="Remarks"
                value={remarks || (HeaderData && HeaderData.Remarks)}
                onChange={Remarks_fun}
                class="PRP-input"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label>DocNum</label>{" "}
            <label style={{ marginLeft: "10.2rem" }}>Month</label>
            <div class="PRP_box" style={{ float: "left" }}>
              <input
                type="text"
                name="DocNum"
                value={docnum || (HeaderData && HeaderData.DocNum)}
                onChange={Doc_Num_fun}
                class="PRP-input"
              />
            </div>
            <div class="PRP_box" style={{ marginLeft: "1rem" }}>
              <input
                type="text"
                name="Month"
                value={month || (HeaderData && HeaderData.Month)}
                onChange={Month_fun}
                class="PRP-input"
              />
            </div>
          </div>
          <Modal
            contentClassName="modal-PRP"
            show={showModal1}
            onHide={handleClose1}
          >
            <TableModal />
          </Modal>
          <br />
          <br /> <br />
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
                PayRoll Process Data
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {data && (
                <Table bordered>
                  <TableHead>
                    <tr>
                      <th>#</th>
                      <th>Doc Entry</th>
                      <th>Fiscal Year Code</th>
                      <th>Month Code</th>
                      <th>Remarks Type</th>
                      <th>Doc Num</th>
                      <th>Month</th>
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
                        <td>{item.DocEntry}</td>
                        <td>{item.FiscalYearCode}</td>
                        <td>{item.MonthCode}</td>
                        <td>{item.Remarks}</td>
                        <td>{item.DocNum}</td>
                        <td>{item.Month}</td>
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
          <button
            class="PRP_add-button"
            onClick={() => {
              Submit_PatchFunc();
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
