import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import request from "request";
import { TableHead } from "./Style";
import "./bankCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Input = ({ handleClose1 }) => {
  // Backend Code Start from here
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [countryCode, setCountryCode] = useState();
  const [bankCode, setBankCode] = useState();
  const [bankName, setBankName] = useState();
  const [swiftCode, setSwiftCode] = useState();
  const [postOffice, setPostOffice] = useState(false);
  const [accountNo, setAccountNo] = useState();
  const [branch, setBranch] = useState();
  const [checkNumber, setCheckNumber] = useState();
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = React.useState(false);
  const [ButtonName, setButtonName] = React.useState("Add");
  const [HeaderData, setHeaderData] = useState();
  const [disply, setdisply] = useState(false);

  // At initial state
  const [input, setInput] = useState({
    Country_code: "",
    Bank_code: "",
    Bank_Name: "",
    BIC_Swift_Code: "",
    Post_office: "",
    Account_no: "",
    Branch_Name: "",
    Next_Check_no: "",
  });
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
      Country_code: countryCode,
      Bank_code: bankCode,
      Bank_Name: bankName,
      BIC_Swift_Code: swiftCode,
      Post_office: postOffice,
      Account_no: accountNo,
      Branch_Name: branch,
      Next_Check_no: checkNumber,
    };
    if (
      countryCode == null ||
      bankCode == null ||
      bankName == null ||
      swiftCode == null ||
      accountNo == null ||
      branch == null ||
      checkNumber == null
    ) {
      setError("Please filled all fields");
    } else {
      // Try and catch
      try {
        axios.post("http://localhost:3331/bank", newNote);
        setError("");
        setLoading(true);
        alert("Data successfully added");
      } catch {
        setMessage("");
      }
    }

    setLoading(false);
    // window.location.reload(false);
  }
  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/bank/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Country_code: countryCode,
        Bank_code: bankCode,
        Bank_Name: bankName,
        BIC_Swift_Code: swiftCode,
        Post_office: disply,
        Account_no: accountNo,
        Branch_Name: branch,
        Next_Check_no: checkNumber,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    window.location.reload(false);
  };
  // input fields onChange functions
  const CountryCode_Func = (e) => {
    setCountryCode(e.target.value);
  };
  const BankCode_Func = (e) => {
    setBankCode(e.target.value);
  };
  const BankName_Func = (e) => {
    setBankName(e.target.value);
  };
  const SwiftCode_Func = (e) => {
    setSwiftCode(e.target.value);
  };
  const PostOffice_Func = (e) => {
    setPostOffice(!postOffice);
    setPostOffice(e.target.value);
    if (postOffice === "true") {
      setdisply(false);
      setPostOffice("false");
    } else {
      setdisply(true);
      setPostOffice("true");
    }
  };
  const Account_No_Func = (e) => {
    setAccountNo(e.target.value);
  };
  const BranchName_Func = (e) => {
    setBranch(e.target.value);
  };
  const NextCheck_No_Func = (e) => {
    setCheckNumber(e.target.value);
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
      url: "http://localhost:3331/bank",
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
      url: `http://localhost:3331/bank/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const data = response.body;
      const finalData = JSON.parse(data);
      //for set check box value on card
      if (finalData.Post_office === "true") {
        setdisply(true);
      } else {
        setdisply(false);
      }

      setHeaderData(finalData);
    });
  };
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(item);
    setButtonName("Update");
    // For set Checkbox value on card
    if (item.Post_office === "true") {
      setdisply(true);
    } else {
      setdisply(false);
    }
  };
  //Modal cancel button function
  const handleClose = () => {
    setShow(false);
  };

  //................End Backend Code...............

  return (
    <>
      <div class="login-divbank" style={{ outline: "none", border: "none" }}>
        <img
          src="/Logo3.png"
          height="80px"
          width="100px"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt="show"
        />
        <h3 style={{ textAlign: "center" }}>Journal Entry Table</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <table class="Table1">
          <thead>
            <th>#</th>
            <th>G/L Acct/BP Code</th>
            <th>G/L Acct/BP Name</th>
            <th>Control</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Remarks</th>
            <th>Remarks Template</th>
            <th>Ref.1</th>
            <th>Cheque No</th>
          </thead>
          <tbody>
            {
              <tr>
                <td></td>
                <td>
                  <input
                    type="number"
                    name="G/L_Acct/BP_Code"
                    className=" bank_user-input"
                    placeholder=""
                    value={
                      countryCode || (HeaderData && HeaderData.Country_code)
                    }
                    onChange={CountryCode_Func}
                  ></input>
                </td>

                <td>
                  <input
                    type="text"
                    name="G/L_Acct/BP_Name"
                    className="bank_user-input"
                    placeholder=""
                    value={bankCode || (HeaderData && HeaderData.Bank_code)}
                    onChange={BankCode_Func}
                  ></input>
                </td>

                <td>
                  <input
                    type="text"
                    name="Control"
                    className="bank_user-input"
                    placeholder=""
                    value={bankName || (HeaderData && HeaderData.Bank_Name)}
                    onChange={BankName_Func}
                  ></input>
                </td>

                <td>
                  <input
                    type="number"
                    name="Debit"
                    className="bank_user-input"
                    placeholder=""
                    value={
                      swiftCode || (HeaderData && HeaderData.BIC_Swift_Code)
                    }
                    onChange={SwiftCode_Func}
                  ></input>
                </td>

                <td>
                  <input
                    type="text"
                    name="Credit"
                    style={{ align: "center" }}
                    className="bank_user-input"
                    value={disply}
                    onChange={PostOffice_Func}
                  ></input>{" "}
                </td>

                <td>
                  <input
                    type="text"
                    name="Remarks"
                    className="bank_user-input"
                    placeholder=""
                    value={accountNo || (HeaderData && HeaderData.Account_no)}
                    onChange={Account_No_Func}
                  ></input>{" "}
                </td>

                <td>
                  <input
                    type="text"
                    name="Remarks_Template"
                    className="bank_user-input"
                    placeholder=""
                    value={branch || (HeaderData && HeaderData.Branch_Name)}
                    onChange={BranchName_Func}
                  ></input>
                </td>

                <td>
                  <input
                    type="text"
                    name="Ref.1"
                    className="bank_user-input"
                    placeholder=""
                    value={
                      checkNumber || (HeaderData && HeaderData.Next_Check_no)
                    }
                    onChange={NextCheck_No_Func}
                  ></input>
                </td>
                <td>
                  <input
                    type="number"
                    name="Cheque_No"
                    className="bank_user-input"
                    placeholder=""
                    value={
                      checkNumber || (HeaderData && HeaderData.Next_Check_no)
                    }
                    onChange={NextCheck_No_Func}
                  ></input>
                </td>
              </tr>
            }

            <Modal
              show={show}
              onHide={handleClose}
              className="Modal-big modal"
              size="lg"
            >
              <div
                style={{
                  background: "rgb(185 208 227)",
                  width: "40rem",
                  height: "auto",
                  borderRadius: "1rem",
                }}
              >
                <br />
                <h3 style={{ textAlign: "center" }}>Bank List</h3>
                {data && (
                  <Table bordered>
                    <TableHead>
                      <tr>
                        <th>#</th>
                        <th>Country_code</th>
                        <th>Bank_code</th>
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
                          <td>{item.Country_code}</td>
                          <td>{item.Bank_code}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
                <br />
                <button className="DR-cancel-button" onClick={handleClose}>
                  Cancel
                </button>
                <br />
                <br />
              </div>
            </Modal>
          </tbody>
        </table>
        <br />

        <br />
        <button className="DR-add-button" onClick={Submit_PatchFunc}>
          {ButtonName}
        </button>
        <button className="DR-cancel-button" onClick={handleClose1}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Input;
