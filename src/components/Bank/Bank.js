import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, Table, Alert, Form } from "react-bootstrap";
import request from "request";
import { TableHead } from "./Style";
import "./bankCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// import minMaxClose from '/path/to/interactive.min.js';

const Input = ({ setShowModal1 }) => {
  const [selectedrowdata, setselectedrowdata] = useState("");

  // Backend Code Startfd from here
  const refsearch = useRef("");
  const refconcode = useRef("");
  const refbankcode = useRef("");
  const refname = useRef("");
  const refswift = useRef("");
  // const refpost = useRef("");
  const refaccount = useRef("");
  const refbranch = useRef("");
  const refcheck = useRef("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [getheadernameapi, setgetheadernameapi] = useState();
  const [countryCode, setCountryCode] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [postOffice, setPostOffice] = useState(false);
  const [accountNo, setAccountNo] = useState("");
  const [branch, setBranch] = useState("");
  const [checkNumber, setCheckNumber] = useState("");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = React.useState(false);
  const [ButtonName, setButtonName] = React.useState("Add");
  const [HeaderData, setHeaderData] = useState();
  const [matchdata, setmatchata] = useState();
  const [disply, setdisply] = useState(false);

  const [showdel, setshowdel] = React.useState(false);
  const [bank, setBank] = React.useState(false);

  const [showModal2, setShowModal2] = React.useState(false);
  const handleClose2 = () => setShowModal2(false);
  const handleShow1 = () => {
    setShowModal2(true);
  };
  const [getvalues, setgetvalues] = useState({});

  // At initial state
  const [input, setInput] = useState({
    Country_code: "",
    setBankCode: "",
    setCountryCode: "",
    Bank_code: "",
    Bank_Name: "",
    BIC_Swift_Code: "",
    Post_office: "",
    Account_no: "",
    Branch_Name: "",
    Next_Check_no: "",
  });

  // const valuechangefunction = (e) => {
  //   var obj = new Map();
  //   // let obj = getvalues
  //   obj[e.target.name] = e.target.value
  //   setgetvalues(obj)
  //   console.log(obj)
  // }

  const resetfunc = (e) => {
    console.log("reset function");

    refsearch.current.value = "";
    refconcode.current.value = "";
    refbankcode.current.value = "";
    refname.current.value = null;
    refswift.current.value = "";
    refaccount.current.value = "";
    refbranch.current.value = null;
    refcheck.current.value = null;

    setSearchNumber("");
    setCountryCode("");
    setBankCode("");
    setBankName("");
    setSwiftCode("");
    setPostOffice(false);
    setdisply(false);
    setAccountNo("");
    setBranch("");
    setCheckNumber("");

    setHeaderData("");

    // countryCode.reset();
    // bankName.reset();
    // accountNo.reset();
    // checkNumber.reset();
    // setCountryCode(this.value='')
    // console.log(getvalues);
    // getvalues.clear();
    // setgetvalues.clear()
    // setgetvalues({});
    // console.log(getvalues);
    // e.target.reset();
    // setSwiftCode().reset()
  };

  // const headersetfunc = () => {

  //   console.log("headersetfunction");
  //   // setSearchNumber(HeaderData && HeaderData.Account_no)
  //   setCountryCode(HeaderData && HeaderData.Country_code)
  //   setBankCode(HeaderData && HeaderData.Bank_code)
  //   setBankName(HeaderData && HeaderData.Bank_Name)
  //   setSwiftCode(HeaderData && HeaderData.BIC_Swift_Code)
  //   setPostOffice(HeaderData && HeaderData.Post_office)
  //   setAccountNo(HeaderData && HeaderData.Account_no)
  //   setBranch(HeaderData && HeaderData.Branch_Name)
  //   setCheckNumber(HeaderData && HeaderData.Next_Check_no)

  // }

  //Submit Patch func
  const Submit_PatchFunc = (e) => {
    // checkaccountnum()
    e.preventDefault();

    if (ButtonName === "Add") {
      handleSubmit();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };

  //check weather acoount number already present or not
  // const checkaccountnum = () => {
  //   var options = {
  //     'method': 'GET',
  //     'url': `http://localhost:3331/bank/${accountNo}`,
  //     'headers': {
  //       'Content-Type': 'application/json'
  //     },
  //   };
  //   request(options, function (error, response) {
  //     const data = response.body;
  //     const finalData = JSON.parse(data)
  //     setmatchata(finalData)
  //     // console.log(finalData);
  //     // console.log(matchdata && matchdata.Account_no);
  //   });
  // }

  // Add data function
  async function handleSubmit(e) {
    const newNote = {
      Country_code: countryCode,
      Bank_code: countryCode,
      Bank_Name: bankName,
      BIC_Swift_Code: swiftCode,
      Post_office: postOffice,
      Account_no: accountNo,
      Branch_Name: branch,
      Next_Check_no: checkNumber,
    };
    // console.log(newNote);

    axios
      .post("http://localhost:3331/bank ", newNote)
      .then((res) => {
        console.log(res);
        setError("");
        setMessage("Data saved successfully");
        alert("Data saved successfully");
        resetfunc(e);

        // e.newNote.clear()
        // e.target.reset();
        // countryCode.reset();
        // bankName.reset();
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        console.log(error.response.data.msg.code);

        if (error.response.data.msg.code == 11000) {
          console.log("duplicate key Error");
          alert(
            "Unable to add data because account# already present. Try again"
          );
          setError(
            "Unable to add data because account# already present. Try again"
          );
          setMessage("");
        } else {
          console.log("other Error");
          setMessage("");
          setError("Unable to add data. Try again");
          alert("Unable to add data. Try again");
        }
      });
    // console.log(newNote);

    // newNote.reset();
  }
  // Update function
  const updataData = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      Country_code: countryCode,
      Bank_code: bankCode,
      Bank_Name: bankName,
      BIC_Swift_Code: swiftCode,
      Post_office: disply,
      Account_no: accountNo,
      Branch_Name: branch,
      Next_Check_no: checkNumber,
    });

    var config = {
      method: "patch",
      url: `http://localhost:3331/bank/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setError("");
        setMessage("Data updated successfully");
        alert("Data updated successfully");
        console.log(JSON.stringify(response.data));
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

    // var request = require('request');
    // var options = {
    //   'method': 'PATCH',
    //   'url': `http://localhost:3331/bank/${SearchNumber}`,
    //   'headers': {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "Country_code": countryCode,
    //     "Bank_code": bankCode,
    //     "Bank_Name": bankName,
    //     "BIC_Swift_Code": swiftCode,
    //     "Post_office": disply,
    //     "Account_no": accountNo,
    //     "Branch_Name": branch,
    //     "Next_Check_no": checkNumber
    //   })

    // };
    // request(options, function (error, response) {
    //   if (SearchNumber == HeaderData.Account_no) {
    //     setMessage("Data updated successfully")
    //     alert("Data updated successfully")
    //   } else {
    //     setError("Enter the correct Accout Number in search box that you want to update")
    //     alert("Enter the correct Accout Number in search box that you want to update")
    //   }

    //   if (error) throw new Error(error);
    // });
    // window.location.reload(false)
  };
  // // input fields onChange functions
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

  //get Header Name
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
        setgetheadernameapi(response.data[7].CustomName);
      })
      .catch(function (error) {});
  };
  // show All data
  useEffect(() => {
    getheadername();
  }, []);
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
    var options = {
      method: "GET",
      url: `http://localhost:3331/bank/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (response.body == "") {
        setMessage("");
        setError("This Account number is not present");
        alert("This Account number is not in present");
      } else {
        const data = response.body;
        const finalData = JSON.parse(data);
        setHeaderData(finalData);

        // headersetfunc()

        // setSearchNumber(HeaderData && HeaderData.Account_no)
        setCountryCode(finalData.Country_code);
        setBankCode(finalData.Bank_code);
        setBankName(finalData.Bank_Name);
        setSwiftCode(finalData.BIC_Swift_Code);
        setPostOffice(finalData.Post_office);
        setAccountNo(finalData.Account_no);
        setBranch(finalData.Branch_Name);
        setCheckNumber(finalData.Next_Check_no);

        // Set buttons
        setButtonName("Update");
        setshowdel(true);

        setError("");
        setMessage("");

        //for set check box value on card
        if (finalData.Post_office === "true") {
          setdisply(true);
        } else {
          setdisply(false);
        }
      }
    });
  };

  //slected row function
  const SelectRow_Func = (item, index) => {
    console.log(item);
    setselectedrowdata(item, index);

    //  setHeaderData(item)
  };

  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(selectedrowdata);

    setSearchNumber(selectedrowdata && selectedrowdata.Account_no);
    setCountryCode(item.Country_code);
    setBankCode(item.Bank_code);
    setBankName(item.Bank_Name);
    setSwiftCode(item.BIC_Swift_Code);
    setPostOffice(item.Post_office);
    setAccountNo(item.Account_no);
    setBranch(item.Branch_Name);
    setCheckNumber(item.Next_Check_no);

    setError("");
    setMessage("");

    setButtonName("Update");
    setshowdel(true);
    setShow(false);
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

  // Delete function
  const DeleteData = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "delete",
      url: `http://localhost:3331/bank/${SearchNumber}`,
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

        // if (SearchNumber == HeaderData.Account_no) {
        //   setMessage("data deleted successfully")
        //   alert("Data deleted successfully")
        // } else {
        //   setError("Enter the correct Accout Number in search box that you want to delete")
        //   alert("Enter the correct Accout Number in search box that you want to delete")
        // }
      })
      .catch(function (error) {
        console.log(error);
        setMessage("");
        setError("Unable to delete data. Try again");
        alert("Unable to delete data. Try again");
      });
  };

  // minMaxClose('element0');

  // let options1 = {
  //   close: false
  // }

  const handleClose_func = () => setShowModal1(false);
  //................End Backend Code...............

  return (
    <>
      {/* <script src="https://cdn.jsdelivr.net/gh/interactiveJS/interactiveJS@v2.0.1/src/individuals/minMaxClose.min.js"></script>
      <script src="/path/to/interactive.min.js"></script> */}

      {/* <Modal contentClassName="modal-OPRJ" show={showModal2} onHide={handleClose2}> */}
      <div class="login-divbank" style={{ outline: "none", border: "none" }}>
        <div class="row">
          <div class="col form-group">
            <div class="lcol">
              <article class="card-body">
                <div class="form-group">
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
                </div>
                <div class="form-group">
                  <Form onSubmit={Submit_PatchFunc}>
                    <h2 style={{ textAlign: "center" }}>{getheadernameapi}</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <br />
                    <div class="form-group">
                      <div class="bank_username">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            Find_FilterFunc();
                          }}
                        >
                          {" "}
                          <svg class="svg-icon1 " viewBox="0 0 20 20">
                            <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                          </svg>
                        </a>
                        <input
                          type="number"
                          className="bank_user-input1"
                          onChange={(e) => {
                            setSearchNumber(e.target.value);
                          }}
                          style={{ marginLeft: "10px" }}
                          placeholder="Account_no"
                          value={SearchNumber}
                          ref={refsearch}
                        />
                      </div>
                      <br />
                    </div>

                    <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                      <Table bordered class="Table1">
                        <thead>
                          <th>#</th>
                          <th>Country Code</th>
                          <th>Bank Code</th>
                          <th>Bank Name</th>
                          <th>BIC/Swift Code</th>
                          <th>Post Office</th>
                          <th>Account No.</th>
                          <th>Branch</th>
                          <th>Next Check Number</th>
                        </thead>
                        <tbody>
                          {
                            <tr>
                              <td></td>
                              <td>
                                <input
                                  type="text"
                                  required
                                  name="Country_code"
                                  className="bank_user-input"
                                  placeholder="Country code"
                                  ref={refconcode}
                                  value={
                                    countryCode ||
                                    (HeaderData && HeaderData.Country_code)
                                  }
                                  onChange={(e) => {
                                    CountryCode_Func(e);
                                  }}
                                ></input>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  required
                                  name="Bank_code"
                                  className="bank_user-input"
                                  placeholder="Bank code"
                                  ref={refbankcode}
                                  value={
                                    bankCode ||
                                    (HeaderData && HeaderData.Bank_code)
                                  }
                                  onChange={(e) => {
                                    BankCode_Func(e);
                                  }}
                                ></input>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  name="Bank_Name"
                                  className="bank_user-input"
                                  placeholder="Bank Name"
                                  ref={refname}
                                  value={
                                    bankName ||
                                    (HeaderData && HeaderData.Bank_Name)
                                  }
                                  onChange={(e) => {
                                    BankName_Func(e);
                                  }}
                                ></input>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  name="BIC_Swift_Code"
                                  className="bank_user-input"
                                  placeholder="Swift Code"
                                  ref={refswift}
                                  value={
                                    swiftCode ||
                                    (HeaderData && HeaderData.BIC_Swift_Code)
                                  }
                                  onChange={(e) => {
                                    SwiftCode_Func(e);
                                  }}
                                ></input>
                              </td>

                              <td>
                                <input
                                  type="checkbox"
                                  name="Post_office"
                                  style={{ align: "center" }}
                                  className="bank_user-input"
                                  value={disply}
                                  checked={disply}
                                  onChange={PostOffice_Func}
                                ></input>{" "}
                              </td>

                              <td>
                                <input
                                  type="number"
                                  required
                                  name="Account_no"
                                  className="bank_user-input"
                                  placeholder="Account no"
                                  ref={refaccount}
                                  value={
                                    accountNo ||
                                    (HeaderData && HeaderData.Account_no)
                                  }
                                  onChange={(e) => {
                                    setAccountNo(e.target.value);
                                  }}
                                ></input>
                              </td>

                              <td>
                                <input
                                  type="text"
                                  name="Branch_Name"
                                  className="bank_user-input"
                                  placeholder="Branch Name"
                                  ref={refbranch}
                                  value={
                                    branch ||
                                    (HeaderData && HeaderData.Branch_Name)
                                  }
                                  onChange={BranchName_Func}
                                ></input>
                              </td>

                              <td>
                                <input
                                  type="number"
                                  name="Next_Check_no"
                                  className="bank_user-input"
                                  placeholder="Next Check"
                                  ref={refcheck}
                                  value={
                                    checkNumber ||
                                    (HeaderData && HeaderData.Next_Check_no)
                                  }
                                  onChange={NextCheck_No_Func}
                                ></input>
                              </td>
                            </tr>
                          }

                          <Modal
                            id="element0"
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
                            <div className="row">
                              {/* <div style={{ background: 'rgb(185 208 227)', width: '40rem', height: 'auto', borderRadius: "1rem" }}> */}
                              <br />
                              <div class="col-lg-6 col-md-6 col-sm-6 modal-table">
                                <div class="form-group">
                                  <h3 style={{ textAlign: "center" }}>
                                    Bank List
                                  </h3>
                                </div>
                                {data && (
                                  <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                                    <div class="form-group">
                                      <Table bordered class="Table1">
                                        <TableHead>
                                          <tr>
                                            <th>#</th>
                                            <th>Bank_Code</th>
                                            <th>Bank_Name</th>
                                            <th>Account No.</th>
                                            <th>Branch_Name</th>
                                          </tr>
                                        </TableHead>
                                        <tbody style={{ textAlign: "center" }}>
                                          {data.map((item, index) => (
                                            <tr
                                              key={`${index}`}
                                              onClick={(e) => {
                                                SelectRow_Func(item);
                                              }}
                                            >
                                              {/* onClick={e => SelectRow_Func(item, index)} */}
                                              <td>{index + 1}</td>
                                              <td style={{ cursor: "pointer" }}>
                                                {item.Bank_code}
                                              </td>
                                              <td style={{ cursor: "pointer" }}>
                                                {item.Bank_Name}
                                              </td>
                                              <td style={{ cursor: "pointer" }}>
                                                {item.Account_no}
                                              </td>
                                              <td style={{ cursor: "pointer" }}>
                                                {item.Branch_Name}
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                        {/* <button className="TaxOkay1-button" onClick={() => { getvaluefromcheckbox(item, index) }}>Choose</button> */}
                                      </Table>
                                    </div>
                                  </div>
                                )}
                                <br />
                                <button
                                  className="DR-add-button"
                                  onClick={getvaluefromcheckbox}
                                >
                                  Choose
                                </button>
                                <button
                                  class="DR-cancel-button"
                                  onClick={handleClose}
                                >
                                  {" "}
                                  Cancel{" "}
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
                              {/* </div> */}
                            </div>
                          </Modal>
                        </tbody>
                      </Table>
                    </div>
                    <br />

                    <br />
                    <button
                      className="DR-add-button"
                      type="submit"
                      style={{ float: "left", marginTop: "-0.12%" }}
                    >
                      {ButtonName}
                    </button>
                  </Form>
                  <button
                    className="DR-cancel-button"
                    onClick={handleClose_func}
                  >
                    Cancel
                  </button>

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
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* </Modal> */}
    </>
  );
};

export default Input;
