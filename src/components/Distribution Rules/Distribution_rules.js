import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, Table, Alert, Form } from "react-bootstrap";
import { TableHead } from "./Styles";
import Select from "react-select";
import "./selects.css";
import axios from "axios";
import request from "request";
import { useHistory } from "react-router-dom";

const Input = ({ setShowModal7 }) => {
  // const refsearch = useRef("");
  const refcode = useRef("");
  const refstart = useRef("");
  const refend = useRef("");
  const refdescrip = useRef("");
  const refdimen = useRef("");
  const reftotal = useRef("");

  const [getheadernameapi, setgetheadernameapi] = useState();
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disply, setdisply] = useState(false);
  const [disply2, setdisply2] = useState(false);
  const [disply3, setdisply3] = useState(false);
  const [code, setCode] = useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [discription, setDiscription] = React.useState("");
  const [dimensions, setDimensions] = React.useState("");
  const [fetchData, setFetchData] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [total, setTotal] = useState("");
  const [directAllocation, setDirectAllocation] = useState(false);
  const [fixedAmount, setFixedAmount] = useState(false);
  const [HeaderData, setHeaderData] = useState();
  const [show, setShow] = React.useState(false);
  const [ButtonName, setButtonName] = React.useState("Add");
  const [SearchNumber, setSearchNumber] = React.useState("");
  const [data, setData] = useState();
  const [showdel, setshowdel] = React.useState(false);

  // At initial stages for add data
  const [input, setInput] = useState({
    Code: "",
    StartDate: "",
    EndDate: "",
    Discription: "",
    Dimension: "",
    Active: "",
    Total: "",
    Direct_Allocation: "",
    Fixed_Amount: "",
  });

  //reset function
  const resetfunc = () => {
    console.log("reset function");

    // refsearch.current.value = "";
    refcode.current.value = "";
    refstart.current.value = "";
    refend.current.value = "";
    refdescrip.current.value = "";
    // refdimen.current.value = "";
    reftotal.current.value = "";

    setSearchNumber("");
    setCode("");
    setStartDate("");
    setEndDate("");
    setDiscription("");
    setDimensions("");
    setIsChecked(false);
    setdisply(false);
    setTotal("");
    setDirectAllocation(false);
    setdisply2(false);
    setFixedAmount(false);
    setdisply3(false);

    setHeaderData("");
  };

  // Add data function
  async function handleSubmit() {
    const newNote = {
      Code: code,
      StartDate: startDate,
      EndDate: endDate,
      Discription: discription,
      Dimension: dimensions,
      Active: isChecked,
      Total: total,
      Direct_Allocation: directAllocation,
      Fixed_Amount: fixedAmount,
    };
    axios
      .post("http://localhost:3331/distribution", newNote)
      .then((res) => {
        console.log(res);
        setError("");
        setMessage("Data saved successfully");
        alert("Data saved successfully");
        resetfunc();
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        console.log(error.response.data.msg.code);
        if (error.response.data.msg.code == 11000) {
          console.log("duplicate key Error");
          alert("Unable to add data because this Code already present");
          setError("Unable to add data because this Code already present");
          setMessage("");
        } else {
          console.log("other Error");
          setMessage("");
          setError("Error, unable to add data");
          alert("Error, unable to add data");
        }
      });
  }
  //Code function
  const Code_Func = (e) => {
    setCode(e.target.value);
  };
  //Date function
  const StartDate_Func = (e) => {
    setStartDate(e.target.value);
  };
  const EndDate_Func = (e) => {
    setEndDate(e.target.value);
  };
  //Discription Function
  const Discription_Func = (e) => {
    setDiscription(e.target.value);
  };
  //Dimention Function
  // const Dimension_Func = (e) => {
  //   setDimensions(e.target.value)
  // }
  //Active Function
  const Active_Func = (e) => {
    setIsChecked(e.target.value);
    setIsChecked(!isChecked);
    if (isChecked === "true") {
      setdisply(false);
      setIsChecked("false");
    } else {
      setdisply(true);
      setIsChecked("true");
    }
  };
  //Total Function
  const Total_Func = (e) => {
    setTotal(e.target.value);
  };
  //Direct Allocation Function
  const Direct_Func = (e) => {
    setDirectAllocation(e.target.value);
    setDirectAllocation(!directAllocation);
    if (directAllocation === "true") {
      setdisply2(false);
      setDirectAllocation("false");
    } else {
      setdisply2(true);
      setDirectAllocation("true");
    }
  };
  //Fixed Amount Function
  const Fixed_Func = (e) => {
    setFixedAmount(e.target.value);
    setFixedAmount(!fixedAmount);
    if (fixedAmount === "true") {
      setdisply3(false);
      setFixedAmount("false");
    } else {
      setdisply3(true);
      setFixedAmount("true");
    }
  };

  // Update function
  const updataData = () => {
    if (SearchNumber != HeaderData.Code) {
      alert("Code number cannot be updated");
    } else {
      var axios = require("axios");
      var data = JSON.stringify({
        Code: code,
        StartDate: startDate,
        EndDate: endDate,
        Discription: discription,
        Dimension: dimensions,
        Active: disply,
        Total: total,
        Direct_Allocation: disply2,
        Fixed_Amount: disply3,
      });

      var config = {
        method: "patch",
        url: `http://localhost:3331/distribution/${SearchNumber}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setError("");
          setMessage("Data updated successfully");
          alert("Data updated successfully");
          setshowdel(false);
          setButtonName("Add");
          resetfunc();
        })
        .catch(function (error) {
          setMessage("");
          setError("Unable to update data. Try again");
          alert("Unable to update data. Try again");
          console.log(error);
        });
    }

    // var request = require('request');
    // var options = {
    //   'method': 'PATCH',
    //   'url': `http://localhost:3331/distribution/${SearchNumber}`,
    //   'headers': {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "Code": code,
    //     "StartDate": startDate,
    //     "EndDate": endDate,
    //     "Discription": discription,
    //     "Dimension": dimensions,
    //     "Active": disply,
    //     "Total": total,
    //     'Direct_Allocation': disply2,
    //     "Fixed_Amount": disply3
    //   })
    // };
    // request(options, function (error, response) {
    //   if (SearchNumber == HeaderData.Code) {
    //     setMessage("Data updated successfully")
    //     alert("Data updated successfully")
    //   } else {
    //     setError("Enter the correct Code in  box that you want to update")
    //     alert("Enter the correct Code in  box that you want to update")
    //   }
    //   if (error) throw new Error(error);
    // });
    // window.location.reload(false)
  };

  //Modal cancel button function
  const handleClose = () => {
    setShow(false);
    setShowModal7(false);
  };
  //Submit Patch func
  const Submit_PatchFunc = (e) => {
    e.preventDefault();

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
    setshowdel(true);

    setSearchNumber(item.Code);
    setCode(item.Code);
    setStartDate(item.StartDate);
    setEndDate(item.EndDate);
    setDiscription(item.Discription);
    setDimensions(item.Dimension);
    setIsChecked(item.Active);
    setTotal(item.Total);
    setDirectAllocation(item.Direct_Allocation);
    setFixedAmount(item.Fixed_Amount);

    setError("");
    setMessage("");

    // For set Checkbox value on card
    if (item.Active == "true") {
      setdisply(true);
    } else {
      setdisply(false);
    }
    if (item.Direct_Allocation == "true") {
      setdisply2(true);
    } else {
      setdisply2(false);
    }
    if (item.Fixed_Amount == "true") {
      setdisply3(true);
    } else {
      setdisply3(false);
    }
  };

  //Get other Form Data from Mongodb
  const filter = () => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:3331/dimension",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        let docline = [];
        var temp = "";
        response.data.forEach((element) => {
          if (element.DimActive === "true") {
            docline.push({
              // id:element.DimCode,
              // name:element.DimName
              value: element.DimCode,
              label: element.DimName,
            });
          }
          setFetchData(docline);
        });
      })
      .catch(function (error) {});
  };
  // Function On All and Filter Button
  const Find_FilterFunc = async () => {
    if (SearchNumber == "") {
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
      url: "http://localhost:3331/distribution",
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
    var options = {
      method: "GET",
      url: `http://localhost:3331/distribution/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (response.body == "") {
        setMessage("");
        setError("This Code is not present");
        alert("This Code is not in present");
      } else {
        const data = response.body;
        const finalData = JSON.parse(data);
        setHeaderData(finalData);

        setCode(finalData.Code);
        setStartDate(finalData.StartDate);
        setEndDate(finalData.EndDate);
        setDiscription(finalData.Discription);
        setDimensions(finalData.Dimension);
        setIsChecked(finalData.Active);
        setTotal(finalData.Total);
        setDirectAllocation(finalData.Direct_Allocation);
        setFixedAmount(finalData.Fixed_Amount);

        // Set buttons
        setButtonName("Update");
        setshowdel(true);

        setError("");
        setMessage("");

        //for set check box value on card
        if (finalData.Active === "true") {
          setdisply(true);
        } else {
          setdisply(false);
        }
        if (finalData.Direct_Allocation === "true") {
          setdisply2(true);
        } else {
          setdisply2(false);
        }
        if (finalData.Fixed_Amount === "true") {
          setdisply3(true);
        } else {
          setdisply3(false);
        }
      }
    });
  };
  const getheadername = () => {
    var axios = require("axios");
    var data = {};
    var config = {
      method: "get",
      url: "http://localhost:3331/name",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setgetheadernameapi(response.data[9].CustomName);
      })
      .catch(function (error) {});
  };
  // show All data
  useEffect(() => {
    getheadername();
    filter();
  }, []);
  //Cancel button function
  function closeTab() {
    history.push("/");
  }
  // Delete function
  const DeleteData = () => {
    if (SearchNumber != HeaderData.Code) {
      alert("Unable to delete, Correct your code in search bar");
    } else {
      var axios = require("axios");
      var data = "";

      var config = {
        method: "delete",
        url: `http://localhost:3331/distribution/${SearchNumber}`,
        headers: {},
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setError("");
          setMessage("Data deleted successfully");
          alert("Data deleted successfully");
          setshowdel(false);
          setButtonName("Add");
          resetfunc();
        })
        .catch(function (error) {
          console.log(error);
          setMessage("");
          setError("Unable to delete data. Try again");
          alert("Unable to delete data. Try again");
        });
    }
  };
  //Dimention Function
  const Dimension_Func = (e) => {
    let obj = dimensions;
    obj = e.value;
    console.log(obj);
    setDimensions(obj);
  };
  const customStyles3 = {
    control: (base) => ({
      ...base,
      height: 35,
      minHeight: 55,
      border: "none",
      background: "none",
      boxShadow: "none !important",
      outline: "none",
      textAlign: "left",
    }),
  };
  return (
    <>
      <div class="login-divbank">
        <div class="row">
          <div class="col form-group">
            <div class="lcol">
              <article class="card-body">
                <div class="DR_field">
                  <Form onSubmit={Submit_PatchFunc}>
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
                    <h3 style={{ textAlign: "center" }}>{getheadernameapi}</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <label className="OPRJ-Label">Code</label>
                    <div class="bank_username">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          Find_FilterFunc();
                        }}
                      >
                        <svg class="DR-svg-icon1" viewBox="0 0 20 20">
                          <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                        </svg>
                      </a>
                      <input
                        type="number"
                        required
                        name="Code"
                        value={code || (HeaderData && HeaderData.Code)}
                        ref={refcode}
                        placeholder="Enter your Code"
                        onChange={(e) => {
                          setSearchNumber(e.target.value);
                          Code_Func(e);
                        }}
                        class="bank_user-input1"
                        style={{ marginTop: "none" }}
                      />
                    </div>
                    <label className="OPRJ-Label">Effective From </label>
                    <br />
                    <label className="OPRJ-Label">Start Date</label>
                    <br />
                    <div class="DR_box1">
                      <input
                        type="date"
                        required
                        class="DR_user-input5"
                        name="StartDate"
                        value={
                          startDate || (HeaderData && HeaderData.StartDate)
                        }
                        ref={refstart}
                        onChange={(e) => {
                          StartDate_Func(e);
                        }}
                      />
                    </div>
                    <div class="edate">
                      <label className="OPRJ-Label1">End Date</label>
                    </div>
                    <div class="DR_box2">
                      <input
                        type="date"
                        required
                        class="DR_user-input5"
                        name="EndDate"
                        value={endDate || (HeaderData && HeaderData.EndDate)}
                        ref={refend}
                        onChange={(e) => {
                          EndDate_Func(e);
                        }}
                      />
                    </div>
                    <br />
                    <label className="OPRJ-Label">Dimension</label>
                    <br />
                    <div className="JEN2-dropdown">
                      <Select
                        name="Dimension"
                        // value={dimensions}
                        onChange={(e) => Dimension_Func(e)}
                        options={fetchData}
                        styles={customStyles3}
                      />
                    </div>
                    <div class="edate">
                      <label className="DR-Label1">Description</label>
                    </div>
                    <div class="DR_box2">
                      <input
                        type="text"
                        required
                        class="DR_user-input1"
                        name="Discription"
                        placeholder="Description"
                        value={
                          discription || (HeaderData && HeaderData.Discription)
                        }
                        ref={refdescrip}
                        onChange={(e) => {
                          Discription_Func(e);
                        }}
                      />
                    </div>
                    <br />
                    {/* <br />
                    <label className="OPRJ-Label" >Description</label>
                    <div class="de" >
                      <input type="text" required class="DR_user-input1" name="Discription" placeholder="Description"
                        value={discription || HeaderData && HeaderData.Discription} ref={refdescrip}
                        required onChange={(e) => { Discription_Func(e) }} />
                    </div>
                    <label className="OPRJ-Label">Dimension</label><br />
                    <div className="DR_dropdown">

                      <Select name="Dimension" value={dimensions}
                        onChange={e => Dimension_Func(e)}
                        options={fetchData}
                        styles={customStyles3}
                      />

                    </div> */}
                    {/* <div className="DR_dropdown"  >
                        <div class="DR-select-style" >
                          <select placeholder="Select" required  name="Dimension" value={dimensions || HeaderData && HeaderData.Dimension} ref={refdimen} onChange={Dimension_Func}  >
                            <option class="abc" value="" >Select...</option>
                            <option class="abc" value="Dimension1">Dimension 1</option>
                            <option class="abc" value="Dimension2">Dimension 2</option>
                          </select>
                        </div>
                      </div> */}
                    <div style={{ float: "left", fontSize: "16px" }}>
                      <input
                        type="checkbox"
                        name="Active"
                        id="checked"
                        value={disply}
                        checked={disply}
                        onChange={Active_Func}
                      />{" "}
                      <label className="OPRJ-Label" for="rememberMe">
                        Active
                      </label>
                    </div>
                    <br /> <br />
                    <label className="OPRJ-Label">Total</label>
                    <br />
                    <div class="DR_box1">
                      <input
                        type="number"
                        required
                        name="Total"
                        value={total || (HeaderData && HeaderData.Total)}
                        ref={reftotal}
                        onChange={(e) => {
                          Total_Func(e);
                        }}
                        class="DR_user-input"
                      />
                    </div>
                    {/* <label className="OPRJ-Label" >Total</label>
                    <br />
                    <div class="to" style={{ float: 'left' }}>
                      <input type="number" required name="Total" value={total || HeaderData && HeaderData.Total} ref={reftotal}
                        required onChange={e => { Total_Func(e) }} class="DR_user-input" />
                    </div> */}
                    <br />
                    <br />
                    <div style={{ fontSize: "16px" }}>
                      <input
                        type="checkbox"
                        name="Direct_Allocation"
                        id="checked"
                        value={disply2}
                        checked={disply2}
                        onChange={Direct_Func}
                      />
                      <label className="OPRJ-Label" for="Check2">
                        Direct Allocation
                      </label>
                    </div>
                    <div style={{ fontSize: "16px" }}>
                      <input
                        type="checkbox"
                        name="Fixed_Amount"
                        value={disply3}
                        checked={disply3}
                        onChange={Fixed_Func}
                      />
                      <label className="OPRJ-Label" for="Check3">
                        Allocate by Fixed Amount
                      </label>
                    </div>
                    <Modal
                      className="modal Modal-big"
                      show={show}
                      onHide={handleClose}
                      size="lg"
                    >
                      {/* <div style={{ background: 'rgb(185 208 227)', width: '40rem', height: 'auto', borderRadius: "1rem" }} > */}
                      <div className="row">
                        <br />
                        <div class="col-lg-6 col-md-6 col-sm-6 modal-table">
                          <div class="form-group">
                            <h3 style={{ textAlign: "center" }}>
                              Distribution List
                            </h3>
                          </div>
                          {data && (
                            <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                              <div class="form-group">
                                <Table bordered class="Table1">
                                  <TableHead>
                                    <tr>
                                      <th>#</th>
                                      <th>Code</th>
                                      <th>Discription</th>
                                      <th>Dimension</th>
                                      <th>Total</th>
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
                                        <td>{item.Code}</td>
                                        <td>{item.Discription}</td>
                                        <td>{item.Dimension}</td>
                                        <td>{item.Total}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          )}
                          <button
                            className="DR-cancel-button"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                          <br />
                          <br />
                        </div>
                      </div>
                    </Modal>
                    <br />
                    <button
                      class="DR-add-button"
                      disabled={loading}
                      type="submit"
                      style={{ float: "left" }}
                    >
                      {ButtonName}
                    </button>
                  </Form>
                  {showdel ? (
                    <button
                      class="DR-add-button"
                      onClick={() => {
                        DeleteData();
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  ) : null}
                  <button class="DR-cancel-button" onClick={handleClose}>
                    Cancel
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Input;
