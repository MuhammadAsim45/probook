/* eslint-disable react/jsx-no-duplicate-props */
import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Table, Alert } from "react-bootstrap";
import request from "request";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import { TableHead } from "../Dimension/Style";
import { Redirect, useHistory } from "react-router-dom";
// import TAB1 from '../Table/Journal_VO_Table/Entry_Table'
// import TAB2 from '../Table/Journal_VO_Table2/Entry_Table'
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarmIcon';
// import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Scrollbars } from "react-custom-scrollbars";
// import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscanIcon';
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import "./index.css";

const Journal = ({ setShowModal10 }) => {
  //hooks from JE
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
  const [getheadernameapi1, setgetheadernameapi1] = useState();
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
  const [postDate, setPostDate] = useState("");
  const [duedate, setDueDate] = useState();
  const [docdate, setDocDate] = useState();
  const [Remark, setRemark] = useState("");
  const [Origin, setOrigin] = useState();
  const [Trans, setTrans] = useState("");
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
  const [afterTotal, setAfterTotal] = useState();
  const [ref1, setRef1] = useState();
  const [ref3, setPef3] = useState();
  const [primary, setPrimary] = useState();
  const [number, setNumber] = useState();
  const [nextCheckNo, setNextCheckNo] = useState();
  const [SelectedItems, setSelectedItems] = React.useState([
    {
      Type: "",
      chartOfAccount: "",
      BuisnessAccount: "",
    },
  ]);

  //JE Modal cancel button function
  const handleClose = () => {
    setShow(false);
    setShow1(false);
  };

  //JV hooks
  const [getheadernameapi, setgetheadernameapi] = useState();

  const [show111, setShow111] = React.useState(false);
  const [show1112, setShow1112] = React.useState(false);

  const handleClose111 = () => setShow111(false);
  const handleClose1112 = () => setShow1112(false);

  const [inputjvnum, setinputjvnum] = useState("");
  const [jvnumber, setjvnumber] = useState("");
  const [remarks, setremarks] = useState("");
  const [trans, settrans] = useState("");
  const [date, setdate] = useState("");
  const [jvdata, setjvdata] = useState();
  const [totalLC, setTotalLC] = useState();
  const [selectedRowData, setSelectedRowData] = useState();
  const [rowData, setRowData] = useState("");
  const [extraRow, setExtraRow] = useState(false);
  const [exsistPostDate, setExsistPostDate] = useState("");
  const [onSearch, setOnSearch] = useState("");
  //handle hook
  const handleClose10 = () => {
    setShowModal10(false);
  };

  //Submit Patch func
  const Submit_PatchFunc = (e) => {
    if (ButtonName === "Add") {
      jvsubmit();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };

  useEffect(() => {
    getheadername();
    getallfrommongo();

    getheadername1();
    getChartOfAccount();
    getprojectData();
    getCostCenterData();
    createNewRow();
  }, []);

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
        setgetheadernameapi(response.data[10].CustomName);
      })
      .catch(function (error) {});
  };

  const getheadername1 = () => {
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
        setgetheadernameapi1(response.data[1].CustomName);
      })
      .catch(function (error) {});
  };

  //get all rows of upper form from mongo
  const getallfrommongo = () => {
    var axios = require("axios");
    var data = {};
    var config = {
      method: "get",
      url: "http://localhost:3331/JV",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setjvdata(response.data);
      })
      .catch(function (error) {});
  };

  const newJEentry = () => {
    setExtraRow(false);
    setSelectedRowData("");
    setRowData("");
    var axios = require("axios");
    var data = {};
    var config = {
      method: "get",
      url: "http://localhost:3331/JVmax",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let finalData = response.data;
        if (response.data == "") {
          setinputjvnum("1");
        } else {
          finalData.forEach((element) => {
            setinputjvnum(element.max + 1);
          });
        }

        setShow111(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const existJEentry = () => {
    // Add3()
    setButtonName("Update");
    setShow111(true);
    setExtraRow(true);
    // setShow1112(true)
  };

  const JEset = () => {
    setjvnumber(inputjvnum);
    setremarks(Remark);
    settrans(Trans);
    setdate(postDate);
    if (debitSum !== creditSum) {
      alert("Credit and Debit is Not Equal");
    } else {
      setTotalLC(debitSum);
      handleClose111();
      Add3();
    }
  };
  const JEset1 = () => {
    setjvnumber(inputjvnum);
    setremarks(Remark);
    settrans(Trans);
    setdate(postDate);
    if (debitSum !== creditSum) {
      alert("Credit and Debit is Not Equal");
    } else {
      setTotalLC(debitSum);
      handleClose111();
    }
  };
  async function jvsubmit(e) {
    const Data = {
      JVNumber: jvnumber,
      Remarks: remarks,
      Trans: trans,
      Date: date,
      TotalLC: totalLC,
    };
    axios
      .post("http://localhost:3331/JV", Data)
      .then((res) => {
        console.log(res);
        alert("Data saved successfully");
        handleClose111();
        getallfrommongo();
        resetfunction();
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        alert("Unable to add data. Try again");
      });
  }

  // Update function
  const updataData = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      TotalLC: afterTotal,
    });

    var config = {
      method: "patch",
      url: `http://localhost:3331/JV/${SearchNumber}`,
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
      })
      .catch(function (error) {
        setMessage("");
        setError("Unable to update data. Try again");
        alert("Unable to update data. Try again");
        console.log(error);
      });
  };

  // Function On All and Filter Button
  const Find_FilterFunc = async () => {
    if (SearchNumber == "") {
      // AllData()
    } else {
      // FilterData()
    }
  };

  const resetfunction = (e) => {
    setjvnumber("");
    setremarks("");
    settrans("");
    setdate("");
    setTotalLC("");
    setinputjvnum("");
    setRemark("");
    setTrans("");
    setPostDate("");
  };

  //JE on changes
  //onChange Function
  const Series_Func = (e) => {
    setSeries(e.target.value);
  };

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
  const PostDate2_Func = (e) => {
    setExsistPostDate(e.target.value);
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

  //JE functions
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

  const SelectRow_Func = (item, index) => {
    // setFakeTotalLC(item.TotalLC);
    console.log(index);
    setOnSearch(item.JVNumber);
    setSelectedRowData(item, index);
    setRowData([item]);
  };

  const customStyles = {
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

  const Add3 = () => {
    console.log("selectedRowData", selectedRowData);
    let obj = selectedRowData;
    obj["TotalLC1"] = Number(obj["TotalLC"]) + debitSum;

    console.log(obj);
    setAfterTotal(obj["TotalLC1"]);
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
                {/* <div class="JR_field"> */}
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

                <label style={{ marginLeft: "0.5rem" }}>
                  <b>Find</b>
                </label>
                <br />
                <div class="JR-username ">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      Find_FilterFunc();
                    }}
                  >
                    {" "}
                    <svg class="svg-JR" viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>
                  </a>
                  <input
                    type="number"
                    onChange={(e) => {
                      setSearchNumber(e.target.value);
                    }}
                    value={SearchNumber}
                    className="JR-user-input2"
                    style={{ marginLeft: "1rem" }}
                    placeholder=""
                  />
                </div>
                <br />
                <br />
                <br />

                {/* <button onClick={e=>{Add3()}}>Add</button> */}
                <div>
                  {jvdata && (
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>Journal Voucher No.</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Total(LC)</th>
                          <th>User</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jvdata.map((item, index) => (
                          <tr
                            key={`${index}`}
                            onClick={(e) => SelectRow_Func(item, index)}
                          >
                            <td> {item.JVNumber} </td>
                            <td> </td>
                            <td> {item.Date} </td>

                            <td>
                              {item.TotalLC1 ? item.TotalLC1 : item.TotalLC}{" "}
                            </td>

                            <td> </td>
                            <td>{item.Remarks}</td>
                            {/* <td>{item.trans}</td> */}
                          </tr>
                        ))}
                        {rowData ? (
                          <tr>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                          </tr>
                        ) : (
                          <tr>
                            <td>
                              {" "}
                              <input
                                className="JV_fields"
                                value={jvnumber}
                              ></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input
                                className="JV_fields"
                                value={date}
                              ></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input
                                className="JV_fields"
                                value={totalLC}
                              ></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input className="JV_fields"></input>{" "}
                            </td>
                            <td>
                              {" "}
                              <input
                                className="JV_fields"
                                value={remarks}
                              ></input>{" "}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  )}

                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Journal Voucher No.</th>
                        <th>Trans.No.</th>
                        <th>Status</th>
                        <th>Total(LC)</th>
                        <th>Total(PC)</th>
                        <th>Branch</th>
                        <th>Remarks</th>
                        <th>Cost Center Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rowData ? (
                        <>
                          {rowData &&
                            rowData.map((element) => (
                              <>
                                <tr>
                                  <td>
                                    {" "}
                                    <input
                                      className="JV_fields"
                                      value={element.JVNumber}
                                    ></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input
                                      className="JV_fields"
                                      value={element.Trans}
                                    ></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input className="JV_fields"></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input
                                      className="JV_fields"
                                      value={element.TotalLC}
                                    ></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input className="JV_fields"></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input className="JV_fields"></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input
                                      className="JV_fields"
                                      value={element.Remarks}
                                    ></input>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <input className="JV_fields"></input>{" "}
                                  </td>
                                </tr>
                              </>
                            ))}
                        </>
                      ) : (
                        <tr>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={jvnumber}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={trans}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={totalLC}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={remarks}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                        </tr>
                      )}

                      {extraRow ? (
                        <tr>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={jvnumber}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={trans}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={totalLC}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input
                              className="JV_fields"
                              value={remarks}
                            ></input>{" "}
                          </td>
                          <td>
                            {" "}
                            <input className="JV_fields"></input>{" "}
                          </td>
                        </tr>
                      ) : null}

                      <tr>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                        <td>
                          {" "}
                          <input className="JV_fields"></input>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <br />

                <br />

                {/* new JE to voucher */}
                {rowData ? (
                  <Modal
                    className="modal Modal-big"
                    show={show111}
                    onHide={handleClose111}
                    size="lg"
                  >
                    <div
                      class="login-divbank111"
                      style={{ border: "1px solid white" }}
                    >
                      {/* <div class="row">
                      <div class="form-group">
                        <div class="lcol">
                          <artical class="cord-body"> */}
                      <div class="JEN_fields">
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

                        <h3 style={{ textAlign: "center" }}>
                          <b>{getheadernameapi1}</b>
                        </h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <label>
                          <b>Journal Voucher Number</b>
                        </label>
                        {rowData &&
                          rowData.map((element, index) => (
                            <>
                              <div class="JEN_username11">
                                .
                                <input
                                  type="number"
                                  class="JEN_user-input1"
                                  readOnly
                                  style={{
                                    width: "10rem",
                                    marginBottom: "11rem",
                                  }}
                                  value={element.JVNumber}
                                  name="InputJVnum"
                                />
                              </div>
                              <br />

                              <div>
                                <label style={{ marginLeft: "0.5rem" }}>
                                  <b>Series</b>
                                </label>
                                <label style={{ marginLeft: "18rem" }}>
                                  <b>Number</b>
                                </label>
                                <label style={{ marginLeft: "17rem" }}>
                                  <b>Project</b>
                                </label>
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
                                <div class="je_na2">
                                  <input
                                    type="text"
                                    class="JEN_user-input1"
                                    placeholder="Number"
                                    value={HeaderData && HeaderData.Number}
                                    name="Number"
                                    onChange={Number_func}
                                  />
                                </div>

                                <div
                                  className="JEN1-dropdown"
                                  style={{ marginLeft: "1rem" }}
                                >
                                  <Select
                                    name="Project"
                                    options={fetchProjectData}
                                    placeholder={
                                      HeaderData && HeaderData.project
                                    }
                                    onChange={(e) => Project_Func(e)}
                                    // styles={customStyles}
                                  />
                                </div>
                              </div>
                              <div>
                                <br />
                                <br />
                                <br />
                                <label style={{ marginLeft: "0.5rem" }}>
                                  <b>Posting Date</b>
                                </label>
                                <label style={{ marginLeft: "14.7rem" }}>
                                  <b>Due Date</b>
                                </label>
                                <label style={{ marginLeft: "16.5rem" }}>
                                  <b>DocDate</b>
                                </label>
                                <br />
                                <div class="je_na1">
                                  <input
                                    type="date"
                                    class="JEN_user-input1"
                                    name="postingDate"
                                    onChange={PostDate2_Func}
                                  />
                                </div>
                                <div class="je_na2">
                                  <input
                                    type="date"
                                    class="JEN_user-input1"
                                    placeholder=""
                                    name="dueDate"
                                    value={
                                      duedate ||
                                      (HeaderData && HeaderData.dueDate)
                                    }
                                    onChange={DueDate_Func}
                                  />
                                </div>
                                <div class="je_na3">
                                  <input
                                    type="date"
                                    class="JEN_user-input1"
                                    placeholder=""
                                    name="docDate"
                                    value={
                                      docdate ||
                                      (HeaderData && HeaderData.docDate)
                                    }
                                    onChange={DocDate_Func}
                                  />
                                </div>
                              </div>
                              <br />
                              <br />
                              <br />
                              <div>
                                <label style={{ marginLeft: "0.5rem" }}>
                                  <b>Origin No.</b>
                                </label>{" "}
                                <label style={{ marginLeft: "15.50rem" }}>
                                  <b>Trans.No</b>
                                </label>{" "}
                                <label style={{ marginLeft: "16.50rem" }}>
                                  <b>Remarks</b>
                                </label>
                                <br />
                                <div class="je_na1">
                                  <input
                                    type="text"
                                    class="JEN_user-input1"
                                    readOnly
                                    name="origin"
                                    value={HeaderData1}
                                    onChange={Origin_Func}
                                  />
                                </div>
                                <div class="je_na2">
                                  <input
                                    type="number"
                                    class="JEN_user-input1"
                                    placeholder="Trans No."
                                    name="trans"
                                    onChange={Trans_Func}
                                  />
                                </div>
                                <div
                                  class=" JEN_box1"
                                  style={{ marginLeft: "1rem" }}
                                >
                                  <input
                                    type="text"
                                    class="JEN_user-input1"
                                    placeholder="Remarks"
                                    name="remarks"
                                    onChange={Remarks_Func}
                                  />
                                </div>
                                <br />
                              </div>
                              <br />
                              <br />
                              <div>
                                <div>
                                  <label style={{ marginLeft: "0.8rem" }}>
                                    <b>Ref.1</b>
                                  </label>
                                  <label style={{ marginLeft: "18rem" }}>
                                    <b>Ref.2</b>
                                  </label>
                                  <label style={{ marginLeft: "18.35rem" }}>
                                    <b>Ref.3</b>
                                  </label>
                                  <br />
                                  <div class="je_na1">
                                    <input
                                      type="text"
                                      class="JEN_user-input1"
                                      onChange={Ref_Func}
                                      placeholder="Ref"
                                      name="ref"
                                      value={
                                        Ref || (HeaderData && HeaderData.ref)
                                      }
                                    />
                                  </div>
                                  <div class="je_na2">
                                    <input
                                      type="text"
                                      class="JEN_user-input1"
                                      onChange={Ref2_Func}
                                      placeholder="Ref 2"
                                      name="ref2"
                                      value={
                                        Ref2 || (HeaderData && HeaderData.ref2)
                                      }
                                    />
                                  </div>
                                  <div class="je_na2">
                                    <input
                                      type="text"
                                      class="JEN_user-input1"
                                      onChange={Ref3_Func}
                                      placeholder="Ref 3"
                                      name="ref3"
                                      value={
                                        Ref3 || (HeaderData && HeaderData.ref3)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                      </div>
                      <br />
                      <br />

                      <Table bordered responsive>
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
                                      // styles={customStyles}
                                      // name="DocType"
                                      // value={docdate || getTableData && getTableData.DocType}
                                      onChange={(e) => {
                                        DocTypeChange(e, index, "Type");
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
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{ width: "9.5rem", height: "auto" }}
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
                                          // styles={customStyles}
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
                                          // styles={customStyles}
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
                                    onChange={(e) => getonchangevalue(e, index)}
                                    value={getTableData && getTableData.Control}
                                  />
                                </td>
                                <td>
                                  <input
                                    id="debit_Field"
                                    type="number"
                                    readOnly={element.Debitvaluechangerhook}
                                    name="Debit"
                                    className="bank_user-input"
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
                                    value={credit}
                                    onChange={(e) => valuechanger2(e, index)}
                                  />
                                </td>
                                <td>
                                  {" "}
                                  <div
                                    style={{ width: "9rem", height: "auto" }}
                                  >
                                    <Select
                                      name="Employee_Id"
                                      // styles={customStyles}
                                      placeholder={
                                        getTableData && getTableData.Employee_id
                                      }
                                      onChange={(e) => EmplyeeId_Func(e, index)}
                                      options={EmployeeId}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    name="Remark"
                                    className="bank_user-input"
                                    value={remark}
                                    style={{ align: "center", width: "9rem" }}
                                    onChange={(e) => getonchangevalue(e, index)}
                                    // value={getTableData && getTableData.Remark}
                                  />
                                </td>

                                <td>
                                  <input
                                    type="text"
                                    name="Ref1"
                                    className="bank_user-input"
                                    value={ref1}
                                    onChange={(e) => getonchangevalue(e, index)}
                                    // value={
                                    //   getTableData ? getTableData.Ref1 : null
                                    // }
                                    style={{ align: "center", width: "9rem" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    name="Ref3"
                                    className="bank_user-input"
                                    value={ref3}
                                    onChange={(e) => getonchangevalue(e, index)}
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
                                      // styles={customStyles}
                                      options={fetchProjectData}
                                      placeholder={
                                        getTableData && getTableData.Project
                                      }
                                      onChange={(e) => Project1_Func(e, index)}
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
                                      // styles={customStyles}
                                      options={fetchCostCenter}
                                      placeholder={
                                        getTableData && getTableData.CostCenter
                                      }
                                      onChange={(e) =>
                                        CostCenter1_Func(e, index)
                                      }
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                      <br />
                      {/* <button class="JV-add-button" onClick={() => { handleSubmit() }}>Add</button> */}
                      <button
                        className="JV-add-button"
                        onClick={() => {
                          JEset();
                          Add3();
                        }}
                      >
                        {" "}
                        OK{" "}
                      </button>
                      <button class="JV-cancel-button" onClick={handleClose111}>
                        Close Modal
                      </button>
                      {/* </artical>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  </Modal>
                ) : (
                  <Modal
                    className="modal Modal-big"
                    show={show111}
                    onHide={handleClose111}
                    size="lg"
                  >
                    <div
                      class="login-divbank111"
                      style={{ border: "1px solid white", padding: "10px" }}
                    >
                      <div class="card-body">
                        <div class="JEN_fields">
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

                          <h3 style={{ textAlign: "center" }}>
                            {getheadernameapi1}
                          </h3>
                          {error && <Alert variant="danger">{error}</Alert>}
                          {message && (
                            <Alert variant="success">{message}</Alert>
                          )}
                          <label>Journal Voucher Number</label>
                          <div class="JEN_username11">
                            .
                            <input
                              type="number"
                              class="JEN_user-input1"
                              readOnly
                              style={{ width: "10rem", marginBottom: "11rem" }}
                              value={inputjvnum}
                              name="InputJVnum"
                            />
                          </div>
                          <br />
                          <label className="OPRJ-Label">Series</label>
                          <br />
                          <div
                            className="JEN1-dropdown"
                            style={{ marginTop: "1%" }}
                          >
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
                          <div
                            className="JEN2-dropdown"
                            style={{ marginTop: "1%" }}
                          >
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
                              value={
                                postDate ||
                                (HeaderData && HeaderData.postingDate)
                              }
                              onChange={PostDate_Func}
                            />
                          </div>
                          <br />
                          {/** */}
                          <div>
                            <label className="OPRJ-Label">Due Date</label>
                            <br />
                            <div class="DR_box1" style={{ marginTop: "1%" }}>
                              <input
                                type="date"
                                class="JEN_user-input1"
                                placeholder=""
                                name="dueDate"
                                value={
                                  duedate || (HeaderData && HeaderData.dueDate)
                                }
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
                                value={
                                  docdate || (HeaderData && HeaderData.docDate)
                                }
                                onChange={DocDate_Func}
                              />
                            </div>
                          </div>
                          <br />
                          <div>
                            <label className="OPRJ-Label">Origin No.</label>
                            <br />
                            <div class="DR_box1" style={{ marginTop: "1%" }}>
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
                            <div class="DR_box1" style={{ marginTop: "1%" }}>
                              <input
                                type="text"
                                class="JEN_user-input1"
                                placeholder="Remarks"
                                name="remarks"
                                value={
                                  Remark || (HeaderData && HeaderData.remarks)
                                }
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
                          {/** */}
                          <div>
                            <br />
                            <label className="OPRJ-Label">Ref.2</label>
                            <br />
                            <div class="DR_box1" style={{ marginTop: "1%" }}>
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
                          {/*////////////////////////////////////////////////////////////////// 
                        {/* <div>
                          <br />
                          <br />
                          <br />
                          <label style={{ marginLeft: '0.5rem' }}><b>Posting Date</b></label><label style={{ marginLeft: '14.7rem' }}><b>Due Date</b></label><label style={{ marginLeft: '16.5rem' }}><b>DocDate</b></label>

                          <br />
                          <div class="je_na1">
                            <input type="date" class="JEN_user-input1" placeholder="" name="postingDate" onChange={PostDate_Func} /></div>
                          <div class="je_na2">
                            <input type="date" class="JEN_user-input1" placeholder="" name="dueDate" value={duedate || HeaderData && HeaderData.dueDate} onChange={DueDate_Func} /></div>
                          <div class="je_na3" >
                            <input type="date" class="JEN_user-input1" placeholder="" name="docDate" value={docdate || HeaderData && HeaderData.docDate} onChange={DocDate_Func} /></div>
                        </div> */}

                          {/* <br />
                        <br />
                        <br />

                        <div>
                          <label style={{ marginLeft: '0.5rem' }} ><b>Origin No.</b></label>  <label style={{ marginLeft: '15.50rem' }}><b>Trans.No</b></label>   <label style={{ marginLeft: '16.50rem' }}><b>Remarks</b></label><br />
                          <div class="je_na1">
                            <input type="text" class="JEN_user-input1" readOnly
                              name="origin" value={HeaderData1} onChange={Origin_Func} />
                          </div>
                          <div class="je_na2">
                            <input type="number" class="JEN_user-input1" placeholder="Trans No."
                              name="trans" onChange={Trans_Func} /></div>
                          <div class=" JEN_box1" style={{ marginLeft: '1rem' }}>
                            <input type="text" class="JEN_user-input1" placeholder="Remarks"
                              name="remarks" onChange={Remarks_Func} /></div>

                          <br />

                        </div> */}
                          {/* <br />
                        <br />

                        <div>
                          <div>
                            <label style={{ marginLeft: '0.8rem' }}><b>Ref.1</b></label><label style={{ marginLeft: '18rem' }}><b>Ref.2</b></label>
                            <label style={{ marginLeft: '18.35rem' }}><b>Ref.3</b></label><br />
                            <div class="je_na1">
                              <input type="text" class="JEN_user-input1" onChange={Ref_Func} placeholder="Ref"
                                name="ref" value={Ref || HeaderData && HeaderData.ref} /></div>
                            <div class="je_na2">
                              <input type="text" class="JEN_user-input1" onChange={Ref2_Func} placeholder="Ref 2"
                                name="ref2" value={Ref2 || HeaderData && HeaderData.ref2} /></div>
                            <div class="je_na2">
                              <input type="text" class="JEN_user-input1" onChange={Ref3_Func} placeholder="Ref 3"
                                name="ref3" value={Ref3 || HeaderData && HeaderData.ref3} /></div>
                          </div>
                        </div> */}
                        </div>
                      </div>
                      <br />
                      <br />
                      {/* <div class="card-body"> */}
                      <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                        <div class="form-group">
                          <Table
                            bordered
                            class="Table1"
                            style={{ padding: "10px" }}
                          >
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
                                        style={{
                                          width: "9rem",
                                          height: "auto",
                                        }}
                                      >
                                        <Select
                                          placeholder="Select"
                                          styles={customStyles}
                                          // name="DocType"
                                          // value={docdate || getTableData && getTableData.DocType}
                                          onChange={(e) => {
                                            DocTypeChange(e, index, "Type");
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
                                              styles={customStyles}
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
                                              styles={customStyles}
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
                                            />
                                          </div>
                                        ) : null}
                                      </div>
                                    </td>

                                    <div
                                      style={{
                                        align: "center",
                                        width: "10rem",
                                      }}
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
                                        style={{
                                          align: "center",
                                          width: "9rem",
                                        }}
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
                                        value={
                                          getTableData && getTableData.Debit
                                        }
                                        style={{
                                          align: "center",
                                          width: "9rem",
                                        }}
                                        onChange={(e) => valuechanger(e, index)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        id="credit_Field"
                                        type="text"
                                        readOnly={
                                          element.Creditvaluechangerhook
                                        }
                                        name="Credit"
                                        style={{
                                          align: "center",
                                          width: "9rem",
                                        }}
                                        className="bank_user-input"
                                        value={credit}
                                        onChange={(e) =>
                                          valuechanger2(e, index)
                                        }
                                        // value={
                                        //   getTableData && getTableData.Credit
                                        // }
                                      />
                                    </td>
                                    <td>
                                      {" "}
                                      <div
                                        style={{
                                          width: "9rem",
                                          height: "auto",
                                        }}
                                      >
                                        <Select
                                          name="Employee_Id"
                                          styles={customStyles}
                                          placeholder={
                                            getTableData &&
                                            getTableData.Employee_id
                                          }
                                          onChange={(e) =>
                                            EmplyeeId_Func(e, index)
                                          }
                                          options={EmployeeId}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="Remark"
                                        className="bank_user-input"
                                        value={remark}
                                        style={{
                                          align: "center",
                                          width: "9rem",
                                        }}
                                        onChange={(e) =>
                                          getonchangevalue(e, index)
                                        }
                                        // value={
                                        //   getTableData && getTableData.Remark
                                        // }
                                      />
                                    </td>

                                    <td>
                                      <input
                                        type="text"
                                        name="Ref1"
                                        className="bank_user-input"
                                        value={ref1}
                                        onChange={(e) =>
                                          getonchangevalue(e, index)
                                        }
                                        // value={
                                        //   getTableData && getTableData.Ref1
                                        // }
                                        style={{
                                          align: "center",
                                          width: "9rem",
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="number"
                                        name="Ref3"
                                        className="bank_user-input"
                                        value={ref3}
                                        onChange={(e) =>
                                          getonchangevalue(e, index)
                                        }
                                        // eslint-disable-next-line react/jsx-no-duplicate-props
                                        // value={
                                        //   getTableData && getTableData.Ref3
                                        // }
                                        style={{
                                          align: "center",
                                          width: "9rem",
                                        }}
                                      />
                                    </td>

                                    <td>
                                      {" "}
                                      <div
                                        style={{
                                          width: "9rem",
                                          height: "auto",
                                        }}
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
                                          styles={customStyles}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      {" "}
                                      <div
                                        style={{
                                          width: "9rem",
                                          height: "auto",
                                        }}
                                      >
                                        <Select
                                          name="Cost_Center"
                                          styles={customStyles}
                                          options={fetchCostCenter}
                                          placeholder={
                                            getTableData &&
                                            getTableData.CostCenter
                                          }
                                          onChange={(e) =>
                                            CostCenter1_Func(e, index)
                                          }
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                      {/* </div> */}
                      <br />
                      {/* <button class="JV-add-button" onClick={() => { handleSubmit() }}>Add</button> */}
                      <button className="DR-add-button" onClick={JEset1}>
                        {" "}
                        OK{" "}
                      </button>
                      <button class="DR-cancel-button" onClick={handleClose111}>
                        Close Modal
                      </button>
                    </div>
                  </Modal>
                )}

                {/* Existing JE to voucher */}
                <Modal
                  className="modal Modal-big"
                  show={show1112}
                  onHide={handleClose1112}
                  size="lg"
                ></Modal>

                {/* JV Buttons */}
                <button class="JV-add-button" onClick={newJEentry}>
                  Add Journal Entry <br /> to New Voucer
                </button>
                <button class="JV-add-button2" onClick={existJEentry}>
                  Add Entry to <br /> Existing Voucer
                </button>
                <br />
                <br />
                <button class="DR-add-button" onClick={Submit_PatchFunc}>
                  {ButtonName}
                </button>
                <button class="DR-cancel-button" onClick={handleClose10}>
                  Cancel
                </button>
                {/* </div> */}
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Journal;
