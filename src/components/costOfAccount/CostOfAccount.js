import React, { useRef, useState, useEffect } from "react";

import "./Select.css";
// import Logo1 from './Logo1.png'
import { Alert, Form } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";

const CostOfAccount = ({ setShowModal6 }) => {
  const [getheadernameapi, setgetheadernameapi] = useState();
  const [disply, setdisply] = useState(false);
  const [active, setActive] = useState(false);
  const [dimension, setDeimension] = useState();
  const [sortcode, setsortcode] = useState();

  const [costCenterType, setCostCenterType] = useState();
  const [input, setInput] = React.useState({
    costCenter: "",
    costName: "",
    owner: "",
    sortCode: "",
    startDate: "",
    endDate: "",
    Active: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const handleclose_func = () => {
    setShowModal6(false);
  };
  const Active_Func = (e) => {
    setActive(!active);
    setActive(e.target.value);
    if (active === "true") {
      setdisply(false);
      setActive("false");
    } else {
      setdisply(true);
      setActive("true");
    }
  };

  const SubmitFunction = (e) => {
    e.preventDefault();
    const Data = {
      costCenter: input.costCenter,
      costName: input.costName,
      owner: input.owner,
      sortCode: input.sortCode,
      dimension: dimension,
      costCenterType: costCenterType,
      startDate: input.startDate,
      endDate: input.endDate,
      Active: active,
    };
    console.log({ Data });

    axios
      .post("http://localhost:3331/cost-center", Data)
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
          alert("Unable to data because this Code already present");
          setError("Unable to data because Code already present");
          setMessage("");
        } else {
          console.log("other Error");
          setMessage("");
          setError("Error, unable to add data");
          alert("Error, unable to add data");
        }
      });
  };

  const resetfunc = () => {
    setInput({
      costCenter: "",
      costName: "",
      owner: "",
      sortCode: "",
      startDate: "",
      endDate: "",
      Active: "",
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
        setgetheadernameapi(response.data[0].CustomName);
      })
      .catch(function (error) {});
  };
  // show All data
  useEffect(() => {
    getheadername();
  }, []);
  const customStyles5 = {
    control: (base) => ({
      ...base,
      // width: 140,
      height: 35,
      minHeight: 55,
      border: "none",
      background: "none",
      boxShadow: "none !important",
      outline: "none",
    }),
  };

  return (
    <>
      <div class="login-divbank">
        <div class="row">
          <div class="col form-group">
            <div class="lcol">
              <article class="card-body">
                <Form onSubmit={SubmitFunction}>
                  <div class="COA_fields ">
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

                    <label className="OPRJ-Label">Cost Center</label>
                    <br />
                    <div class="DR_box1">
                      <a style={{ cursor: "pointer" }}></a>
                      <input
                        type="text"
                        name="costCenter"
                        required
                        onChange={handleEvent}
                        value={input.costCenter}
                        class="COA_user-input6"
                        placeholder="Cost Center"
                      />
                    </div>
                    <div class="edate">
                      <label className="DR-Label1">Name</label>
                    </div>
                    <div class="DR_box2">
                      <input
                        type="text"
                        class="COA_user-input1"
                        name="costName"
                        required
                        placeholder="Name"
                        onChange={handleEvent}
                        value={input.costName}
                      />
                    </div>
                    <br />
                    <label className="DR-Label">Owner</label>
                    <br />
                    <div class="DR_box1">
                      <input
                        type="text"
                        class="COA_user-input1"
                        placeholder="Owner"
                        name="owner"
                        required
                        onChange={handleEvent}
                        value={input.owner}
                      />
                    </div>
                    <div class="edate">
                      <label className="DR-Label1">Sort Code</label>
                    </div>
                    <div class="DR_box2">
                      <input
                        type="number"
                        class="COA_user-input"
                        placeholder="Sort code"
                        name="sortCode"
                        required
                        value={input.sortCode}
                        onChange={handleEvent}
                      />
                    </div>

                    <br />

                    {/* <div>
                      <label className="OPRJ-Label">Dimensions</label>
                      <label className="OPRJ-Label" style={{ marginLeft: '7rem' }}> Cost Center Type</label><br />
                      <div className="COA-dropdown">
                        <div class="COA-select-style" >
                          <select placeholder="Select " required
                            onChange={(e) => {
                              e.preventDefault()
                              const selected = e.target.value
                              console.log(selected)
                              setDeimension(selected)
                            }}
                          >
                            <option class="abc" value="">Select..</option>
                            <option class="abc" value="Dimension1">Dimensions 1</option>
                            <option class="abc" value="Dimension2">Dimension 2</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div> 
                      <div className="COA-dropdown1">
                        <div class="COA-select-style" >
                          <select placeholder="Select" required

                            onChange={(e) => {
                              e.preventDefault()
                              const selected = e.target.value

                              console.log(selected)


                              setCostCenterType(selected)


                            }}
                          >
                            <option className="abc" value="">Select..</option>
                            <option className="abc" value="Dimension1">Dimensions 1</option>
                            <option className="abc" value="Dimension2">Dimension 2</option>
                          </select>
                        </div>
                      </div>

                    </div> */}

                    <label className="OPRJ-Label">Dimensions</label>
                    <br />
                    <div className="JEN2-dropdown">
                      <div class="COA-select-style">
                        <select
                          placeholder="Select "
                          required
                          onChange={(e) => {
                            e.preventDefault();
                            const selected = e.target.value;
                            console.log(selected);
                            setDeimension(selected);
                          }}
                        >
                          <option class="abc" value="">
                            Select..
                          </option>
                          <option class="abc" value="Dimension1">
                            Dimensions 1
                          </option>
                          <option class="abc" value="Dimension2">
                            Dimension 2
                          </option>
                        </select>
                      </div>
                      {/* <Select
                        name="Project"
                        styles={customStyles5}

                      /> */}
                    </div>
                    <div class="edate">
                      <label className="DR-Label1">Cost Center Type</label>
                    </div>
                    <div className="JEN3-dropdown">
                      <div class="COA-select-style">
                        <select
                          placeholder="Select"
                          required
                          onChange={(e) => {
                            e.preventDefault();
                            const selected = e.target.value;

                            console.log(selected);

                            setCostCenterType(selected);
                          }}
                        >
                          <option className="abc" value="">
                            Select..
                          </option>
                          <option className="abc" value="Dimension1">
                            Dimensions 1
                          </option>
                          <option className="abc" value="Dimension2">
                            Dimension 2
                          </option>
                        </select>
                      </div>
                      {/*<Select
                          name="Project"
                          styles={customStyles5}

                        /> */}
                    </div>
                    <br />

                    <div>
                      <label className="OPRJ-Label">Effective From </label>
                      <div>
                        <label className="OPRJ-Label">Start Date</label>
                        <br />
                        <div class="DR_box1">
                          <input
                            type="date"
                            required
                            name="startDate"
                            class="COA_user-input13"
                            placeholder="Code"
                            value={input.startDate}
                            onChange={handleEvent}
                          />
                        </div>
                        <div class="edate">
                          <label className="DR-Label1">End Date</label>
                        </div>
                        <div class="DR_box2">
                          <input
                            type="date"
                            required
                            name="endDate"
                            class="COA_user-input13"
                            placeholder="Code"
                            value={input.endDate}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ float: "left" }}>
                    <input
                      type="checkbox"
                      name="Active"
                      value={disply}
                      checked={disply}
                      onChange={Active_Func}
                      id="rememberMe"
                    />
                    <label className="OPRJ-Label" for="rememberMe">
                      Active
                    </label>
                  </div>

                  <br />
                  <br />
                  {/* <div class="password"><svg fill="#999" viewBox="0 0 1024 1024"><path class="path1" 
                        d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 
                        0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input type="username" class="user-input" placeholder="Username" /></div> */}
                  <button
                    class="DR-add-button"
                    type="submit"
                    style={{ float: "left" }}
                  >
                    Add
                  </button>
                </Form>
                <button class="DR-cancel-button" onClick={handleclose_func}>
                  Cancel
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CostOfAccount;
