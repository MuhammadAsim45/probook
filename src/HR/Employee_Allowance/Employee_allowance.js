import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import { TableHead } from "../Style";
import axios from "axios";
import request from "request";
import "./Employee_allowance.css";

const Form15 = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ButtonName, setButtonName] = useState("Add");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [HeaderData, setHeaderData] = useState();
  const [docentry, setdocentry] = useState();
  const [postingdate, setpostingdate] = useState();
  const [docnum, setdocnum] = useState();
  const [allowancecode, setallowancecode] = useState();
  const [periodcode, setperiodcode] = useState();
  const [remarks, setremarks] = useState();
  const [periodmonth, setperiodmonth] = useState();
  const [allowancename, setallowancename] = useState();
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
      Doc_Entry: docentry,
      Posting_Date: postingdate,
      Doc_Num: docnum,
      Allowance_Code: allowancecode,
      Period_Code: periodcode,
      Remarks: remarks,
      Period_Month: periodmonth,
      Allowance_Name: allowancename,
    };
    console.log(newNote);
    try {
      axios.post("http://localhost:3331/Employee_allowance", newNote);
    } catch (error) {
      console.log(error);
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
      url: `http://localhost:3331/Employee_allowance/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Doc_Entry: docentry,
        Posting_Date: postingdate,
        Doc_Num: docnum,
        Allowance_Code: allowancecode,
        Period_Code: periodcode,
        Remarks: remarks,
        Period_Month: periodmonth,
        Allowance_Name: allowancename,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    window.location.reload(false);
  };
  const DocEntry_Func = (e) => {
    setdocentry(e.target.value);
    console.log(e.target.value);
  };
  const PostingDate_Func = (e) => {
    setpostingdate(e.target.value);
    console.log(e.target.value);
  };
  const DocNum_Func = (e) => {
    setdocnum(e.target.value);
    console.log(e.target.value);
  };
  const AllowanceCode_Func = (e) => {
    setallowancecode(e.target.value);
    console.log(e.target.value);
  };

  const PeriodCode_Func = (e) => {
    setperiodcode(e.target.value);
    console.log(e.target.value);
  };

  const Remarks_Func = (e) => {
    setremarks(e.target.value);
    console.log(e.target.value);
  };
  const PeriodMonth_Func = (e) => {
    setperiodmonth(e.target.value);
    console.log(e.target.value);
  };

  const AllowanceName_Func = (e) => {
    setallowancename(e.target.value);
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
      url: "http://localhost:3331/Employee_allowance",
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
      url: `http://localhost:3331/Employee_allowance/${SearchNumber}`,
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
      <div class="Employees_Class">
        <div class="Employee_Earned_img">
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
          <h2 style={{ textAlign: "center" }}>Employee Allowance</h2>
        </div>
        <div>
          <label className="HR-Label">Doc Entry</label>
          <label className="HR-Label"></label>
          <div>
            <div class=" EA1_user_filed1 ">
              <a style={{ cursor: "pointer", float: "left" }}></a>
              <input
                type="text"
                class="EA1_user_input1"
                placeholder=""
                name="Doc_Entry"
                value={docentry || (HeaderData && HeaderData.Doc_Entry)}
                onChange={DocEntry_Func}
              />
            </div>
          </div>
          <div>
            <div class="EA1_search_fieldes" style={{ float: "right" }}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  Find_FilterFunc();
                }}
              >
                <svg
                  class="EA1_svg-icon19"
                  style={{ float: "right" }}
                  viewBox="0 0 20 20"
                >
                  <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                </svg>
              </a>
              <input
                type="text"
                maxlength="10"
                placeholder="Search"
                class="EA1_search_fields078"
                onChange={(e) => {
                  setSearchNumber(e.target.value);
                }}
                style={{ marginLeft: ".35rem", marginTop: "-0.14rem" }}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="HR-Label3">Posting Date</label>{" "}
          <label className="HR-Label4" style={{ marginLeft: "9rem" }}>
            Doc Num
          </label>
          <div>
            <div class=" ERL_box1">
              <input
                style={{ float: "left" }}
                type="date"
                class="ERL_user-input2"
                name="Posting_Date"
                value={postingdate || (HeaderData && HeaderData.Posting_Date)}
                onChange={PostingDate_Func}
              />
            </div>
          </div>
          <div>
            <div class=" EA1_user_filed1 " style={{ float: "right" }}>
              <a style={{ cursor: "pointer" }}></a>
              <input
                type="text"
                class="EA1_user_input1"
                placeholder=""
                name="Doc_Num"
                value={docnum || (HeaderData && HeaderData.Doc_Num)}
                onChange={DocNum_Func}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <label className="HR-Label5">Allowance Code</label>{" "}
          <label className="HR-Label6" style={{ marginLeft: "7.40rem" }}>
            Period Code
          </label>
          <div>
            <div className="EA1-dropdown1" style={{ float: "left" }}>
              <div class="EA1-selected-style">
                <select
                  placeholder="Select"
                  name="Allowance_Code"
                  value={
                    allowancecode || (HeaderData && HeaderData.Allowance_Code)
                  }
                  onChange={AllowanceCode_Func}
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
          <div>
            <div className="EA1-dropdown1" name="Period_Code">
              <div class="EA1-selected-style">
                <select
                  placeholder="Select"
                  value={periodcode || (HeaderData && HeaderData.Period_Code)}
                  onChange={PeriodCode_Func}
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
        <div>
          <label className="HR-Label5">Remarks</label>{" "}
          <label className="HR-Label6" style={{ marginLeft: "10.40rem" }}>
            Period Month
          </label>
          <div>
            <div class=" EA1_user_filed1 ">
              <a style={{ cursor: "pointer" }}></a>
              <input
                type="text"
                class="EA1_user_input1"
                placeholder=""
                name="Remarks"
                value={remarks || (HeaderData && HeaderData.Remarks)}
                onChange={Remarks_Func}
              />
            </div>
          </div>
          <div>
            <div>
              <div className="EA1-dropdown1" name="Period_Month">
                <div class="EA1-selected-style">
                  <select
                    placeholder="Select"
                    value={
                      periodmonth || (HeaderData && HeaderData.Period_Month)
                    }
                    onChange={PeriodMonth_Func}
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
          <div>
            <label className="HR-Label5">Allowance Name</label>
            <div>
              <div
                class="EA1_user_filed1"
                style={{ width: "99%", marginLeft: "0.15rem" }}
              >
                <a style={{ cursor: "pointer" }}></a>
                <input
                  type="text"
                  class="EA1_user_input1"
                  placeholder=""
                  name="Allowance_Name"
                  value={
                    allowancename || (HeaderData && HeaderData.Allowance_Name)
                  }
                  onChange={AllowanceName_Func}
                />
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
              Employee Allowance Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data && (
              <Table bordered>
                <TableHead>
                  <tr>
                    <th>#</th>
                    <th>Doc Num</th>
                    <th>Postingdate</th>
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
                      <td>{item.Doc_Num}</td>
                      <td>{item.Posting_Date}</td>
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
        <button
          class="EAL-add-button1"
          onClick={() => {
            Submit_PatchFunc();
          }}
        >
          {ButtonName}
        </button>
        <button class="EAL-cancel-button2">Cancel</button>
        <br />
      </div>
    </>
  );
};
export default Form15;
