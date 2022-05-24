import React, { useRef, useState, useEffect } from 'react';
import './CurrCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Table, Alert, Form } from 'react-bootstrap'
import request from 'request'
import { TableHead } from './Style';
import axios from 'axios';


const Input = ({ handleClose9,setShowModal9 }) => {

  const refsearch = useRef("");
  const refcode = useRef("");
  const refcurrency = useRef("");
  const refintercode = useRef("");
  const refinterdis = useRef("");
  const refhundred = useRef("");
  const refenglish = useRef("");
  const refenghundred = useRef("");
  const refiso = useRef("");
  const refinamount = useRef("");
  const refoutamount = useRef("");
  const refoutinper = useRef("");
  const refoutgoing = useRef(""); 
  const [getheadernameapi, setgetheadernameapi] = useState()
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false) 
  const [code, setCode] = useState("");
  const [currency, setCurrency] = useState("");
  const [internationalCode, setInternationalCode] = useState("");
  const [internationalDiscription, setInternationalDiscription] = useState("");
  const [hundredthName, setHundredthName] = useState("");
  const [english, setEnglish] = useState("");
  const [english_Hundredth_Name, setEnglish_Hundredth_Name] = useState("");
  const [ISO_Currency_Code, setISO_Currency_Code] = useState("");
  const [incoming_Amt_Diff_Allowed, setIncoming_Amt_Diff_Allowed] = useState("");
  const [outgoing_Amt_Diff_Allowed, setOutgoing_Amt_Diff_Allowed] = useState("");
  const [outcoming_Incoming_Percent, setOutcoming_Incoming_Percent] = useState("");
  const [Outgoing, setOutgoing] = useState("");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = React.useState(false);
  const [ButtonName, setButtonName] = React.useState("Add");
  const [HeaderData, setHeaderData] = useState();
  const [disply, setdisply] = useState(false);
  const [showdel, setshowdel] = React.useState(false) 
  // At initial state
  const [input, setInput] = useState({
    Code: "",
    Currency: "",
    International_Code: "",
    International_Description: "",
    Hundredth_Name: "",
    English: "",
    English_Hundredth_Name: "",
    ISO_Currency_Code: "",
    Incoming_Amt_Diff_Allowed: "",
    Outgoing_Amt_Diff_Allowed: "",
    Outcoming_Incoming_Percent: "",
    Outgoing: ""
  }) 
  const resetfunc = () => { 
    console.log("reset function"); 
    refsearch.current.value = "";
    refcode.current.value = "";
    refcurrency.current.value = "";
    refintercode.current.value = "";
    refinterdis.current.value = "";
    refhundred.current.value = "";
    refenglish.current.value = null;
    refenghundred.current.value = null;
    refiso.current.value = null;
    refinamount.current.value = null;
    refoutamount.current.value = null;
    refoutinper.current.value = null;
    refoutgoing.current.value = ""; 
    setSearchNumber("")
    setCode("")
    setCurrency("")
    setInternationalCode("")
    setInternationalDiscription("")
    setHundredthName("")
    setEnglish("")
    setEnglish_Hundredth_Name("")
    setISO_Currency_Code("")
    setIncoming_Amt_Diff_Allowed("")
    setOutgoing_Amt_Diff_Allowed("")
    setOutcoming_Incoming_Percent("")
    setOutgoing("") 
    setHeaderData(""); 
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
  // Add data function
  async function handleSubmit() {
    const newNote = {
      Code: code,
      Currency: currency,
      International_Code: internationalCode,
      International_Description: internationalDiscription,
      Hundredth_Name: hundredthName,
      English: english,
      English_Hundredth_Name: english_Hundredth_Name,
      ISO_Currency_Code: ISO_Currency_Code,
      Incoming_Amt_Diff_Allowed: incoming_Amt_Diff_Allowed,
      Outgoing_Amt_Diff_Allowed: outgoing_Amt_Diff_Allowed,
      Outcoming_Incoming_Percent: outcoming_Incoming_Percent,
      Outgoing: Outgoing
    }
    axios.post("http://localhost:3331/currency", newNote).then(res => {

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
        setMessage("")
        alert("Unable to data because account# already present. Try again")
        setError("Unable to data because account# already present. Try again")
      } else {
        console.log("other Error");
        setMessage("")
        setError("Unable to add data. Try again")
        alert("Unable to add data. Try again")
      } 
    })
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
        setgetheadernameapi(response.data[6].CustomName) 
      })
      .catch(function (error) {
      });
  }
  // show All data
  useEffect(() => {
    getheadername()  
  }, [])
  // Update function
  const updataData = () => {

    var axios = require('axios');
    var data = JSON.stringify({
      "Code": code,
      "Currency": currency,
      "International_Code": internationalCode,
      "International_Description": internationalDiscription,
      "Hundredth_Name": hundredthName,
      "English": english,
      "English_Hundredth_Name": english_Hundredth_Name,
      "ISO_Currency_Code": ISO_Currency_Code,
      "Incoming_Amt_Diff_Allowed": incoming_Amt_Diff_Allowed,
      "Outgoing_Amt_Diff_Allowed": outgoing_Amt_Diff_Allowed,
      "Outcoming_Incoming_Percent": outcoming_Incoming_Percent,
      "Outgoing": Outgoing
    });

    var config = {
      method: 'patch',
      url: `http://localhost:3331/currency/${SearchNumber}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setError("")
        setMessage("Data updated successfully")
        alert("Data updated successfully")
        console.log(JSON.stringify(response.data));
        setshowdel(false)
        setButtonName("Add")
        resetfunc()
      })
      .catch(function (error) {
        setMessage("")
        setError("Unable to update data. Try again")
        alert("Unable to update data. Try again")
        console.log(error);
      });
  }

  // input fields onChange functions
  const Code_Func = (e) => {
    setCode(e.target.value)
  }
  const Currency_Func = (e) => {
    setCurrency(e.target.value)
  }
  const International_Code_Func = (e) => {
    setInternationalCode(e.target.value)
  }
  const International_Description_Func = (e) => {
    setInternationalDiscription(e.target.value)
  }
  const Hundredth_Name_Func = (e) => {
    setHundredthName(e.target.value);
  }
  const English_Func = (e) => {
    setEnglish(e.target.value)
  }
  const English_Hundredth_Name_Func = (e) => {
    setEnglish_Hundredth_Name(e.target.value)
  }
  const ISO_Currency_Code_Func = (e) => {
    setISO_Currency_Code(e.target.value)
  }
  const Incoming_Amt_Diff_Allowed_Func = (e) => {
    setIncoming_Amt_Diff_Allowed(e.target.value);
  }
  const Outgoing_Amt_Diff_Allowed_Func = (e) => {
    setOutgoing_Amt_Diff_Allowed(e.target.value)

  }
  const Outcoming_Incoming_Percent_Func = (e) => {
    setOutcoming_Incoming_Percent(e.target.value)

  }
  const Outgoing_Func = (e) => {
    setOutgoing(e.target.value)

  }
  // Function On All and Filter Button
  const Find_FilterFunc = async () => {
    if (SearchNumber == "") {
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
      url: 'http://localhost:3331/currency',
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
      'url': `http://localhost:3331/currency/${SearchNumber}`,
      'headers': {
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response) {
      if (response.body == "") {
        setMessage("")
        setError("This data is not in present")
        alert("This data is not in present");
      } else {
        const data = response.body;
        const finalData = JSON.parse(data)
        setHeaderData(finalData)

        setCode(finalData.Code)
        setCurrency(finalData.Currency)
        setInternationalCode(finalData.International_Code)
        setInternationalDiscription(finalData.International_Description)
        setHundredthName(finalData.Hundredth_Name)
        setEnglish(finalData.English)
        setEnglish_Hundredth_Name(finalData.English_Hundredth_Name)
        setISO_Currency_Code(finalData.ISO_Currency_Code)
        setIncoming_Amt_Diff_Allowed(finalData.Incoming_Amt_Diff_Allowed)
        setOutgoing_Amt_Diff_Allowed(finalData.Outgoing_Amt_Diff_Allowed)
        setOutcoming_Incoming_Percent(finalData.Outcoming_Incoming_Percent)
        setOutgoing(finalData.Outgoing)

        // Set buttons
        setButtonName("Update")
        setshowdel(true)

        setMessage("");
        setError("");

      }
    });
  }
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {

    setHeaderData(item)
    setSearchNumber(item.Code)
    setCode(item.Code)
    setCurrency(item.Currency)
    setInternationalCode(item.International_Code)
    setInternationalDiscription(item.International_Description)
    setHundredthName(item.Hundredth_Name)
    setEnglish(item.English)
    setEnglish_Hundredth_Name(item.English_Hundredth_Name)
    setISO_Currency_Code(item.ISO_Currency_Code)
    setIncoming_Amt_Diff_Allowed(item.Incoming_Amt_Diff_Allowed)
    setOutgoing_Amt_Diff_Allowed(item.Outgoing_Amt_Diff_Allowed)
    setOutcoming_Incoming_Percent(item.Outcoming_Incoming_Percent)
    setOutgoing(item.Outgoing)

    setButtonName("Update")
    setshowdel(true)

    setError("")
    setMessage("")
  }
  //Modal cancel button function
  const handleClose = () => {
    setShow(false)
  }

  // Delete function
  const DeleteData = () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'delete',
      url: `http://localhost:3331/currency/${SearchNumber}`,
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
        resetfunc()
      })
      .catch(function (error) {
        console.log(error);
        setMessage("")
        setError("Unable to delete data. Try again")
        alert("Unable to delete data. Try again")
      });
  }
  const handleClose_func=()=>{
    setShowModal9(false);
  }
  //................End Backend Code...............//

  return (
    <>
      <div class="login-divbank" style={{ outline: 'none', border: 'none' }}>
        <div class="row">
          <div class="col form-group">
            <article class="card-body">
              <div class="form-group">
                <img
                  src="/Logo3.png"
                  height="80px"
                  width="100px"
                  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  alt="show"
                />
              </div>
              <div class="form-group">
                <h2 style={{ textAlign: 'center' }}>{getheadernameapi}</h2>
              </div>
              <br />
              <div class="bank_username"><a style={{ cursor: 'pointer' }} onClick={() => { Find_FilterFunc() }}> <svg class="svg-icon1 " viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg></a><input type="number" className="bank_user-input1" value={SearchNumber} ref={refsearch}
                placeholder="Search Code" onChange={e => { setSearchNumber(e.target.value) }} style={{ marginLeft: '1rem' }} /></div>
              <br />
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}

              <Form onSubmit={Submit_PatchFunc}>
                <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">

                  <table class="Table1">
                    <thead>

                      <th>#</th>
                      <th>Code</th>
                      <th>Currency</th>
                      <th>International Code</th>
                      <th>International Description</th>
                      <th>Hundredth Name</th>
                      <th>English</th>
                      <th>English Hundredth Name</th>
                      <th>ISO Currency Code</th>
                      <th>Incoming Amount Difference Allowed</th>
                      <th>Outgoing Amount Difference Allowed</th>
                      <th>Outgoing Incoming Percent Difference Allowed</th>
                      <th>Outgoing</th>

                    </thead>
                    <tbody >
                      <tr>
                        <td></td>
                        <td><input type="number" required name="Code" placeholder="Code" className=" Curr_user-input" value={code || HeaderData && HeaderData.Code} onChange={Code_Func} ref={refcode} ></input></td>
                        <td><input type="text" required name="Currency" placeholder="Currency" className="Curr_user-input" value={currency || HeaderData && HeaderData.Currency} onChange={Currency_Func} ref={refcurrency}></input></td>
                        <td><input type="number" required="required" placeholder="International_Code" name="International_Code" className="Curr_user-input" value={internationalCode || HeaderData && HeaderData.International_Code} onChange={International_Code_Func} ref={refintercode}></input></td>
                        <td><input type="text" required name="International_Description" placeholder="International_Description" className="Curr_user-input" value={internationalDiscription || HeaderData && HeaderData.International_Description} onChange={International_Description_Func} ref={refinterdis} ></input></td>
                        <td><input type="text" required name="Hundredth_Name" placeholder="Hundredth_Name" className="Curr_user-input" value={hundredthName || HeaderData && HeaderData.Hundredth_Name} onChange={Hundredth_Name_Func} ref={refhundred}></input></td>
                        <td><input type="text" required name="English" placeholder="English" className="Curr_user-input" value={english || HeaderData && HeaderData.English} onChange={English_Func} ref={refenglish}></input></td>
                        <td><input type="text" required name="English_Hundredth_Name" placeholder="English_Hundredth_Name" className="Curr_user-input" value={english_Hundredth_Name || HeaderData && HeaderData.English_Hundredth_Name} onChange={English_Hundredth_Name_Func} ref={refenghundred} ></input></td>
                        <td>
                          <div className="Currdropdown">
                            <div class="Currselect-style" >
                              <select placeholder="Select" required="required" name="ISO_Currency_Code" value={ISO_Currency_Code || HeaderData && HeaderData.ISO_Currency_Code} onChange={ISO_Currency_Code_Func} style={{ marginTop: '1rem' }} ref={refiso}>
                                <option class="Curr_user-input" value="">Select..</option>
                                <option class="Curr_user-input" value="USD">USD</option>
                                <option class="Curr_user-input" value="EUR">EUR</option>
                                <option class="Curr_user-input" value="NZD">NZD</option>
                              </select>
                            </div>
                          </div>
                        </td>

                        <td><input type="number" required name="Incoming_Amt_Diff_Allowed" placeholder="Incoming_Amt_Diff_Allowed" value={incoming_Amt_Diff_Allowed || HeaderData && HeaderData.Incoming_Amt_Diff_Allowed} onChange={Incoming_Amt_Diff_Allowed_Func} className="Curr_user-input" ref={refinamount} ></input></td>
                        <td><input type="number" required name="Outgoing_Amt_Diff_Allowed" placeholder="Outgoing_Amt_Diff_Allowed" value={outgoing_Amt_Diff_Allowed || HeaderData && HeaderData.Outgoing_Amt_Diff_Allowed} onChange={Outgoing_Amt_Diff_Allowed_Func} className="Curr_user-input" ref={refoutamount} ></input></td>
                        <td><input type="text" required name="Outcoming_Incoming_Percent" placeholder="Outcoming_Incoming_Percent" value={outcoming_Incoming_Percent || HeaderData && HeaderData.Outcoming_Incoming_Percent} onChange={Outcoming_Incoming_Percent_Func} className="Curr_user-input" ref={refoutinper} ></input></td>
                        <td><input type="text" required name="Outgoing" placeholder="Outgoing" value={Outgoing || HeaderData && HeaderData.Outgoing} onChange={Outgoing_Func} className="Curr_user-input" ref={refoutgoing} ></input></td>



                      </tr>
                      <Modal className="modal" show={show} onHide={handleClose} size="lg">
                         <div className="row">
                          <br />
                          <div class="col-lg-6 col-md-6 col-sm-6 modal-table" >
                            <div class="form-group">
                              <h3 style={{ textAlign: 'center' }}>Currency List</h3>
                            </div>
                            {data && (
                              <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">
                                <div class="form-group">
                                  <Table bordered class="Table1">
                                    <TableHead>
                                      <tr>
                                        <th>#</th>
                                        <th>Code</th>
                                        <th>Currency</th>
                                        <th>International Code</th>
                                        <th>ISO Currency Code</th>
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
                                          <td>{item.Currency}</td>
                                          <td>{item.International_Code}</td>
                                          <td>{item.ISO_Currency_Code}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                            )}
                            <br />
                            <button class='DR-cancel-button' onClick={handleClose} >Cancel</button>
                            <br /><br />
                          </div>
                        </div>
                        {/* </div> */}
                        {/* </Modal.Body>
                              <Modal.Footer>
                                <Button variant='danger' onClick={handleClose}>
                                  Cancel
                          </Button>
                              </Modal.Footer> */}
                      </Modal>
                    </tbody>
                  </table>
                </div>
                <br />

                <br />
                <button style={{ float: 'left' }} className="DR-add-button" type='submit'>{ButtonName}</button>
              </Form>
              {showdel ? <button class="DR-add-button" onClick={() => { DeleteData() }}> Delete </button> : null}

              <button className="DR-cancel-button" onClick={handleClose_func} >Cancel</button>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;