import React, { useRef, useState, useEffect } from 'react';
import { Button, Modal, Table, Alert, Form } from 'react-bootstrap'
import { TableHead } from './Style';
import './Select.css'
import axios from 'axios'
import request from 'request'
import { useHistory } from "react-router-dom"
//import { Code } from '@material-ui/icons';

const HomePage = ({ handleClose8 , setShowModal8}) => {
  const history = useHistory()

  const refcode = useRef("");
  const refname = useRef("");
  const refaddress = useRef("");
  const refstartdate = useRef("");
  const refenddate = useRef("");
  const refcost = useRef("");
  // const refactive = useRef("");

  const [getheadernameapi, setgetheadernameapi] = useState()
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [disply, setdisply] = useState(false);
  const [disply2, setdisply2] = useState(false);
  const [disply3, setdisply3] = useState(false);
  const [code, setCode] = useState("");
  const [getName, setgetName] = useState("");
  const [address, setAddress] = useState("")
  const [CurrentRadioValue, setCurrentRadioValue] = React.useState("")
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [HeaderData, setHeaderData] = useState("");
  const [show, setShow] = React.useState(false)
  const [ButtonName, setButtonName] = React.useState("Add");
  const [SearchNumber, setSearchNumber] = React.useState("");
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [isChecked, setIsChecked] = useState(false);
  const [showdel, setshowdel] = React.useState(false)

  const [input, setInput] = useState({
    Code: "",
    Name: "",
    ProjectType: "",
    CostAllocation: "",
    StartDate: "",
    EndDate: "",
    Active: "",
    Address: ""
  })

  const resetfunc = () => {

    console.log("reset function");

    refcode.current.value = "";
    refname.current.value = "";
    refaddress.current.value = "";
    refstartdate.current.value = "";
    refenddate.current.value = "";
    refcost.current.value = "";
    // refactive.current.value = "";

    setdisply(false);
    setdisply2(false);
    setdisply3(false);
    setIsChecked(false);
    setShowDropDown2(false);
    setShowDropDown2(false);
    setSearchNumber("");
    setCode("");
    setgetName("");
    setAddress("");
    setStartDate("");
    setEndDate("");
    setValue("");
    setCurrentRadioValue("");

    setHeaderData("");

  }

  // Update function
  const updataData = () => {

    // console.log(HeaderData.Code);
    // console.log(SearchNumber);

    if (SearchNumber != HeaderData.Code) {
      alert("Code number cannot be updated")
    } else {
      var axios = require('axios');
      var data = JSON.stringify({
        "CostAllocation": value,
        "Code": code,
        "Name": getName,
        "ProjectType": CurrentRadioValue,
        "StartDate": startDate,
        "EndDate": endDate,
        "Active": isChecked,
        "Address": address
      });

      var config = {
        method: 'patch',
        url: `http://localhost:3331/oprj/${SearchNumber}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          setError("")
          setMessage("Data updated successfully")
          alert("Data updated successfully")

          setshowdel(false);
          setButtonName("Add");

          resetfunc();
        })
        .catch(function (error) {
          setMessage("")
          setError("Unable to update data. Try again")
          alert("Unable to update data. Try again")
          console.log(error);
        });
    }

    // var request = require('request');
    // var options = {
    //   'method': 'PATCH',
    //   'url': `http://localhost:3331/oprj/${SearchNumber}`,
    //   'headers': {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "CostAllocation": value,
    //     "Code": code,
    //     "Name": getName,
    //     "ProjectType": CurrentRadioValue,
    //     "StartDate": startDate,
    //     "EndDate": endDate,
    //     "Active": disply3,
    //     "Address": address
    //   })
    // };
    // request(options, function (error, response) {
    //   if (SearchNumber == HeaderData.Code) {
    //     setMessage("Data updated successfully")
    //     alert("Data updated successfully")
    //   } else {
    //     setError("Enter the correct Code in search box that you want to update")
    //     alert("Enter the correct Code in search box that you want to update")
    //   }
    //   if (error) throw new Error(error);
    // });
    // window.location.reload(false)
  }
  // Add data function
  async function handleSubmit() {

    const newNote = {
      Code: code,
      Name: getName,
      ProjectType: CurrentRadioValue,
      CostAllocation: value,
      StartDate: startDate,
      EndDate: endDate,
      Active: isChecked,
      Address: address
    }

    axios.post("http://localhost:3331/oprj", newNote).then(res => {

      console.log(res);
      setError("")
      setMessage("Data saved successfully")
      alert("Data saved successfully")
      resetfunc()

    }).catch(error => {
      console.log(error.response.data.msg);
      console.log(error.response.data.msg.code);

      if (error.response.data.msg.code == 11000) {
        console.log("duplicate key Error");
        alert("Unable to add data because account# already present")
        setError("Unable to add data because account# already present")
        setMessage("")
      } else {
        console.log("other Error");
        setMessage("")
        setError("Unable to add data. Try again")
        alert("Unable to add data. Try again")
      }

    })


  }

  //Modal cancel button function
  const handleClose = () => {
    setShow(false)
  }
  //Submit Patch func
  const Submit_PatchFunc = (e) => {

    e.preventDefault();

    if (ButtonName === "Add") {
      handleSubmit()
    } else if (ButtonName !== "Add") {
      updataData()
    }
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
        setgetheadernameapi(response.data[2].CustomName)

      })
      .catch(function (error) {
      });
  }
  // show All data
  useEffect(() => {
    getheadername()

  }, [])

  //Checkbox function
  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    setIsChecked(e.target.value);
    if (isChecked === 'true') {
      setdisply3(false)
      setIsChecked('false')
    } else {
      setdisply3(true)
      setIsChecked('true')
    }
  };
  // Date Function
  const EndDate_Func = (e) => {
    setEndDate(e.target.value)
  }
  const StartDate_Func = (e) => {
    setStartDate(e.target.value)
  }
  //Code Name and Address get Value function
  const Code_Func = (e) => {
    setCode(e.target.value)
  }
  const Name_Func = (e) => {
    setgetName(e.target.value)
  }
  const Address_Func = (e) => {
    setAddress(e.target.value)
  }
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(item)
    setSearchNumber(item.Code)
    setCode(item.Code)
    setgetName(item.Name)
    setAddress(item.Address)
    setStartDate(item.StartDate)
    setEndDate(item.EndDate)
    setValue(item.CostAllocation)
    setIsChecked(item.Active)
    setCurrentRadioValue(item.ProjectType)

    setError("")
    setMessage("")

    setButtonName("Update")
    setshowdel(true)

    // For set Checkbox value on card
    if (item.Active === 'true') {
      setdisply3(true)
    } else {
      setdisply3(false)
    }
    if (item.CostAllocation === "Project") {
      setdisply2(true)
      setdisply(false)
      setShowDropDown1(false);
      setShowDropDown2(true)
    } else {
      setdisply(true)
      setShowDropDown1(true);
      setShowDropDown2(false)
      setdisply2(false)
    }
  }
  // Radio Button Function
  const ExternalRadio = (e) => {
    setdisply(false)
    setValue(undefined)
    setCurrentRadioValue(e.target.value);
    setShowDropDown1(false);
    setShowDropDown2(true)
  }
  const InternalRadio = (e) => {
    setdisply2(false)
    setCurrentRadioValue(e.target.value);
    setShowDropDown1(true);
    setShowDropDown2(false)
  }
  //Dropdown Functions
  const DropDownValue = (e) => {
    setValue(e.target.value)
  }
  //Internal dropdown
  const DropDown = () =>
    <div><label>CostAllocation</label>
      <div className="OPRJ-dropdown">
        <div class="OPRJ-select-style">
          <select placeholder="Select" name="internalDropdown" value={value} defaultValue={HeaderData && HeaderData.CostAllocation} ref={refcost}>
            <option selected>Select Type </option>
            <option class="abc" value="I">Import</option>
            <option class="abc" value="E">Export</option>
            <option class="abc" value="P">Project</option>
          </select>
        </div>
      </div>
    </div>
  //External dropdown
  const DropDown2 = () =>
    <div ><label>CostAllocation</label>
      <div className="OPRJ-dropdown">
        <div class="OPRJ-select-style">
          <select placeholder="Select" name="externalDropdown" value={value} defaultValue={HeaderData && HeaderData.CostAllocation} ref={refcost}>
            <option>Select Type </option>
            <option class="abc" value="Project">Project</option>
          </select>
        </div>
      </div> </div>
  // Function On All and Filter Button
  const Find_FilterFunc = async () => {
    if (SearchNumber === "") {
      AllData()
    } else {
      FilterData()
    }
  }
  //Get all Data from Mongodb
  const AllData = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: 'http://localhost:3331/oprj',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        setData(response.data)

      })
      .catch(function (error) {
      });
    setShow(true)
  }
  //Get Filter data from Mongodb
  const FilterData = () => {
    var options = {
      'method': 'GET',
      'url': `http://localhost:3331/oprj/${SearchNumber}`,
      'headers': {
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response) {
      if (response.body == "") {
        setMessage("")
        setError("This Code is not present")
        alert("This Code is not present");
      } else {

        if (error) throw new Error(error);
        const data = response.body;
        const finalData = JSON.parse(data)
        setHeaderData(finalData)

        setCode(finalData.Code)
        setgetName(finalData.Name)
        setAddress(finalData.Address)
        setStartDate(finalData.StartDate)
        setEndDate(finalData.EndDate)
        setValue(finalData.CostAllocation)
        setIsChecked(finalData.Active)
        setCurrentRadioValue(finalData.ProjectType)

        setError("")
        setMessage("")

        // Set buttons
        setButtonName("Update")
        setshowdel(true)

        //for set check box value on card
        if (finalData.Active === 'true') {
          setdisply3(true)
        } else {
          setdisply3(false)
        }
        // for set radio button value on card
        if (finalData.CostAllocation === "Project") {
          setdisply2(true)
          setShowDropDown2(true);
          setShowDropDown1(false);
          setdisply(false)
        }
        else {
          setdisply(true)
          setShowDropDown1(true);
          setShowDropDown2(false);
          setdisply2(false)
        }

      }
    });
  }
