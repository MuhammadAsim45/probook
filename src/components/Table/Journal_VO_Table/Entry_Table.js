import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import request from "request";
import { TableHead } from "./Style";
import "./bankCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Input = () => {
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
      <div class="login-divTab" style={{ outline: "none", border: "none" }}>
        <img
          src="/Logo3.png"
          height="80px"
          width="100px"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt="show"
        />
        <h2 style={{ textAlign: "center" }}>
          <b>Table</b>
        </h2>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <table class="Table1">
          <thead>
            <th>#</th>
            <th>journal Vouchers No.</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total (LC)</th>
            <th>User</th>
            <th>Remarks</th>
            {/* <th>Remarks Template</th> */}
            {/* <th>Ref.1</th> */}
            {/* <th>Cheque No</th> */}
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
                    type="Date"
                    name="Control"
                    className="bank_user-input"
                    placeholder=""
                    value={bankName || (HeaderData && HeaderData.Bank_Name)}
                    onChange={BankName_Func}
                  ></input>
                </td>

                <td>
                  <input
                    type="text"
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

                {/* <td><input type="text" name="Remarks_Template"  className="bank_user-input" placeholder="" 
         value={branch || HeaderData&&HeaderData.Branch_Name} onChange={BranchName_Func} ></input></td>  */}

                {/* <td><input type="text" name="Ref.1"  className="bank_user-input" placeholder=""
          value={checkNumber || HeaderData&&HeaderData.Next_Check_no} onChange={ NextCheck_No_Func} ></input></td> 
           <td><input type="number" name="Cheque_No"  className="bank_user-input" placeholder=""
          value={checkNumber || HeaderData&&HeaderData.Next_Check_no} onChange={ NextCheck_No_Func} ></input></td> 
               </tr> */}
              </tr>
            }

            <Modal
              className="modal Modal-big"
              show={show}
              onHide={handleClose}
              size="lg"
            >
              {/* <Modal.Header closeButton>
                <Modal.Title Style={{marginLeft:'10rem'}} id="example-modal-sizes-title-lg">Project List</Modal.Title>
              </Modal.Header>
              <Modal.Body>   
                          */}
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
                <button className="TaxOkay1-button" onClick={handleClose}>
                  Cancel
                </button>
                <br />
                <br />
                {/* </Modal.Body>
              <Modal.Footer>
                <Button variant='danger' onClick={handleClose}>
                  Cancel
          </Button>
              </Modal.Footer> */}
              </div>
            </Modal>
          </tbody>
        </table>
        <br />
        {/* <div class=" bank_username " ><a style={{cursor:'pointer'}} onClick={()=>{Find_FilterFunc()}}> <svg   class="svg-icon1 " viewBox="0 0 20 20">
				<path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
				</svg></a><input type="number" className="bank_user-input1"
         onChange={e => {setSearchNumber(e.target.value)}} style={{marginLeft:'1rem'}} placeholder="" /></div>  */}
        <br />
        <button className="bankOkay-button" onClick={Submit_PatchFunc}>
          {ButtonName}
        </button>
        <button className="bankCan-button" onClick={handleClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Input;
