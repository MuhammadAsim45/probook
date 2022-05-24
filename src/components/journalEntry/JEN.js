import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Alert, Form } from "react-bootstrap";
import request from "request";
import Select from "react-select";
import { TableHead } from "../Dimension/Style";
import TAB from "../Journal_Entry_Table/Entry_Table";
import { Redirect, useHistory } from "react-router-dom";
// import Dropdown from 'react-multilevel-dropdown';
import "./jneCSS.css";
// import Logo1 from './Logo1.png'
const Input = ({ handleClose3, setShowModal3 }) => {
  const [input, setInput] = useState({
    number: "",
    postingDate: "",
    dueDate: "",
    docDate: "",
    remarks: "",
    origin: "",
    trans: "",
    ref: "",
    ref2: "",
    ref3: "",
    Active: "",
  });
  const history = useHistory();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [getheadernameapi, setgetheadernameapi] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [disply, setdisply] = useState(false);
  const [HeaderData, setHeaderData] = useState();
  const [HeaderData1, setHeaderData1] = useState();
  const [getTableData, setgetTableData] = useState();
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [fetchProjectData, setFetchProjectData] = React.useState();
  const [fetchCostCenter, setFetchCostCenter] = React.useState();
  const [addRow, setAddRow] = useState([]);
  const [debitSum, setDebitSum] = useState();
  const [creditSum, setCreditSum] = useState();

  const [getstageid, setgetstageid] = React.useState(0);

  const [data, setData] = useState();
  const [ButtonName, setButtonName] = React.useState("Add");
  const [SearchNumber, setSearchNumber] = React.useState("");
  const [series, setSeries] = useState();
  const [postDate, setPostDate] = useState();
  const [duedate, setDueDate] = useState();
  const [docdate, setDocDate] = useState();
  const [Remark, setRemark] = useState();
  const [Origin, setOrigin] = useState();
  const [Trans, setTrans] = useState();
  const [Project, setProject] = useState();
  const [Ref, setRef] = useState();
  const [Ref2, setRef2] = useState();
  const [Ref3, setRef3] = React.useState();
  // const [disabled, setDisabled] = React.useState(false)

  const [chartAccount, setChartAccount] = useState();
  const [fetchData, setFetchData] = useState();
  const [Ali, setAli] = useState();
  const [Danish, setDanish] = React.useState([
    {
      Type: "",
      chartOfAccount: "",
      BuisnessAccount: "",
    },
  ]);
  const [update, setUpdate] = React.useState(1);
  const [employee1_id, setEmployee1_id] = React.useState();
  const [project1, setProject1] = React.useState();
  const [costCenter1, setCostCenter1] = React.useState();

  const [glAmmount1, setGlAmmount1] = useState();
  const [name1, setName1] = useState();
  const [control, setControl] = useState();
  const [debit, setDebit] = useState();
  const [credit, setCredit] = useState();
  const [remark, setremark] = useState();
  const [employee_id, setEmployee_id] = useState();
  const [ref1, setRef1] = useState();
  const [ref3, setPef3] = useState();
  const [primary, setPrimary] = useState();
  const [number, setNumber] = useState();
  const [nextCheckNo, setNextCheckNo] = useState();
  const [value, setValue] = useState();
  const [costcenter, setCostCenter] = useState();
  const [TableData, setTableData] = useState();
  const [filterData, setFilterData] = React.useState();
  const [SelectedPRDocEntry, setSelectedPRDocEntry] = useState();
  const [body, setBody] = useState();
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [SelectedItems, setSelectedItems] = React.useState([
    {
      Type: "",
      chartOfAccount: "",
      BuisnessAccount: "",
    },
  ]);
  // const [show, setShow] = useState(false);

  const [showModal1, setShowModal1] = React.useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => {
    setShowModal1(true);
  };

  //Submit Patch func
  //  const Submit_PatchFunc = (e) => {

  //   // checkaccountnum()
  //   // e.preventDefault();

  //   if (ButtonName === "Add") {
  //     handleSubmit()

  //   } else if (ButtonName !== "Add") {
  //     updataData()
  //   }

  // }

  const handleSubmit = async () => {
    // let object = Danish
    let DocLines = [];
    let body = {};

    Danish.forEach((element) => {
      DocLines.push({
        Name: element.Name,
        GL_Account: element.GL_Account,
        Control: element.Control,
        Debit: element.Debit,
        Credit: element.Credit,
        Employee_id: element.Employee_id,
        Remark: element.Remark,
        Ref1: element.Ref1,
        Ref3: element.Ref3,
        Project: element.Project,
        CostCenter: element.Cost_Center,
      });
      body = DocLines.filter((el) => {
        return el.Name !== undefined && JSON.stringify(el) !== "{}";
      });
      // var filtered = DocLines.filter(function (el) {
      //   return el != null;
      // });
      // console.log (filtered);
      console.log(body);
    });
    const Data = {
      Number: number,
      Series: primary,
      postingDate: postDate,
      dueDate: duedate,
      docDate: docdate,
      remarks: Remark,
      origin: "30",
      DocumentLines: body,
      trans: Trans,
      project: Project,
      ref: Ref,
      ref2: Ref2,
      ref3: Ref3,
    };
    if (debitSum !== creditSum) {
      alert("Credit and Debit is Not Equal");
    } else {
      axios
        .post("http://localhost:3331/journal-entry", Data)
        .then((res) => {
          // setMessage("Data save successful 👌")
          setError("");
          alert("Data successfully added");
        })
        .catch((error) => {
          // setError("please fill all field")
          setMessage("");
        });
    }

    console.log("Data", Data);
  };
  //Update Func
  // const updataData = () => {
  //   let DocLines=[]
  //   getTableData.forEach(element => {
  //     DocLines.push({
  //       Name: element.Name,
  //       GL_Account: element.GL_Account,
  //       Control: element.Control,
  //       Debit: element.Debit,
  //       Credit: element.Credit,
  //       Employee_id: element.Employee_id,
  //       Remark: element.Remark,
  //       Ref1: element.Ref1,
  //       Ref3: element.Ref3,
  //       Project: element.Project,
  //       CostCenter: element.Cost_Center,

  //     });
  //   })
  //   var axios = require('axios');
  //   var data = JSON.stringify({
  //     "postingDate": postDate,
  //     "dueDate": duedate,
  //     "docDate": docdate,
  //     "remarks": Remark,
  //     "project": Project,
  //     "ref": Ref,
  //     "ref2": Ref2,
  //     "ref3": Ref3,
  //     "DocumentLines": DocLines,

  //   });
  //   if(debitSum!==creditSum){
  //     alert("Credit and Debit is Not Equal")
  //   }else{
  //     var config = {
  //       method: 'patch',
  //       url: `http://localhost:3331/journal-entry/${SearchNumber}`,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       data: data
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         setError("")
  //         setMessage("Data updated successfully")
  //         alert("Data updated successfully")
  //         console.log(JSON.stringify(response.data));
  //         setButtonName("Add")
  //         // resetfunc()
  //       })
  //       .catch(function (error) {
  //         setMessage("")
  //         setError("Unable to update data. Try again")
  //         alert("Unable to update data. Try again")
  //         console.log(error);
  //       });
  //   }

  // }
  //onChange Function
  const Series_Func = (e) => {
    setSeries(e.target.value);
  };
  // const Series_Func1 = (e) => {
  //   setSeries(e.target.value)
  // }
  const DocTypeChange = (e, index, name) => {
    let doclines = Danish;
    doclines[index][name] = e.value;
    doclines[`ùpdate${update + 1}`] = update + 1;
    setUpdate(update + 1);
    setDanish(doclines);
  };
  //get DocType
  const DocTypeChangeGet = (e, index, name) => {
    let doclines = getTableData;
    doclines[index][name] = e.value;
    doclines[`ùpdate${update + 1}`] = update + 1;
    setUpdate(update + 1);
    setgetTableData(doclines);
  };
  const PostDate_Func = (e) => {
    setPostDate(e.target.value);
  };
  const DueDate_Func = (e) => {
    setDueDate(e.target.value);
  };
  const DocDate_Func = (e) => {
    setDocDate(e.target.value);
  };
  const Remarks_Func = (e) => {
    setRemark(e.target.value);
  };
  const Origin_Func = (e) => {
    setOrigin(e.target.value);
  };
  const Trans_Func = (e) => {
    setTrans(e.target.value);
  };
  const Project_Func = (e) => {
    setProject(e.value);
  };
  const Ref_Func = (e) => {
    setRef(e.target.value);
  };
  const Ref2_Func = (e) => {
    setRef2(e.target.value);
  };
  const Ref3_Func = (e) => {
    setRef3(e.target.value);
  };

  // input fields Table onChange functions
  const CountryCode_Func = (e) => {
    setGlAmmount1(e.target.value);
    console.log(e.target.value);
  };
  const BankCode_Func = (e) => {
    setName1(e.target.value);
  };
  const BankName_Func = (e) => {
    setControl(e.target.value);
  };
  const SwiftCode_Func = (e) => {
    setDebit(e.target.value);
  };
  const PostOffice_Func = (e) => {
    setCredit(e.target.value);
  };
  const Account_No_Func = (e) => {
    setremark(e.target.value);
  };
  const BranchName_Func = (e) => {
    // setRemarkTemp(e.target.value)
  };
  const Ref1_Func = (e) => {
    setRef1(e.target.value);
  };
  const NextCheck_No_Func = (e) => {
    setNextCheckNo(e.target.value);
  };

  // const ChartAccount_Func = (e) => {
  //   setChartAccount(e.target.value)
  // }
  const Active_Func = (e) => {
    setIsChecked(!isChecked);
    setIsChecked(e.target.value);
    if (isChecked === "true") {
      setdisply(false);
      setIsChecked("false");
    } else {
      setdisply(true);
      setIsChecked("true");
    }
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
        setgetheadernameapi(response.data[1].CustomName);
      })
      .catch(function (error) {});
  };

  // show All data
  useEffect(() => {
    getheadername();
    getChartOfAccount();
    getprojectData();
    getCostCenterData();
    createNewRow();
    GetMaxTransNo();
    // filter()
  }, []);

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
      url: "http://localhost:3331/journal-entry",
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
    setShow1(true);
  };
  //Get Max Trans No. from Mongodb
  const GetMaxTransNo = () => {
    var axios = require("axios");
    var data = {};
    var config = {
      method: "get",
      url: "http://localhost:3331/Journal-Entry2",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        response.data.forEach((element) => {
          if (element.max) {
            setTrans(element.max + 1);
          }
        });
      })
      .catch(function (error) {});
  };
  //Get Filter data from Mongodb
  const FilterData = () => {
    var options = {
      method: "GET",
      url: `http://localhost:3331/journal-entry/${SearchNumber}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const data = response.body;
      const finalData = JSON.parse(data);
      //for set check box value on card
      if (finalData.origin === 30) {
        setHeaderData1("JE");
      }
      setgetTableData(finalData.DocumentLines);
      setHeaderData(finalData);
    });
  };
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    if (item.origin === 30) {
      setHeaderData1("JE");
    }
    setgetTableData(item.DocumentLines);
    setHeaderData(item);
    setButtonName("Update");
    //for set check box value on card
    // if (item.Active === true) {
    //   setdisply(true)
    // } else {
    //   setdisply(false)
    // }
  };

  //Modal cancel button function
  const handleClose = () => {
    setShow(false);
    setShow1(false);
    setShowModal3(false);
  };

  const getChartOfAccount = () => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:3331/chartOfAccount",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        console.log("zzzzzzzz ", response);
        if (response.data) {
          let ItemsDropDown = [];
          response.data.forEach((element) => {
            if (element.Active === "active") {
              ItemsDropDown.push({
                value: element.GL_Account,
                value1: element.Name,
                label: element.GL_Account + " : " + element.Name,
              });
            }
          });
          setFetchData(ItemsDropDown);
          console.log(ItemsDropDown);
        }
      })
      .catch(function (error) {});
  };
  //Project All data fetch
  const getprojectData = () => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:3331/oprj",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        console.log("zzzzzzzz ", response);
        if (response.data) {
          let ItemsDropDown = [];
          response.data.forEach((element) => {
            ItemsDropDown.push({
              value: element.Code,
              value1: element.Name,
              label: element.Code + " : " + element.Name,
            });
          });
          setFetchProjectData(ItemsDropDown);
          console.log(ItemsDropDown);
        }
      })
      .catch(function (error) {});
  };
  //Cost Center All Data Fetch
  const getCostCenterData = () => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:3331/cost-center",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        console.log("AAAAAAAAa ", response);
        if (response.data) {
          let ItemsDropDown = [];
          response.data.forEach((element) => {
            ItemsDropDown.push({
              value: element.costCenter,
              value1: element.costName,
              label: element.costCenter + " : " + element.costName,
            });
          });
          setFetchCostCenter(ItemsDropDown);
          console.log(ItemsDropDown);
        }
      })
      .catch(function (error) {});
  };
  //Chart Of Account Dropdown Func
  const ItemsDropDownfunc = async (selectedList, index, name) => {
    setAli(selectedList);

    let doclines = Danish;
    doclines[index]["GL_Account"] = selectedList.value;
    doclines[index]["Name"] = selectedList.value1;
    setDanish([...Danish, doclines]);
  };
  //Chart Of Account Get Dropdown Func
  const ItemsDropDownGetfunc = async (selectedList, index, name) => {
    setAli(selectedList);

    let doclines = getTableData;
    doclines[index]["GL_Account"] = selectedList.value;
    // doclines[index]['Name'] = selectedList.value1
    setgetTableData([...Danish, doclines]);
  };

  //BuissAccount Dropdown Func
  const BuisnessAccount_Func = async (selectedList, index, name) => {
    setAli(selectedList);
    let doclines = Danish;
    doclines[index]["BuisnessAccount"] = selectedList.value;
    doclines[index]["Name"] = selectedList.value1;
    // doclines[index]['Sequence'] = getstageid
    setDanish([...Danish, doclines]);
  };
  //BuissAccount Get Dropdown Func
  const BuisnessAccountGet_Func = async (selectedList, index, name) => {
    setAli(selectedList);
    let doclines = getTableData;
    doclines[index]["BuisnessAccount"] = selectedList.value;
    doclines[index]["Name"] = selectedList.value1;
    // doclines[index]['Sequence'] = getstageid
    setgetTableData([...Danish, doclines]);
  };
  const getonchangevalue = (e, index) => {
    console.log(e);
    let obj = Danish;
    obj[index][e.target.name] = e.target.value;
    setDanish(obj);
  };
  const getonchangevalue2 = (e, index) => {
    console.log(getTableData);
    let obj = getTableData;
    obj[index][e.target.name] = e.target.value;
    setgetTableData(obj);
  };
  const valuechangerGet = (e, index) => {
    let obj = getTableData;
    if (e.target.name === "Debit" && e.target.value !== null) {
      obj[index][e.target.name] = e.target.value;
      obj[index]["Creditvaluechangerhook"] = true;
      obj[index]["Debitvaluechangerhook"] = false;
      obj[`ùpdate${update + 1}`] = update + 1;
      setUpdate(update + 1);
      setgetTableData(obj);
      let sum = 0;
      obj.forEach((item) => {
        if (item.Debit) {
          sum = sum + Number(item.Debit);
          setDebitSum(sum);
        }
      });
    }
  };
  const valuechangerGet2 = (e, index) => {
    let obj = getTableData;
    if (e.target.name === "Credit" && e.target.value !== null) {
      obj[index][e.target.name] = e.target.value;
      obj[index]["Debitvaluechangerhook"] = true;
      obj[index]["Creditvaluechangerhook"] = false;
      obj[`ùpdate${update + 1}`] = update + 1;
      setUpdate(update + 1);
      setgetTableData(obj);
      let sum = 0;
      obj.forEach((item) => {
        if (item.Credit) {
          sum = sum + Number(item.Credit);
          setCreditSum(sum);
        }
      });
    }
  };
  const valuechanger = (e, index) => {
    let obj = Danish;
    if (e.target.name === "Debit" && e.target.value !== null) {
      obj[index][e.target.name] = e.target.value;
      obj[index]["Creditvaluechangerhook"] = true;
      obj[index]["Debitvaluechangerhook"] = false;
      obj[`ùpdate${update + 1}`] = update + 1;
      setUpdate(update + 1);
      setDanish(obj);
      let sum = 0;
      obj.forEach((item) => {
        if (item.Debit) {
          sum = sum + Number(item.Debit);
          setDebitSum(sum);
        }
      });
    }
  };
  const valuechanger2 = (e, index) => {
    let obj = Danish;
    if (e.target.name === "Credit" && e.target.value !== null) {
      obj[index][e.target.name] = e.target.value;
      obj[index]["Debitvaluechangerhook"] = true;
      obj[index]["Creditvaluechangerhook"] = false;
      obj[`ùpdate${update + 1}`] = update + 1;
      setUpdate(update + 1);
      setDanish(obj);
      let sum = 0;
      obj.forEach((item) => {
        if (item.Credit) {
          sum = sum + Number(item.Credit);
          setCreditSum(sum);
        }
      });
    }
  };
  const EmplyeeId_Func = (e, index) => {
    let doclines = Danish;
    doclines[index]["Employee_id"] = e.value;
    setDanish(doclines);
  };
  const EmplyeeId_Func2 = (e, index) => {
    let doclines = getTableData;
    doclines[index]["Employee_id"] = e.value;
    setgetTableData([...Danish, doclines]);
  };
  const Project1_Func = (e, index) => {
    let doclines = Danish;
    doclines[index]["Project"] = e.value;
    setDanish(doclines);
  };
  const Project1_Func2 = (e, index) => {
    let doclines = getTableData;
    doclines[index]["Project"] = e.value;
    setgetTableData([...Danish, doclines]);
  };
  const CostCenter1_Func = (e, index) => {
    let doclines = Danish;
    doclines[index]["Cost_Center"] = e.value;
    setDanish(doclines);
  };
  const CostCenter1_Func2 = (e, index) => {
    let doclines = getTableData;
    doclines[index]["Cost_Center"] = e.value;
    setgetTableData([...Danish, doclines]);
  };
  const primary_func = (e) => {
    // console.log(e.value);
    setPrimary(e.target.value);
  };
  const Number_func = (e) => {
    setNumber(e.target.value);
  };

  const createNewRow = () => {
    setAddRow([...addRow, { id: addRow.length + 1 }]);
  };
  const customStyles = {
    control: (base) => ({
      ...base,
      // width: 380,
      height: 35,
      minHeight: 55,
      border: "none",
      background: "none",
      boxShadow: "none !important",
      outline: "none",
      textAlign: "left",
    }),
  };
  const customStyles1 = {
    control: (base) => ({
      ...base,
      height: 10,
      minHeight: 55,
      border: "none",
      background: "none",
      boxShadow: "none !important",
      outline: "none",
    }),
  };

  const EmployeeId = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];
  const DocType = [
    { label: "ChartOfAccount", value: "ChartOfAccount" },
    { label: "BussinessAccount", value: "BussinessAccount" },
  ];
  const bussinessData = [
    { label: "BussinessAccount", value: "BussinessAccount" },
  ];
  return (
    <>
      <div class="login-divbank">
        <div class="row">
          <div class="col form-group">
            <div class="lcol">
              <article class="card-body">
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
                {/* <h1 style={{textAlign:'center'}}><b>Create Accoun</b></h1> */}
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <div class="bank_username">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      Find_FilterFunc();
                    }}
                  >
                    <svg class="svg-icon " viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>
                  </a>
                  <input
                    type="text"
                    className="bank_user-input1"
                    onChange={(e) => {
                      setSearchNumber(e.target.value);
                    }}
                    placeholder="Search"
                    style={{ marginTop: "none" }}
                  />
                </div>
                <br />

                <label className="OPRJ-Label">Series</label>
                <br />
                <div className="JEN1-dropdown">
                  <div class="JEN1-select-style">
                    <select
                      placeholder="Select"
                      name="Primary"
                      style={{ marginTop: "2rem" }}
                      value={HeaderData && HeaderData.Series}
                      onChange={primary_func}
                    >
                      <option>Select..</option>
                      <option class="abc" value="Primary">
                        Primary
                      </option>
                    </select>
                  </div>
                </div>
                <div class="edate">
                  <label className="DR-Label1">Number</label>
                </div>
                <div class="DR_box2">
                  <input
                    type="text"
                    class="JEN_user-input1"
                    placeholder="Number"
                    value={HeaderData && HeaderData.Number}
                    name="Number"
                    onChange={Number_func}
                  />
                </div>
                <br />
                <label className="OPRJ-Label">Project</label>
                <br />
                <div className="JEN2-dropdown">
                  <Select
                    name="Project"
                    options={fetchProjectData}
                    placeholder={HeaderData && HeaderData.project}
                    onChange={(e) => Project_Func(e)}
                    styles={customStyles}
                  />
                </div>
                <div class="edate">
                  <label className="DR-Label1">Posting Date</label>
                </div>
                <div class="DR_box2">
                  <input
                    type="date"
                    class="JEN_user-input1"
                    placeholder=""
                    name="postingDate"
                    value={postDate || (HeaderData && HeaderData.postingDate)}
                    onChange={PostDate_Func}
                  />
                </div>
                <br />
                {/** */}
                <div>
                  <label className="OPRJ-Label">Due Date</label>
                  <br />
                  <div class="DR_box1">
                    <input
                      type="date"
                      class="JEN_user-input1"
                      placeholder=""
                      name="dueDate"
                      value={duedate || (HeaderData && HeaderData.dueDate)}
                      onChange={DueDate_Func}
                    />
                  </div>
                  <div class="edate">
                    <label className="DR-Label1">Doc Date</label>
                  </div>
                  <div class="DR_box2">
                    <input
                      type="date"
                      class="JEN_user-input1"
                      placeholder=""
                      name="docDate"
                      value={docdate || (HeaderData && HeaderData.docDate)}
                      onChange={DocDate_Func}
                    />
                  </div>
                </div>
                {/**/}
                {/* <div>

                  <br />
                  <div class="edate3">
                    <label className="OPRJ-Label3"><b>Due Date</b></label>
                  </div>
                  <div class="DR_box4">
                    <input type="date" class="JEN_user-input1" placeholder="" name="dueDate" value={duedate || HeaderData && HeaderData.dueDate} onChange={DueDate_Func} />
                  </div>
                  <div class="edate4">
                    <label className="OPRJ-Label4"><b>DocDate</b></label>
                  </div>
                  <div class="DR_box5" >
                    <input type="date" class="JEN_user-input1" placeholder="" name="docDate" value={docdate || HeaderData && HeaderData.docDate} onChange={DocDate_Func} />
                  </div>
                </div> */}
                <br />
                <div>
                  <label className="OPRJ-Label">Origin No.</label>
                  <br />
                  <div class="DR_box1">
                    <input
                      type="text"
                      class="JEN_user-input1"
                      readOnly
                      name="origin"
                      value={HeaderData1}
                      defaultValue="JE"
                      onChange={Origin_Func}
                    />
                  </div>
                  <div class="edate">
                    <label className="DR-Label1">Trans.No</label>
                  </div>
                  <div class="DR_box2">
                    <input
                      type="number"
                      class="JEN_user-input1"
                      readOnly
                      name="trans"
                      value={Trans}
                      onChange={Trans_Func}
                    />
                  </div>
                </div>
                <br />
                {/** */}
                <div>
                  <label className="OPRJ-Label">Remarks</label>
                  <br />
                  <div class="DR_box1">
                    <input
                      type="text"
                      class="JEN_user-input1"
                      placeholder="Remarks"
                      name="remarks"
                      value={Remark || (HeaderData && HeaderData.remarks)}
                      onChange={Remarks_Func}
                    />
                  </div>
                  <div class="edate">
                    <label className="DR-Label1">Ref.1</label>
                  </div>
                  <div class="DR_box2">
                    <input
                      type="text"
                      class="JEN_user-input1"
                      onChange={Ref_Func}
                      placeholder="Ref"
                      name="ref"
                      value={Ref || (HeaderData && HeaderData.ref)}
                    />
                  </div>
                </div>
                <div>
                  <br />
                  <label className="OPRJ-Label">Ref.2</label>
                  <br />
                  <div class="DR_box1">
                    <input
                      type="text"
                      class="JEN_user-input1"
                      onChange={Ref2_Func}
                      placeholder="Ref 2"
                      name="ref2"
                      value={Ref2 || (HeaderData && HeaderData.ref2)}
                    />
                  </div>
                  <div class="edate">
                    <label className="DR-Label1">Ref.3</label>
                  </div>
                  <div class="DR_box2">
                    <input
                      type="text"
                      class="JEN_user-input1"
                      onChange={Ref3_Func}
                      placeholder="Ref 3"
                      name="ref3"
                      value={Ref3 || (HeaderData && HeaderData.ref3)}
                    />
                  </div>
                </div>

                <br />
                <br />
                <Modal
                  className="modal"
                  show={show1}
                  onHide={handleClose}
                  class="Modal-big"
                  size="lg"
                >
                  {/* <div style={{ background: 'rgb(185 208 227)', width: '40rem', height: 'auto', borderRadius: "1rem" }} > */}
                  <div className="row">
                    {/* <div class="form-group"> */}
                    <br />
                    <div class="col-lg-6 col-md-6 col-sm-6 modal-table">
                      <h3 style={{ textAlign: "center" }}>Journal Entry</h3>
                      {data && (
                        <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                          <div class="form-group">
                            <Table class="Table1">
                              <TableHead>
                                <tr>
                                  <th>#</th>
                                  <th>Remark</th>
                                  <th>Origin</th>
                                  <th>Trans.No</th>
                                  <th>Number</th>
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
                                    <td>{item.remarks}</td>
                                    <td>{item.origin}</td>
                                    <td>{item.trans}</td>
                                    <td>{item.number}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      )}
                      <br />
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
                {getTableData ? (
                  <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                    <div class="form-group">
                      <Table bordered class="Table1">
                        <TableHead>
                          <tr>
                            <th>#</th>
                            <th>Doc_Type</th>
                            <th>G/L Account/BP Code</th>
                            <th>G/L Name /BP Name</th>
                            <th>Conntrol</th>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Employee Id</th>
                            <th>Remarks</th>
                            <th>Ref. 1</th>
                            <th>Ref. 3</th>
                            <th>Project</th>
                            <th>Cost Center</th>
                          </tr>
                        </TableHead>

                        <tbody>
                          {getTableData.map((element, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>
                                <div style={{ width: "9rem", height: "auto" }}>
                                  <Select
                                    // placeholder={element.}
                                    name="DocType"
                                    // value={docdate || getTableData && getTableData.DocType}
                                    onChange={(e) => {
                                      DocTypeChangeGet(e, index, "Type");
                                    }}
                                    options={[
                                      {
                                        label: "ChartOfAccount",
                                        value: "ChartOfAccount",
                                      },
                                      {
                                        label: "BussinessAccount",
                                        value: "BussinessAccount",
                                      },
                                    ]}
                                    styles={customStyles1}
                                  />
                                </div>
                              </td>
                              <td>
                                <div
                                  style={{ width: "9.5rem", height: "auto" }}
                                >
                                  <div
                                    style={{ width: "9.5rem", height: "auto" }}
                                  >
                                    <Select
                                      name="ChartOfAccount"
                                      isDisabled
                                      placeholder={element.GL_Account}
                                      // placeholder={getTableData && getTableData.ChartOfAccount}
                                      onChange={(e) => {
                                        ItemsDropDownGetfunc(
                                          e,
                                          index,
                                          "ChartOfAccount"
                                        );
                                      }}
                                      options={fetchData}
                                      styles={customStyles1}

                                      // styles={customStyles}

                                      // placeholder={getTableData && getTableData.GL_Account}
                                    />
                                  </div>
                                </div>
                              </td>

                              <div style={{ align: "center", width: "10rem" }}>
                                <td
                                  style={{
                                    align: "center",
                                    width: "10rem",
                                    height: "4rem",
                                  }}
                                >
                                  {element.Name}
                                </td>
                              </div>
                              <td>
                                <input
                                  type="text"
                                  name="Control"
                                  style={{ align: "center", width: "9rem" }}
                                  className="bank_user-input"
                                  onChange={(e) => getonchangevalue2(e, index)}
                                  readOnly
                                  value={element.Control}
                                />
                              </td>
                              <td>
                                <input
                                  id="debit_Field"
                                  type="number"
                                  readOnly
                                  name="Debit"
                                  className="bank_user-input"
                                  value={element.Debit}
                                  style={{ align: "center", width: "9rem" }}
                                  onChange={(e) => valuechangerGet(e, index)}
                                />
                              </td>
                              <td>
                                <input
                                  id="credit_Field"
                                  type="text"
                                  readOnly
                                  name="Credit"
                                  style={{ align: "center", width: "9rem" }}
                                  className="bank_user-input"
                                  onChange={(e) => valuechangerGet2(e, index)}
                                  value={element.Credit}
                                />
                              </td>
                              <td>
                                {" "}
                                <div style={{ width: "9rem", height: "auto" }}>
                                  <Select
                                    name="Employee_Id"
                                    isDisabled
                                    placeholder={element.Employee_id}
                                    onChange={(e) => EmplyeeId_Func2(e, index)}
                                    // value={employee_id}
                                    // onChange={e => { ItemsDropDownfunc(e,index) }}
                                    options={EmployeeId}
                                    styles={customStyles1}
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="Remark"
                                  readOnly
                                  className="bank_user-input"
                                  style={{ align: "center", width: "9rem" }}
                                  onChange={(e) => getonchangevalue2(e, index)}
                                  value={element.Remark}
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  readOnly
                                  name="Ref1"
                                  className="bank_user-input"
                                  onChange={(e) => getonchangevalue2(e, index)}
                                  value={element.Ref1}
                                  style={{ align: "center", width: "9rem" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  readOnly
                                  name="Ref3"
                                  className="bank_user-input"
                                  onChange={(e) => getonchangevalue2(e, index)}
                                  value={element.Ref3}
                                  style={{ align: "center", width: "9rem" }}
                                />
                              </td>

                              <td>
                                <div style={{ width: "9rem", height: "auto" }}>
                                  <Select
                                    name="Project"
                                    isDisabled
                                    options={fetchProjectData}
                                    placeholder={element.Project}
                                    onChange={(e) => Project1_Func2(e, index)}
                                    styles={customStyles1}
                                  />
                                </div>
                              </td>
                              <td>
                                {" "}
                                <div style={{ width: "9rem", height: "auto" }}>
                                  <Select
                                    isDisabled
                                    name="Cost_Center"
                                    options={fetchCostCenter}
                                    placeholder={element.CostCenter}
                                    onChange={(e) =>
                                      CostCenter1_Func2(e, index)
                                    }
                                    styles={customStyles1}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                ) : (
                  <>
                    <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                      <div class="form-group">
                        <Table bordered class="Table1">
                          <TableHead>
                            <tr>
                              <th>#</th>
                              <th>Doc_Type</th>
                              <th>G/L Account/BP Code</th>
                              <th>G/L Name /BP Name</th>
                              <th>Conntrol</th>
                              <th>Debit</th>
                              <th>Credit</th>
                              <th>Employee Id</th>
                              <th>Remarks</th>
                              <th>Ref. 1</th>
                              <th>Ref. 3</th>
                              <th>Project</th>
                              <th>Cost Center</th>
                            </tr>
                          </TableHead>
                          {/* {addRow.map((item, index1) => ( */}

                          <tbody>
                            {Danish &&
                              Danish.map((element, index) => (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>
                                    <div
                                      style={{ width: "9rem", height: "auto" }}
                                    >
                                      <Select
                                        placeholder="Select"
                                        // name="DocType"
                                        // value={docdate || getTableData && getTableData.DocType}
                                        onChange={(e) => {
                                          DocTypeChange(e, index, "Type");
                                        }}
                                        styles={customStyles1}
                                        options={[
                                          {
                                            label: "ChartOfAccount",
                                            value: "ChartOfAccount",
                                          },
                                          {
                                            label: "BussinessAccount",
                                            value: "BussinessAccount",
                                          },
                                        ]}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      style={{
                                        width: "9.5rem",
                                        height: "auto",
                                      }}
                                    >
                                      {element.Type === "ChartOfAccount" ? (
                                        <div
                                          style={{
                                            width: "9.5rem",
                                            height: "auto",
                                          }}
                                        >
                                          <Select
                                            name="ChartOfAccount"
                                            placeholder={
                                              getTableData &&
                                              getTableData.ChartOfAccount
                                            }
                                            onChange={(e) => {
                                              ItemsDropDownfunc(
                                                e,
                                                index,
                                                "ChartOfAccount"
                                              );
                                            }}
                                            options={fetchData}
                                            styles={customStyles1}

                                            // placeholder={getTableData && getTableData.GL_Account}
                                          />
                                        </div>
                                      ) : null}

                                      {element.Type === "BussinessAccount" ? (
                                        <div
                                          style={{
                                            width: "9.5rem",
                                            height: "auto",
                                          }}
                                        >
                                          <Select
                                            name="BussinessAccount"
                                            placeholder={
                                              getTableData &&
                                              getTableData.BussinessAccount
                                            }
                                            options={bussinessData}
                                            onChange={(e) => {
                                              BuisnessAccount_Func(
                                                e,
                                                index,
                                                "BussinessAccount"
                                              );
                                            }}
                                            styles={customStyles1}
                                          />
                                        </div>
                                      ) : null}
                                    </div>
                                  </td>

                                  <div
                                    style={{ align: "center", width: "10rem" }}
                                  >
                                    <td
                                      style={{
                                        align: "center",
                                        width: "10rem",
                                        height: "4rem",
                                      }}
                                    >
                                      {element.Name}
                                    </td>
                                  </div>
                                  <td>
                                    <input
                                      type="text"
                                      name="Control"
                                      style={{ align: "center", width: "9rem" }}
                                      className="bank_user-input"
                                      onChange={(e) =>
                                        getonchangevalue(e, index)
                                      }
                                      value={
                                        getTableData && getTableData.Control
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      id="debit_Field"
                                      type="number"
                                      readOnly={element.Debitvaluechangerhook}
                                      name="Debit"
                                      className="bank_user-input"
                                      value={getTableData && getTableData.Debit}
                                      style={{ align: "center", width: "9rem" }}
                                      onChange={(e) => valuechanger(e, index)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      id="credit_Field"
                                      type="text"
                                      readOnly={element.Creditvaluechangerhook}
                                      name="Credit"
                                      style={{ align: "center", width: "9rem" }}
                                      className="bank_user-input"
                                      // value={credit}
                                      onChange={(e) => valuechanger2(e, index)}
                                      value={
                                        credit ||
                                        (getTableData && getTableData.Credit)
                                      }
                                    />
                                  </td>
                                  <td>
                                    {" "}
                                    <div
                                      style={{ width: "9rem", height: "auto" }}
                                    >
                                      <Select
                                        name="Employee_Id"
                                        placeholder={
                                          getTableData &&
                                          getTableData.Employee_id
                                        }
                                        onChange={(e) =>
                                          EmplyeeId_Func(e, index)
                                        }
                                        // value={employee_id}
                                        // onChange={e => { ItemsDropDownfunc(e,index) }}
                                        options={EmployeeId}
                                        styles={customStyles1}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="Remark"
                                      className="bank_user-input"
                                      value={
                                        remark ||
                                        (getTableData && getTableData.Remark)
                                      }
                                      style={{ align: "center", width: "9rem" }}
                                      onChange={(e) =>
                                        getonchangevalue(e, index)
                                      }
                                    />
                                  </td>

                                  <td>
                                    <input
                                      type="text"
                                      name="Ref1"
                                      className="bank_user-input"
                                      value={
                                        ref1 ||
                                        (getTableData && getTableData.Ref1)
                                      }
                                      onChange={(e) =>
                                        getonchangevalue(e, index)
                                      }
                                      // value={getTableData && getTableData.Ref1}
                                      style={{ align: "center", width: "9rem" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      name="Ref3"
                                      className="bank_user-input"
                                      value={
                                        ref3 ||
                                        (getTableData && getTableData.Ref3)
                                      }
                                      onChange={(e) =>
                                        getonchangevalue(e, index)
                                      }
                                      // value={getTableData && getTableData.Ref3}
                                      style={{ align: "center", width: "9rem" }}
                                    />
                                  </td>
                                  <td>
                                    {" "}
                                    <div
                                      style={{ width: "9rem", height: "auto" }}
                                    >
                                      <Select
                                        name="Project"
                                        options={fetchProjectData}
                                        placeholder={
                                          getTableData && getTableData.Project
                                        }
                                        onChange={(e) =>
                                          Project1_Func(e, index)
                                        }
                                        styles={customStyles1}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    {" "}
                                    <div
                                      style={{ width: "9rem", height: "auto" }}
                                    >
                                      <Select
                                        name="Cost_Center"
                                        options={fetchCostCenter}
                                        placeholder={
                                          getTableData &&
                                          getTableData.CostCenter
                                        }
                                        onChange={(e) =>
                                          CostCenter1_Func(e, index)
                                        }
                                        styles={customStyles1}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </>
                )}

                <br />

                <button
                  class="DR-add-button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Add
                </button>
                <button class="DR-cancel-button" onClick={handleClose}>
                  Cancel
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal className="modal" show={show} onHide={handleClose} className="Modal-big" size="lg">
        <div style={{ background: 'rgb(185 208 227)', marginLeft: '-12rem', width: '73rem', height: 'auto', borderRadius: "1rem" }} >
          <br />
          <h3 style={{ textAlign: 'center' }}>Entry_Table</h3>
          {Danish && (
            <Table bordered responsive>
              <TableHead >
                <tr>
                  <th>#</th>
                  <th>G/L Account/BP Code</th>
                  <th>G/L Name /BP Name</th>
                  <th>Conntrol</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Employee Id</th>
                  <th>Remarks</th>
                  <th>Ref. 1</th>
                  <th>Ref. 3</th>
                  <th>Project</th>
                  <th>Cost Center</th>
                </tr>
              </TableHead>
              <tbody>
                {Danish.map((item, index) => (
                  <tr
                    key={`${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>  
                      <input type="text" name="GL_Account" className="bank_user-input" value={item.value}
                        onChange={e => getonchangevalue(e)} />
                    </td>
                    <td><input type="text" name="Name" className="bank_user-input" value={item.value1}
                      onChange={e => getonchangevalue(e)} /></td>
                    <td><input type="text" name="Control" className="bank_user-input" value={item.Control || null}
                      onChange={e => getonchangevalue(e, index)} /></td>
                    <td><input type="number" name="Debit" className="bank_user-input" value={debit} onChange={e => getonchangevalue(e, index)}
                    /></td>
                    <td><input type="text" name="Credit" style={{ align: 'center' }} className="bank_user-input" value={credit} onChange={e => getonchangevalue(e, index)}
                    /></td>
                    <td> <div style={{ width: '9rem', height: 'auto' }}>
                      <Select
                        name="Employee_Id"
                        onChange={EmplyeeId_Func}
                        value={employee_id}
                        // onChange={e => { ItemsDropDownfunc(e) }}
                        options={EmployeeId}
                      />
                    </div></td>
                    <td><input type="text" name="Remark" className="bank_user-input" value={remark} onChange={e => getonchangevalue(e, index)}
                    /></td>

                    <td><input type="text" name="Ref1" className="bank_user-input" value={ref1} onChange={e => getonchangevalue(e, index)}
                    /></td>
                    <td><input type="number" name="Ref3" className="bank_user-input" value={ref3} onChange={e => getonchangevalue(e, index)}
                    /></td>

                    <td> <div style={{ width: '9rem', height: 'auto' }}>
                      <Select
                        name="Project"
                        options={fetchProjectData}
                        value={proj}
                        onChange={e => Project1_Func(e, index)}
                      />
                    </div></td>
                    <td> <div style={{ width: '9rem', height: 'auto' }}>
                      <Select
                        name="Cost_Center"
                        options={fetchCostCenter}
                        value={costcenter}
                        onChange={e => CostCenter1_Func(e, index)}
                      />
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <div style={{ marginLeft: '2rem' }}>
            <button class="JEN-add-button" onClick={() => { Submit_PatchFunc() }}>{ButtonName}</button>
            <button class="JEN-cancel-button" onClick={handleClose}>Cancel</button>
          </div>
          <br />
          <br />
        </div>
      </Modal> */}
    </>
  );
};
export default Input;