//Show Model
const ShowModel=()=>{
  setShowModal8(false)
}
  // Delete function
  const DeleteData = () => {
    if (SearchNumber != HeaderData.Code) {
      alert("Unable to delete, Correct your code in search bar")
    } else {
      var axios = require('axios');
      var data = '';
      var config = {
        method: 'delete',
        url: `http://localhost:3331/oprj/${SearchNumber}`,
        headers: {},
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setError("")
          setMessage("Data deleted successfully")
          alert("Data deleted successfully")
          setshowdel(false)
          setButtonName("Add")
          resetfunc();
        })
        .catch(function (error) {
          console.log(error);
          setMessage("")
          setError("Unable to delete data. Try again")
          alert("Unable to delete data. Try again")
        });
    }
  }

  return (
    <>
      <div class="login-divbank">
        <div class="row">
          <div class="col form-group">

            <div class="lcol">

              <article class="card-body">

                <Form onSubmit={Submit_PatchFunc}>
                  <div class="OPRJ-fields">

                    <img
                      src="/Logo3.png"
                      height="80px"
                      width="100px"
                      style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                      alt="show"
                    />
                    <h3 style={{ textAlign: 'center' }}>{getheadernameapi}</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}


                    <label>Code</label>
                    <div class="bank_username" ><a style={{ cursor: 'pointer' }} onClick={() => { Find_FilterFunc() }}>
                      {/* // disabled={loading} > */}
                      <svg class="OPRJ-svg-icon1" viewBox="0 0 20 20">
                        <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                      </svg></a>
                      <input type="number" class="bank_user-input1" name="Code"
                        value={code || HeaderData && HeaderData.Code} ref={refcode}
                        placeholder="Type your Code"
                        required onChange={e => { setSearchNumber(e.target.value); Code_Func(e) }}
                        style={{ marginLeft: '1rem',marginTop:'0rem' }} />
                    </div>
                    <br/>
                    <div>
                      <label className="OPRJ-Label" >Name</label>
                      <br />
                      <div class="DR_box1"><input type="text" class="OPRJ-user-input1" name='Name'
                        value={getName || HeaderData && HeaderData.Name}
                        ref={refname} placeholder="Name"
                        onChange={(e) => { Name_Func(e) }}
                        required />
                      </div>
                    </div>
                    <div>
                      <div class="edate">
                        <label className="DR-Label1">Address</label>
                      </div>
                      <div class="DR_box2"><svg class="OPRJ-svg-icon" viewBox="0 0 20 20">
                        <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                      </svg>
                        <input type="text" class="OPRJ-user-inputN" placeholder="Address" name="Address" value={address || HeaderData && HeaderData.Address} ref={refaddress}
                          required onChange={(e) => { Address_Func(e) }} />
                      </div>
                    </div>
                    <br/>
                    <div>
                      <label className="OPRJ-Label" >Start Date</label>
                      <br />
                      <div class="DR_box1"><input type="date" class="OPRJ-user-input1" name='PostingDate'
                        value={startDate || HeaderData && HeaderData.StartDate}
                        ref={refstartdate}
                        onChange={StartDate_Func}
                        required />
                      </div>
                    </div>
                    <div>
                      <div class="edate">
                        <label className="DR-Label1">End Date</label>
                      </div>
                      <div class="DR_box2"><input type="date" class="OPRJ-user-input1"
                        name='DueDate'
                        value={endDate || HeaderData && HeaderData.EndDate}
                        ref={refenddate}
                        onChange={EndDate_Func}
                        required />
                      </div>
                    </div>
                  </div>
                  <Modal className="modal" show={show} onHide={handleClose}   size="lg">
                    {/* <Modal.Header closeButton>
                        <Modal.Title Style={{marginLeft:'10rem'}} id="example-modal-sizes-title-lg">Project List</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>               */}
                    {/* <div style={{ background: 'rgb(185 208 227)', width: '40rem', height: 'auto', borderRadius: "1rem" }} > */}
                    <div className="row">
                      <br />
                      <div class="col-lg-6 col-md-6 col-sm-6 modal-table" >
                        <div class="form-group">
                          <h3 style={{ textAlign: 'center' }}>Project List</h3>
                        </div>
                        {data && (
                          <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                            <div class="form-group">
                              <Table bordered class="Table1">
                                <TableHead>
                                  <tr>
                                    <th>#</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>ProjectType</th>
                                    <th>CostAllocation</th>
                                  </tr>
                                </TableHead>
                                <tbody style={{ textAlign: 'center' }}>
                                  {data.map((item, index) => (
                                    <tr key={`${index}`} >
                                      <td>
                                        {index + 1}
                                        <input
                                          type='radio'
                                          name="anynum" id="1"
                                          onChange={() => { getvaluefromcheckbox(item, index) }}
                                          checked={item.isSelected}
                                        />
                                      </td>
                                      <td>{item.Code}</td>
                                      <td>{item.Name}</td>
                                      <td>{item.ProjectType}</td>
                                      <td>{item.CostAllocation}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        )}
                        <button className="DR-cancel-button" onClick={handleClose} >Cancel</button>
                        <br />
                        <br />
                      </div>
                      {/* </Modal.Body>
                      <Modal.Footer>
                        <Button variant='danger' onClick={handleClose}>
                          Cancel
                    
                      </Modal.Footer> */}
                    </div>
                  </Modal>
                  <div required name="ProjectType" value={CurrentRadioValue}>
                    <label>Project Type</label><br />
                    <input id="inlineRadio1" className="Radio" type="radio" name="internal"
                      value="i"
                      onClick={InternalRadio}
                      checked={CurrentRadioValue === 'i' || disply} />
                    <label>Internal </label>
                    <input id="inlineRadio2" className="OPRJ--Radio1" type="radio" name="external"
                      value="e"
                      onClick={ExternalRadio}
                      checked={CurrentRadioValue === 'e' || disply2}
                      style={{ marginLeft: "28%" }} />
                    <label>External </label>
                  </div>
                  <div>
                    <div class="form-check form-check-inline" name="CostAllocation"
                      defaultValue={HeaderData && HeaderData.CostAllocation}
                      value={value} onChange={DropDownValue}>
                      {showDropDown1 ? < DropDown /> : null}
                      {showDropDown2 ? < DropDown2 /> : null}
                    </div>
                  </div>
                  <div style={{ float: 'left' }}>
                    <input type="checkbox" id="Checked"
                      name="Active"
                      value={disply3}
                      checked={disply3}
                      onChange={handleOnChange}
                      style={{ marginLeft: '' }} /> <label for="rememberMe">Active</label>
                  </div>
                  <br />
                  <br />
                  <button class="DR-add-button" type="submit" style={{ float: 'left' }}>{ButtonName}</button>

                </Form>
                {showdel ? <button class="DR-add-button" onClick={() => { DeleteData() }}> Delete </button> : null}
                <button class="DR-cancel-button" onClick={ShowModel}>Cancel</button>
                <br />
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;