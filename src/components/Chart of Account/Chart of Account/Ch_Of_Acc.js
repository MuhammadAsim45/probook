import React, { useRef, useState, useEffect, useCallback } from 'react'
import './Ch_O_ACSS.css';
import { Container, Alert, Tabs } from 'react-bootstrap'
import { Col, Row, Card, Nav, Tab } from 'react-bootstrap';
import Tab1 from '../Tabs/Tab1'
import Tab2 from '../Tabs/Liabilities'
import Tab3 from '../Tabs/Capital'
import Tab4 from '../Tabs/Turnover'
import Tab5 from '../Tabs/Sales'
import Tab6 from '../Tabs/operationing'
import Tab7 from '../Tabs/income'
import Tab8 from '../Tabs/Taxiation'
import Tab9 from '../Tabs/#9'
import Tab10 from '../Tabs/#10'
import Select from 'react-select';
import axios from 'axios'
const Csstask = ({ setShowModal4 }) => {
  const ExternalRadio = () => {
    setShowDropDown1(false);
    setShowDropDown2(true)
  }
  const InternalRadio = () => {
    setShowDropDown1(true);
    setShowDropDown2(false)
  }
  //Backend Code start from here
  const [dis, setdis] = useState(false)
  const [dis1, setdis1] = useState(false)
  const [tree, setTree] = useState();
  const [getTabName1, setgetTabName1] = useState();
  const [editglaccountfield, seteditglaccountfield] = useState(false)
  const [editglaccountfield2, seteditglaccountfield2] = useState(false)
  const [gettreelevel, setgettreelevel] = useState();
  const [getnamefromchild, setgetnamefromchild] = useState();
  const [active, setActive] = useState();
  const [ShowDropDown1, setShowDropDown1] = React.useState(true)
  const [ShowDropDown2, setShowDropDown2] = React.useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [glAmmount1, setGlAmmount1] = useState("");
  const [name1, setName1] = useState("");
  const [upd, setupd] = useState("Add");
  const [dispupd, setdispupd] = useState("Add");
  const [upperLevel, setUpperLevel] = useState();
  const [dbLevel, setDbLevel] = useState();
  const [forSubmit, setForSubmit] = useState();
  const [expandDefault, setExpandDefault] = useState()
  const [tab1Level1, setTab1Level1] = useState(true)
  const [tab2Level2, setTab2Level2] = useState(false)
  const [tab3Level3, setTab3Level3] = useState(false)
  const [tab4Level4, setTab4Level4] = useState(false)
  const [tab5Level5, setTab5Level5] = useState(false)
  const [tab6Level6, setTab6Level6] = useState(false)
  const [tab7Level7, setTab7Level7] = useState(false)
  const [tab8Level8, setTab8Level8] = useState(false)
  const [tab9Level9, setTab9Level9] = useState(false)
  const [tab10Level10, setTab10Level10] = useState(false)
  const [getFromTab1, setGetFromTab1] = useState()
  const [getFromTab2, setGetFromTab2] = useState()
  const [getFromTab3, setGetFromTab3] = useState()
  const [getFromTab4, setGetFromTab4] = useState()
  const [getFromTab5, setGetFromTab5] = useState()
  const [getFromTab6, setGetFromTab6] = useState()
  const [getFromTab7, setGetFromTab7] = useState()
  const [getFromTab8, setGetFromTab8] = useState()
  const [getFromTab9, setGetFromTab9] = useState()
  const [getFromTab10, setGetFromTab10] = useState()
  const [tabName, setTabName] = useState(getFromTab1)
  const [tab2Name, setTab2Name] = useState(getFromTab2)
  const [tab3Name, setTab3Name] = useState(getFromTab3)
  const [tab4Name, setTab4Name] = useState(getFromTab4)
  const [tab5Name, setTab5Name] = useState(getFromTab5)
  const [tab6Name, setTab6Name] = useState(getFromTab6)
  const [tab7Name, setTab7Name] = useState(getFromTab7)
  const [tab8Name, setTab8Name] = useState(getFromTab8)
  const [tab9Name, setTab9Name] = useState(getFromTab9)
  const [tab10Name, setTab10Name] = useState(getFromTab10)
  const [counter, setCounter] = useState(1);
  const [SearchNumber, setSearchNumber] = useState("");
  const [externalCode1, setExternalCode1] = useState("");
  const [currency1, setCurrency1] = useState("");
  const [glAmmount, setGlAmmount] = useState("");
  const [name, setName] = useState("");
  const [externalCode, setExternalCode] = useState("");
  const [childdata, setchilddata] = useState();
  const [currency, setCurrency] = useState("");
  const [confidential, setConfidential] = useState(false);
  const [level, setLevel] = useState("");
  const [getheadernameapi, setgetheadernameapi] = useState()
  const [code, setCode] = useState("");
  const [balance, setBalance] = useState("");
  const [accountType, setAccountType] = useState();
  const [contronAccount, setControlAccount] = useState(false);
  const [indexed, setIndexed] = useState(false);
  const [blockPosting, setBlockPosting] = useState(false);
  const [cashAccount, setCashAccount] = useState(false);
  const [revalCurrency, setRevalCurrency] = useState(false);
  const [danish, setDanish] = useState("");
  const [iheritGroupMask, setIheritGroupMask] = useState();
  const Group_Mask_Func = () => {
    setIheritGroupMask("1")
  }
  const Group_Mask_Func2 = () => {
    setIheritGroupMask("2")
  }
  const Group_Mask_Func3 = () => {
    setIheritGroupMask("3")
  }
  const Group_Mask_Func4 = () => {
    setIheritGroupMask("4")
  }
  const Group_Mask_Func5 = () => {
    setIheritGroupMask("5")
  }
  const Group_Mask_Func6 = () => {
    setIheritGroupMask("6")
  }
  const Group_Mask_Func7 = () => {
    setIheritGroupMask("7")
  }
  const Group_Mask_Func8 = () => {
    setIheritGroupMask("8")
  }
  const Group_Mask_Func9 = () => {
    setIheritGroupMask("9")
  }
  const Group_Mask_Func10 = () => {
    setIheritGroupMask("10")
  }
  // add button
  const Submit_PatchFunc = () => {

    if (dispupd == "Add") {

      handleSubmit1()

    } else if (dispupd !== "Add") {
      updataData1()
    }
  }
  //change value of hook
  const ShowModal_func = () => {
    setShowModal4(false)
  }
  // Active Add Update Button
  const Submit_UpdateFunc = () => {

    if (dispupd === "Add") {
      handleSubmit()
    } else if (dispupd !== "Add") {
      updataData()
    }
  }
  const handleClose_func = () => {

    // sethandleClose4(false)
    setShowModal4(false)
    console.log("asssssssss");
  }

  // Add Title data function
  const handleSubmit1 = () => {

    const newNote = {
      Group_Mask: iheritGroupMask,
      GL_Account: glAmmount1,
      Name: name1,
      ExternalCode: externalCode1,
      Currency: currency1,
      Parent: danish,
      Level: counter,
      Title: "title"
    }

    if (counter >= 6) {
      alert("You Coun't data send upto 5 Level")
      // resetfunc()
    } else if (!danish) {
      alert("You Coun't Add without Parent")
      // resetfunc()
    } else {
      //then and catch
      axios.post("http://localhost:3331/chartOfAccount", newNote).then(res => {

        console.log(res);
        // setError("")
        // setMessage("Data saved successfully")
        alert("Data saved successfully")
        // resetfunc()

      }).catch(error => {

        console.log(error.response.data.msg);
        console.log(error.response.data.msg.code);

        if (error.response.data.msg.code == 11000) {
          console.log("duplicate key Error");
          alert("Unable to add data because account# already present. Try again")
          // setError("Unable to add data because account# already present. Try again")
        } else {
          console.log("other Error");
          alert("Unable to add data. Try again")
        }
        // resetfunc()
      })
    }
    resetfunc()
    setdis(true)
  }

  const resetfunc = () => {
    console.log("reset function");
    seteditglaccountfield(false)
    seteditglaccountfield2(false)
    setDanish("")
    setCounter(1)
    setSearchNumber("")
    setExternalCode1("")
    setCurrency1("")
    setGlAmmount("")
    setName("")
    setExternalCode("")
    setName1("")
    setGlAmmount1("")
    // setchilddata
    setCurrency("")
    // setConfidential
    setLevel("")
    setCode("")
    setBalance("")
    // setAccountType
  }
  //Get all Data from Mongodb
  const AllData = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: 'http://localhost:3331/chartOfAccount',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element.Active) {
            setForSubmit(element);
          }
          if (element.Group_Mask) {
            setgetTabName1(element.Group_Mask);
          }
        })
      })
      .catch(function (error) {
      });
  }

  // Update Title function
  const updataData1 = (e) => {
    console.log("update data",`${SearchNumber}`);
    const body=JSON.stringify({
      "Name": name
    })
    console.log("body",body);
    var request = require('request');
    var options = {
      'method': 'PATCH',
      'url': `http://localhost:3331/chartOfAccount/${SearchNumber}`,
      'headers': {
        'Content-Type': 'application/json'
      },
      body:(body)
    };
    request(options, function (error, response) {
      console.log(name1);
      if (upd === "Update1") {
        setTabName(name1)
        GetAllTab1Level1()
      } else if (upd === "Update2") {
        setTab2Name(name1)
        GetAllTab2Level2()
      } else if (upd === "Update3") {
        setTab3Name(name1)
        GetAllTab3Level3()
      } else if (upd === "Update4") {
        setTab4Name(name1)
        GetAllTab4Level4()
      } else if (upd === "Update5") {
        setTab5Name(name1)
        GetAllTab5Level5()
      } else if (upd === "Update6") {
        setTab6Name(name1)
        GetAllTab6Level6()
      } else if (upd === "Update7") {
        setTab7Name(name1)
        GetAllTab7Level7()
      } else if (upd === "Update8") {
        setTab8Name(name1)
        GetAllTab8Level8()
      } else if (upd === "Update9") {
        setTab9Name(name1)
        GetAllTab9Level9()
      } else if (upd === "Update10") {
        setTab10Name(name1)
        GetAllTab10Level10()
      }

      setupd("Add")
      setdispupd("Add")
      // resetfunc()
      if (error) throw new Error(error);

    });
  }

  // Update Active function
  const updataData = () => {
    // console.log("update data",`${SearchNumber}`);
    // const body=JSON.stringify({
    //   "Name": name
    // })
    // console.log("body",body);
    var request = require('request');
    var options = {
      'method': 'PATCH',
      'url': `http://localhost:3331/chartOfAccount/${SearchNumber}`,
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Name": name
      })
    };
    request(options, function (error, response) {
      if (upd === "Update1") {
        setTabName(name)
        GetAllTab1Level1()
      } else if (upd === "Update2") {
        setTab2Name(name)
        GetAllTab2Level2()
      } else if (upd === "Update3") {
        setTab3Name(name)
        GetAllTab3Level3()
      } else if (upd === "Update4") {
        setTab4Name(name)
        GetAllTab4Level4()
      } else if (upd === "Update5") {
        setTab5Name(name)
        GetAllTab5Level5()
      } else if (upd === "Update6") {
        setTab6Name(name)
        GetAllTab6Level6()
      } else if (upd === "Update7") {
        setTab7Name(name)
        GetAllTab7Level7()
      } else if (upd === "Update8") {
        setTab8Name(name)
        GetAllTab8Level8()
      } else if (upd === "Update9") {
        setTab9Name(name)
        GetAllTab9Level9()
      } else if (upd === "Update10") {
        setTab10Name(name)
        GetAllTab10Level10()
      }
      setupd("Add")
      setdispupd("Add")
      // resetfunc()
      if (error) throw new Error(error);

    });
  }

  const getheadername = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: 'http://localhost:3331/name',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        setgetheadernameapi(response.data[4].CustomName)
      })
      .catch(function (error) {
      });
  }
  // show All data
  useEffect(() => {
    getheadername()
    AllData()
    GetAllTab1Level1()
    // GetAllTab3Level3()
    setTabName(getFromTab1)
    setTab2Name(getFromTab2)
    setTab3Name(getFromTab3)
    setTab4Name(getFromTab4)
    setTab5Name(getFromTab5)
    setTab6Name(getFromTab6)
    setTab7Name(getFromTab7)
    setTab8Name(getFromTab8)
    setTab9Name(getFromTab9)
    setTab10Name(getFromTab10)
  }, [getFromTab10])

  // Add Active Account data function
  async function handleSubmit() {

    const newNote = {
      Group_Mask: iheritGroupMask,
      Parent: danish,
      GL_Account: glAmmount,
      Name: name,
      ExternalCode: externalCode,
      Currency: currency,
      Confidential: confidential,
      Level: counter,
      Code: code,
      Balance: balance,
      AccountType: accountType,
      ControlAccount: contronAccount,
      CashAccount: cashAccount,
      Indexed: indexed,
      RevalCurrency: revalCurrency,
      BlockPosting: blockPosting,
      Active: "active"
    }
    if (active) {
      alert("You Can't make Active Child")
    }
    else {
      axios.post("http://localhost:3331/chartOfAccount", newNote).then(res => {
        alert("Data save successful")
        // resetfunc()
      }).catch(error => {
        console.log(error.response.data.msg);
        console.log(error.response.data.msg.code);
        if (error.response.data.msg.code == 11000) {
          console.log("duplicate key Error");
          alert("Unable to add data because account# already present. Try again")
        } else {
          console.log("other Error");
          alert("Unable to add data. Try again")
        }
        // resetfunc()
      })
    }
    resetfunc()
    setdis1(true)
    setLoading(false)
  }

  // input fields onChange functions
  const Name_Func1 = (e) => {
    setName1(e.target.value)
  }
  const ExternalCode_Func1 = (e) => {
    setExternalCode1(e.target.value)
  }
  const Currency_Func1 = (e) => {
    setCurrency1(e.target.value)
  }
  const ExternalCode_Func = (e) => {
    setExternalCode(e.target.value)
  }
  const Currency_Func = (e) => {
    setCurrency(e.target.value)
  }
  const Confidential_Func = (e) => {
    setConfidential(e.target.value)
  }
  const Level_Func = (e) => {
    setLevel(e.target.value)
  }
  const Code_Func = (e) => {
    setCode(e.target.value)
  }
  const Balance_Func = (e) => {
    setBalance(e.target.value)
  }
  const AccountType_Func = (e) => {
    setAccountType(e.target.value)
  }
  const ControlAccount_Func = (e) => {
    setControlAccount(e.target.value)
  }
  const CashAccount_Func = (e) => {
    setCashAccount(e.target.value)
  }
  const Indexed_Func = (e) => {
    setIndexed(e.target.value)
  }
  const RevalCurrency_Func = (e) => {
    setRevalCurrency(e.target.value)
  }
  const BlockPosting_Func = (e) => {
    setBlockPosting(e.target.value)
  }
  const TopLevel_Func = (e) => {
    if (e.value == 1) {
      GetTab1Level1()
    }
    if (e.value == 2) {
      GetTab1Level2()
    }
    if (e.value == 3) {
      GetTab1Level3()
    }
    if (e.value == 4) {
      GetTab1Level4()
    }
    if (e.value == 5) {
      GetTab1Level5()
    }
  }
  const TopLevel2_Func = (e) => {
    if (e.value == 1) {
      GetTab2Level1()
    }
    if (e.value == 2) {
      GetTab2Level2()
    }
    if (e.value == 3) {
      GetTab2Level3()
    }
    if (e.value == 4) {
      GetTab2Level4()
    }
    if (e.value == 5) {
      GetTab2Level5()
    }
  }
  const TopLevel3_Func = (e) => {
    if (e.value == 1) {
      GetTab3Level1()
    }
    if (e.value == 2) {
      GetTab3Level2()
    }
    if (e.value == 3) {
      GetTab3Level3()
    }
    if (e.value == 4) {
      GetTab3Level4()
    }
    if (e.value == 5) {
      GetTab3Level5()
    }
  }
  const TopLevel4_Func = (e) => {
    if (e.value == 1) {
      GetTab4Level1()
    }
    if (e.value == 2) {
      GetTab4Level2()
    }
    if (e.value == 3) {
      GetTab4Level3()
    }
    if (e.value == 4) {
      GetTab4Level4()
    }
    if (e.value == 5) {
      GetTab4Level5()
    }
  }
  const TopLevel5_Func = (e) => {
    if (e.value == 1) {
      GetTab5Level1()
    }
    if (e.value == 2) {
      GetTab5Level2()
    }
    if (e.value == 3) {
      GetTab5Level3()
    }
    if (e.value == 4) {
      GetTab5Level4()
    }
    if (e.value == 5) {
      GetTab5Level5()
    }
  }
  const TopLevel6_Func = (e) => {
    if (e.value == 1) {
      GetTab6Level1()
    }
    if (e.value == 2) {
      GetTab6Level2()
    }
    if (e.value == 3) {
      GetTab6Level3()
    }
    if (e.value == 4) {
      GetTab6Level4()
    }
    if (e.value == 5) {
      GetTab6Level5()
    }
  }
  const TopLevel7_Func = (e) => {
    if (e.value == 1) {
      GetTab7Level1()
    }
    if (e.value == 2) {
      GetTab7Level2()
    }
    if (e.value == 3) {
      GetTab7Level3()
    }
    if (e.value == 4) {
      GetTab7Level4()
    }
    if (e.value == 5) {
      GetTab7Level5()
    }
  }
  const TopLevel8_Func = (e) => {
    if (e.value == 1) {
      GetTab8Level1()
    }
    if (e.value == 2) {
      GetTab8Level2()
    }
    if (e.value == 3) {
      GetTab8Level3()
    }
    if (e.value == 4) {
      GetTab8Level4()
    }
    if (e.value == 5) {
      GetTab8Level5()
    }
  }
  const TopLevel9_Func = (e) => {
    if (e.value == 1) {
      GetTab9Level1()
    }
    if (e.value == 2) {
      GetTab9Level2()
    }
    if (e.value == 3) {
      GetTab9Level3()
    }
    if (e.value == 4) {
      GetTab9Level4()
    }
    if (e.value == 5) {
      GetTab9Level5()
    }
  }
  const TopLevel10_Func = (e) => {
    if (e.value == 1) {
      GetTab10Level1()
    }
    if (e.value == 2) {
      GetTab10Level2()
    }
    if (e.value == 3) {
      GetTab10Level3()
    }
    if (e.value == 4) {
      GetTab10Level4()
    }
    if (e.value == 5) {
      GetTab10Level5()
    }
  }
  const Add = () => {
    if (active) {
      alert("You Can't make Active Account Child")
    } else {
      if (counter !== 6) {
        setCounter(counter + 1);
      }
      seteditglaccountfield(true)
      seteditglaccountfield2(true)
      setName1("")
      setGlAmmount1("")
      setName("")
      setGlAmmount("")
      setgetnamefromchild("")
      setchilddata("")
      setupd("Add")
      setdispupd("Add")
      setDanish(getnamefromchild && getnamefromchild.GL_Account)
      // setAdding(getnamefromchild && getnamefromchild.GL_Account)
    }
  }

  const uneditgl = () => {

    return (
      <>
        <label>G/L Account</label>
        <div class="Ch_O_Adivs2">
          <input type="text" class="CHOAinput1" name="GL_Account" value={getnamefromchild && getnamefromchild.GL_Account}
            onChange={(e) => { setSearchNumber(e.target.value); setGlAmmount1(e.target.value) }} style={{ marginLeft: '0.5rem' }} /></div>
      </>
    )
  }

  const editgl = () => {

    return (
      <>
        <label>G/L Account</label>
        <div class="Ch_O_Adivs2">
          <input type="text" class="CHOAinput1" name="GL_Account" value={glAmmount1 || getnamefromchild && getnamefromchild.GL_Ammount}
            onChange={(e) => { setSearchNumber(e.target.value); setGlAmmount1(e.target.value) }} style={{ marginLeft: '0.5rem' }} /></div>
      </>
    )
  }
  const customStyles3 = {
    control: base => ({
      ...base,
      height: 35,
      minHeight: 55,
      border: 'none',
      background: 'none',
      boxShadow: 'none !important',
      outline: 'none',
      textAlign: 'left',
      marginTop: -10
    })
  };
  const EmployeeId = [{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }]

  //................End Backend Code...............

  const CheckFun = () => {
    return (
      <>
        <Container className="header">
          <button class="CHOA_add-button" onClick={() => { Add() }}>Add</button>
          {/* <button class="CHOA_add-button" onClick={()=>{Add()}}>Add</button> */}
          <br />
          <div>{editglaccountfield ? editgl() : uneditgl()}</div>
          <label>Name</label>
          <div class=" Ch_O_Adivs " >
            <input type="text" class="CHOAinput1" name="Name" value={name1 || getnamefromchild && getnamefromchild.Name}
              onChange={Name_Func1} style={{ marginLeft: '0.5rem' }} /></div>
          <label>External Code</label>
          <br />
          <div class="  Ch_O_Adivs2 " >
            <input type="text" class="CHOAinput1" name="ExternalCode" value={externalCode1} onChange={ExternalCode_Func1} style={{ marginLeft: '0.5rem' }} placeholder="" /></div>
          <label>Currency</label>
          <div class="Ch_O_Adivs" >
            <input type="text" class="CHOAinput1" name="Currency" value={currency1} onChange={Currency_Func1} style={{ marginLeft: '0.5rem' }} placeholder="" /></div>
          <label>Level</label>
          <div className="Ch_O_Adivs4" style={{ fontSize: '16px' }}>
            <input type="text" class="CHOAinput1" name="Level" value={counter} onChange={Level_Func} style={{ marginLeft: '0.5rem' }} />
          </div>
          <br />
          <button class="CHOA_add-button" onClick={Submit_PatchFunc}>{dispupd}</button>
          <button class="CHOA_cancel-button" onClick={ShowModal_func} >Cancel</button>
        </Container>
      </>
    )
  }
  const uneditgl2 = () => {

    return (
      <>
        <label>G/L Amount</label>
        <br />
        <div class="Ch_O_Adivs2">
          <input type="text" class="CHOAinput1" name="GL_Account" value={getnamefromchild && getnamefromchild.GL_Account}
            style={{ marginLeft: '0.5rem' }} /></div>
      </>
    )
  }
  const editgl2 = () => {

    return (
      <>
        <label>G/L Amount</label>
        <br />
        <div class="Ch_O_Adivs2">
          <input type="text" class="CHOAinput1" name="GL_Account" value={glAmmount || getnamefromchild && getnamefromchild.GL_Account}
            onChange={(e) => setGlAmmount(e.target.value)} style={{ marginLeft: '0.5rem' }} /></div>
      </>
    )
  }
  const CheckFun1 = () => {
    return (

      <div class="active-class" >

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        {/* <button class="CHOA_add-button" onClick={()=>{Add();tree()}}>Add</button> */}
        <button class="CHOA_add-button" onClick={() => { Add() }}>Add</button>
        <br />
        <div>{editglaccountfield2 ? editgl2() : uneditgl2()}</div>
        <label>Name</label>
        <div class=" Ch_O_Adivs " >
          <input type="text" class="CHOAinput1" name="Name" value={name || getnamefromchild && getnamefromchild.Name}
            onChange={(e) => setName(e.target.value)} style={{ marginLeft: '0.5rem' }} /></div>
        <label>External Code</label>
        <div className="Ch_O_Adivs" style={{ fontSize: '16px' }}>
          <input type="text" class="CHOAinput1" name="ExternalCode" value={externalCode}
            onChange={ExternalCode_Func} style={{ marginLeft: '0.5rem' }} />
        </div>
        <label>Currency</label>
        <div class="Ch_O_Adivs2" >
          <input type="text" class="CHOAinput1" name="Currency" value={currency}
            onChange={Currency_Func} style={{ marginLeft: '0.5rem' }} />
        </div>
        <div >
          <input type="checkbox" name="Confidential" value="true" defaultChecked={confidential === 'true' || confidential}
            onChange={Confidential_Func} id="rememberMe" /> <label for="rememberMe">Confidential</label>
        </div>
        <label>Level</label>
        <div className="Ch_O_Adivs4" style={{ fontSize: '16px' }}>
          <input type="text" class="CHOAinput1" name="Level" value={counter}
            onChange={Level_Func} style={{ marginLeft: '0.5rem' }} />
        </div>
        <label>Balance</label>
        <br />
        <div class="CHOA"><input type="text" class="CHOAinput1" name="Code" value={code}
          onChange={Code_Func} style={{ marginLeft: '0.5rem' }} placeholder="Code" />
        </div>
        <br />

        <br />
        <label>G/L Account Properties</label>
        <div className="Ch_O_A_dropdownL" >
          {/* <div class="Ch_select-style"  > */}
          {/* <select placeholder="Select" name="Balance" value={balance} onChange={Balance_Func} >
              <option class="abc">Select...</option>
              <option class="abc" value="javascript">Dimensions 1</option>
              <option class="abc" value="html">Dimension 2</option>
            </select> */}
          {/* </div> */}
          <Select
            // value={dimensions}
            options={EmployeeId}
            styles={customStyles3}
          />
        </div>
        <label>Account Type</label>
        <div className="Ch_O_A_dropdownL">
          {/* <div class="Ch_select-style"  >  */}
          {/* <select placeholder="Select" name="AccountType" value={accountType} onChange={AccountType_Func} >
            <option class="abc">Select...</option>
            <option class="abc" value="javascript">Dimensions 1</option>
            <option class="abc" value="html">Dimension 2</option>
          </select> */}
          {/* </div> */}
          <Select
            // value={dimensions}
            options={EmployeeId}
            styles={customStyles3}
          />
        </div>
        <div style={{ marginBottom: '5px', fontSize: '16px' }}>
          <input type="checkbox" name="ControlAccount" value="true" defaultChecked={contronAccount === 'true' || contronAccount}
            onChange={ControlAccount_Func} id="rememberMe" /> <label for="rememberMe">Control Account</label>
        </div>
        <div style={{ marginBottom: '5px', fontSize: '16px' }}>
          <input type="checkbox" name="CashAccount" value="true" defaultChecked={cashAccount === 'true' || cashAccount}
            onChange={CashAccount_Func} id="rememberMe" /> <label for="rememberMe">Cash Account</label>
        </div>
        <div style={{ marginBottom: '5px', fontSize: '16px' }}>
          <input type="checkbox" name="Indexed" value="true" defaultChecked={indexed === 'true' || indexed}
            onChange={Indexed_Func} id="rememberMe" /> <label for="rememberMe">Indexed</label>
        </div>
        <div style={{ marginBottom: '5px', fontSize: '16px' }}>
          <input type="checkbox" name="RevalCurrency" value="true" defaultChecked={revalCurrency === 'true' || revalCurrency}
            onChange={RevalCurrency_Func} id="rememberMe" /> <label for="rememberMe">Reval. Currency</label>
        </div>
        <div style={{ marginBottom: '5px', fontSize: '16px' }}>
          <input type="checkbox" name="BlockPosting" value="true" defaultChecked={blockPosting === 'true' || blockPosting}
            onChange={BlockPosting_Func} id="rememberMe" /> <label for="rememberMe">Block Manual Posting</label>
        </div>
        <br />
        <button class="CHOA_add-button" onClick={Submit_UpdateFunc}>{dispupd}</button>
        <button class="CHOA_cancel-button" onClick={handleClose_func} >Cancel</button>
        {/* </Container> */}
      </div>
    )
  }
  //............................Tab 1 Code..........................//
  const GetAllTab1Level1 = () => {
    let obj = []
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        // console.log(response);
        response.data.forEach(element => {
          // if (element._id){
          const finalData = JSON.stringify(element._id)
          setExpandDefault(finalData);
          // console.log(finalData);
          // }
        })
        // console.log(response.data)
        let srr = []
        srr = response.data
        // console.log(srr);
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22)

        setTree(result22)
        //  setgettreelevel(result22) 
      })
      .catch(function (error) {
      });
  }
  const GetTab1Level1 = () => { 
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/1/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))

        setTree(result22)
        console.log(result22)
      })
      .catch(function (error) {
      });
  }
  const GetTab1Level2 = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/1/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        setTree(result22)
      })
      .catch(function (error) {
      });
  }
  const GetTab1Level3 = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/1/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        setTree(result22)
        setgettreelevel(result22)
      })
      .catch(function (error) {
      });
  }
  const GetTab1Level4 = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/1/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        setTree(result22)
        setgettreelevel(result22)
      })
      .catch(function (error) {
      });
  }
  const GetTab1Level5 = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/1/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        setTree(result22)
        setgettreelevel(result22)
      })
      .catch(function (error) {
      });
  }
  //............................Tab 2 Code............................//
  const GetAllTab2Level2 = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);

          }
        })

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
          ;
        setTree(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab2Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/2/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        alert(JSON.stringify(response.data))
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        setTree(result22)
        setgettreelevel(result22)
      })
      .catch(function (error) {
      });
  }
  const GetTab2Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/2/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))

        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab2Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/2/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))

        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab2Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/2/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))

        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab2Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/2/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {

        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))

        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //.............................Tab 3 Code............................    
  const GetAllTab3Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);

          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))

        setTree(result22)


      })
      .catch(function (error) {
      });
  }
  const GetTab3Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/3/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab3Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/3/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab3Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/3/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab3Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/3/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab3Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/3/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //............................Tab 4 Code...............................
  const GetAllTab4Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);

          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)


      })
      .catch(function (error) {
      });
  }
  const GetTab4Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/4/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab4Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/4/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab4Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/4/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab4Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/4/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab4Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/4/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //............................Tab 5 Code...............................
  const GetAllTab5Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);

          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab5Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/5/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab5Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/5/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab5Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/5/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab5Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/5/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab5Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/5/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //............................Tab 6 Code................................
  const GetAllTab6Level6 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/6`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);

          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab6Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/6/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab6Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/6/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab6Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/6/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab6Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/6/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab6Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/6/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //............................Tab 7 Code................................
  const GetAllTab7Level7 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/7`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);
            console.log(finalData);
          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab7Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/7/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab7Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/7/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab7Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/7/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab7Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/7/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab7Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/7/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //...........................Tab 8 Code.................................
  const GetAllTab8Level8 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/8`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);
            console.log(finalData);
          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab8Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/8/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab8Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/8/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab8Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/8/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab8Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/8/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab8Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/8/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //...........................Tab 9 Code.................................
  const GetAllTab9Level9 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/9`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);
            console.log(finalData);
          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab9Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/9/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab9Level2 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/9/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab9Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/9/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab9Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/9/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab9Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/9/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //...........................Tab 10 Code...............................
  const GetAllTab10Level10 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountp/10`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        response.data.forEach(element => {
          if (element._id) {
            const finalData = JSON.stringify(element._id)
            setExpandDefault(finalData);
            console.log(finalData);
          }
        })
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)
      })
      .catch(function (error) {
      });
  }
  const GetTab10Level1 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/10/1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab10Level2 = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/10/2`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab10Level3 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/10/3`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab10Level4 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/10/4`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  const GetTab10Level5 = () => {

    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: `http://localhost:3331/chartOfAccountl/10/5`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        let srr = []
        srr = response.data
        const result22 = makeTree(makeIndex(srr, forum => forum.Parent))
        console.log(result22);
        setTree(result22)
        setgettreelevel(result22)

      })
      .catch(function (error) {
      });
  }
  //...........................make index Code...............................
  function makeIndex(items, indexer) {
    // console.log("items: ",items)
    // console.log("indexer",indexer)
    const append = (r, k, v) =>
      r.set(k, (r.get(k) || []).concat([v]))
    return items.reduce
      (
        (r, i) => append(r, indexer(i), i),
        new Map
      )
  }
  //...........................make Tree Code...............................
  function makeTree(index, root = null) {
    // console.log("index:",index);
    // console.log("root:",root);
    const many = (all = []) => all.map(one)
    // console.log("many",many);
    const one = (forum = {}) =>
    ({
      ...forum, 
      children: many(index.get(forum.GL_Account)),

    }
    )
    return many(index.get(root))
    
  }
  

  const FetchTab1AllData = () => {
    GetAllTab1Level1()
    setTab1Level1("AAAAAAAA")
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)
  }
  const FetchTab2AllData = () => {
    GetAllTab2Level2()
    setTab2Level2("BBBBBBBB")
    setTab1Level1(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)

  }
  const FetchTab3AllData = () => {
    GetAllTab3Level3()
    setTab3Level3("CCCCCCCC")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)
  }
  const FetchTab4AllData = () => {
    GetAllTab4Level4()
    setTab4Level4("CCCCCCCCC")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)

  }
  const FetchTab5AllData = () => {
    GetAllTab5Level5()
    setTab5Level5("DDDDDDDDDD")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)
  }
  const FetchTab6AllData = () => {
    GetAllTab6Level6()
    setTab6Level6("EEEEEEEEEE")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)
  }
  const FetchTab7AllData = () => {
    GetAllTab7Level7()
    setTab7Level7("FFFFFFFFFFF")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab8Level8(false)
    setTab9Level9(false)
    setTab10Level10(false)
  }
  const FetchTab8AllData = () => {
    GetAllTab8Level8()
    setTab8Level8("GGGGGGGGGGG")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab9Level9(false)
    setTab10Level10(false)
  }
  const FetchTab9AllData = () => {
    GetAllTab9Level9()
    setTab9Level9("HHHHHHHHHHHH")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab10Level10(false)

  }
  const FetchTab10AllData = () => {
    GetAllTab10Level10()
    setTab10Level10("KKKKKKKKKKK")
    setTab1Level1(false)
    setTab2Level2(false)
    setTab3Level3(false)
    setTab4Level4(false)
    setTab5Level5(false)
    setTab6Level6(false)
    setTab7Level7(false)
    setTab8Level8(false)
    setTab9Level9(false)
  }
  const getnumbers = [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' }]
  const customStyle4 = {
    control: base => ({
      ...base,
      height: 15,
      minHeight: 35,
      border: 'none',
      background: 'none',
      boxShadow: 'none !important',
      outline: 'none',
      border: '0.1px solid inharit',
      borderRadius: '5px 5px 5px 5px',
      marginRight: '10px'
    })
  }
  return (
    <div class="Ch-login-divMAIN">
      <br />
      <h3 style={{ textAlign: 'center' }}>{getheadernameapi}</h3>

      <div style={{ float: 'right', width: "11rem" }}>
        {tab1Level1 ?
          <Select
            onChange={e => TopLevel_Func(e)}
            options={getnumbers}
            styles={customStyle4}

          />
          : null}
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab2Level2 ?
            <Select
              onChange={e => TopLevel2_Func(e)}
              options={getnumbers}
            // styles={customStyle4}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab3Level3 ?
            <Select
              onChange={e => TopLevel3_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab4Level4 ?
            <Select
              onChange={e => TopLevel4_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab5Level5 ?
            <Select
              onChange={e => TopLevel5_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab6Level6 ?
            <Select
              onChange={e => TopLevel6_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab7Level7 ?
            <Select
              onChange={e => TopLevel7_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab8Level8 ?
            <Select
              onChange={e => TopLevel8_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab9Level9 ?
            <Select
              onChange={e => TopLevel9_Func(e)}
              options={getnumbers}
            /> : null}

        </div>
      </div>
      <div style={{ float: 'right', width: "11rem" }}>
        <div >
          {tab10Level10 ?
            <Select
              onChange={e => TopLevel10_Func(e)}
              options={getnumbers}
            /> : null}
        </div>
      </div>
      <br /><br />
      <div className="Tab-main">
        <div className="" style={{ float: 'left' }}>
          <Tab.Container defaultActiveKey="assets">
            <Row>
              <Col lg={2}>
                <Nav variant="pills" className="flex-column" >
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }} >
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="assets" className="mb-sm-3 mb-md-0" onClick={FetchTab1AllData}>
                      <br /> Assets
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="liabilities" className="mb-sm-3 mb-md-0" onClick={FetchTab2AllData}>
                      <br /> Libilties<br />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="capital" className="mb-sm-3 mb-md-0" onClick={FetchTab3AllData}>
                      <br />  Capital
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="turnover" className="mb-sm-3 mb-md-0" onClick={FetchTab4AllData}>
                      <br /> turnover
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="Sales" className="mb-sm-3 mb-md-0" onClick={FetchTab5AllData}>
                      <br />  Sales
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="Operatioing" className="mb-sm-3 mb-md-0" onClick={FetchTab6AllData}>
                      <br /> Operation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4.5rem' }} eventKey="income" className="mb-sm-3 mb-md-0" onClick={FetchTab7AllData}>
                      <br />  Income
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey="Taxation" className="mb-sm-3 mb-md-0" onClick={FetchTab8AllData}>
                      <br />  Taxation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey=" #9" className="mb-sm-3 mb-md-0" onClick={FetchTab9AllData}>
                      <br />  Tab9
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ background: 'black', borderRadius: '5px' }}>
                    <Nav.Link style={{ fontSize: '10px', height: '4rem' }} eventKey=" #10" className="mb-sm-3 mb-md-0" onClick={FetchTab10AllData}>
                      <br />  Tab10
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Tab.Content>
                <Tab.Pane className="assets" eventKey="assets" >
                  <Tab1
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tabName={tabName}
                    setGetFromTab1={setGetFromTab1}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func={Group_Mask_Func}
                    upperLevel={upperLevel}
                    tree={tree}
                    setName={setName}
                    expandDefault={expandDefault}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="liabilities" className="">
                  <Tab2
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab2Name={tab2Name}
                    setGetFromTab2={setGetFromTab2}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func2={Group_Mask_Func2}
                    tree={tree}
                    setTree={setTree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="capital" className="">
                  <Tab3
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab3Name={tab3Name}
                    setGetFromTab3={setGetFromTab3}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func3={Group_Mask_Func3}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="turnover" className="">
                  <Tab4
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab4Name={tab4Name}
                    setGetFromTab4={setGetFromTab4}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func4={Group_Mask_Func4}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="Sales" className="mb-3">
                  <Tab5
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab5Name={tab5Name}
                    setGetFromTab5={setGetFromTab5}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func5={Group_Mask_Func5}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="Operatioing" className="mb-3">
                  <Tab6
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab6Name={tab6Name}
                    setGetFromTab6={setGetFromTab6}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func6={Group_Mask_Func6}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="income" className="mb-3">
                  <Tab7
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab7Name={tab7Name}
                    setGetFromTab7={setGetFromTab7}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func7={Group_Mask_Func7}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="Taxation" className="">
                  <Tab8
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab8Name={tab8Name}
                    setGetFromTab8={setGetFromTab8}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func8={Group_Mask_Func8}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey=" #9" className="">
                  <Tab9
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab9Name={tab9Name}
                    setGetFromTab9={setGetFromTab9}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func9={Group_Mask_Func9}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey=" #10" className="">
                  <Tab10
                    seteditglaccountfield={seteditglaccountfield}
                    seteditglaccountfield2={seteditglaccountfield2}
                    setSearchNumber={setSearchNumber}
                    tab10Name={tab10Name}
                    setGetFromTab10={setGetFromTab10}
                    setupd={setupd}
                    setdispupd={setdispupd}
                    setgetnamefromchild={setgetnamefromchild}
                    setName1={setName1}
                    setShowDropDown1={setShowDropDown1}
                    setShowDropDown2={setShowDropDown2}
                    setCounter={setCounter}
                    setDbLevel={setDbLevel}
                    setUpperLevel={setUpperLevel}
                    setgettreelevel={setgettreelevel}
                    setActive={setActive}
                    Group_Mask_Func10={Group_Mask_Func10}
                    tree={tree}
                    setName={setName}
                  />
                </Tab.Pane>
              </Tab.Content>
              {/* <h1 eventKey="home">dsdsdsdsdsdsds</h1> */}
            </Row>
          </Tab.Container>
        </div>
      </div>
      <div class="Ch-login-div2">
        <div class="Ch-fields">
        </div>
        <br />
        <br />
        <br />
        <div class="form-check">
          <input class="CHOAinput1" type="radio" name="flexRadioDefault"
            id="flexRadioDefault1" onClick={InternalRadio} />
          <label class="form-check-label" for="flexRadioDefault1" >Title </label>

        </div>
        <div class="form-check" >
          <input class="CHOAinput1" type="radio" name="flexRadioDefault"
            id="flexRadioDefault2" onClick={ExternalRadio} />
          <label class="form-check-label" for="flexRadioDefault2">Active Account</label>

          {/* <div>  {ShowDropDown1 ? Disply() : null}</div> */}

          <div>  {ShowDropDown1 ? CheckFun() : null}</div>
          {/* <div>{ShowDropDown2 ? Disply(): null}</div> */}
          <div>{ShowDropDown2 ? CheckFun1() : null}</div>
          <br /><br />

        </div>

      </div>
    </div>

  );
}
export default Csstask;