import React, { useRef, useState, useEffect } from 'react';
import './TaxCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Table, Alert, Form } from 'react-bootstrap'
import { TableHead } from './Style';
import request from 'request'
import axios from 'axios';

const Input = ({ setShowModal2 }) => {

  const refsearch = useRef("");
  const refcode = useRef("");
  const refname = useRef("");
  // const refinactive = useRef("");
  const refcatagory = useRef("");
  // const refreverse = useRef("");
  const refeffective = useRef("");
  const refrate = useRef("");
  const refnonred = useRef("");
  const reftax = useRef("");
  const refacquisi = useRef("");
  const refdeffer = useRef("");
  const refnondeduct = useRef("");
  const refgroup = useRef("");

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [inActive, setInActive] = useState(false);
  const [category, setCategory] = useState("");
  const [acquisition_Reverse, setAcquisition_Reverse] = useState(false);
  const [effective_From, setEffective_From] = useState("");
  const [rate_Percent, setRate_Percent] = useState("");
  const [non_Reduction_Percentage, setNon_Reduction_Percentage] = useState("");
  const [tax_Account, setTax_Account] = useState("");
  const [acquisition_Tax_Account, setAcquisition_Tax_Account] = useState("");
  const [deferred_Tax_Account, setDeferred_Tax_Account] = useState("");
  const [non_Deduct_Account, setNon_Deduct_Account] = useState("");
  const [group_Description, setGroup_Description] = useState("");
  const [SearchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState("");
  const [show, setShow] = React.useState(false);
  const [ButtonName, setButtonName] = React.useState("Add");
  const [HeaderData, setHeaderData] = useState("");
  const [disply, setdisply] = useState(false);
  const [disply2, setdisply2] = useState(false);
  const [showdel, setshowdel] = React.useState(false)


  // At initial state
  const [input, setInput] = useState({
    Code: "",
    Name: "",
    InActive: "",
    Category: "",
    Acquisition_Reverse: "",
    Effective_From: "",
    Rate_Percent: "",
    Non_Reduction_Percentage: "",
    Tax_Account: "",
    Acquisition_Tax_Account: "",
    Deferred_Tax_Account: "",
    Non_Deduct_Account: "",
    Group_Description: ""
  })

  const resetfunc = (e) => {

    console.log("reset function");

    setSearchNumber("");
    setCode("");
    setName("");
    setInActive(false);
    setdisply(false);
    setCategory("");
    setAcquisition_Reverse(false);
    setdisply2(false);
    setEffective_From("");
    setRate_Percent("");
    setNon_Reduction_Percentage("");
    setTax_Account("")
    setAcquisition_Tax_Account("");
    setDeferred_Tax_Account("");
    setNon_Deduct_Account("");
    setGroup_Description("");

    refsearch.current.value = "";
    refcode.current.value = "";
    refname.current.value = "";
    refcatagory.current.value = "";
    refeffective.current.value = null;
    refrate.current.value = null;
    refnonred.current.value = null;
    reftax.current.value = null;
    refacquisi.current.value = null;
    refdeffer.current.value = null;
    refnondeduct.current.value = null;
    refgroup.current.value = null;

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
  async function handleSubmit(e) {
    const newNote = {
      Code: code,
      Name: name,
      InActive: inActive,
      Category: category,
      Acquisition_Reverse: acquisition_Reverse,
      Effective_From: effective_From,
      Rate_Percent: rate_Percent,
      Non_Reduction_Percentage: non_Reduction_Percentage,
      Tax_Account: tax_Account,
      Acquisition_Tax_Account: acquisition_Tax_Account,
      Deferred_Tax_Account: deferred_Tax_Account,
      Non_Deduct_Account: non_Deduct_Account,
      Group_Description: group_Description
    }


    axios.post("http://localhost:3331/tax", newNote).then(res => {

      console.log(res);
      setError("")
      setMessage("Data saved successfully")
      alert("Data saved successfully")
      resetfunc()

    }).catch(error => {
      console.log(error.response.data.msg);
      console.log(error.response.data.msg.code);
      if (error.response.data.msg.code == 11000) {
        setMessage("")
        console.log("duplicate key Error");
        setError("Unable to data because Code already present. Try again")
        alert("Unable to data because this Code already present. Try again")
      } else {
        console.log("other Error");
        setMessage("")
        setError("Unable to add data. Try again")
        alert("Unable to add data. Try again")
      }

    })

  }
  // Update function
  const updataData = (e) => {

    var axios = require('axios');
    var data = JSON.stringify({
      "Code": code,
      "Name": name,
      "InActive": disply,
      "Category": category,
      "Acquisition_Reverse": disply2,
      "Effective_From": effective_From,
      "Rate_Percent": rate_Percent,
      "Non_Reduction_Percentage": non_Reduction_Percentage,
      "Tax_Account": tax_Account,
      "Acquisition_Tax_Account": acquisition_Tax_Account,
      "Deferred_Tax_Account": deferred_Tax_Account,
      "Non_Deduct_Account": non_Deduct_Account,
      "Group_Description": group_Description
    });

    var config = {
      method: 'patch',
      url: `http://localhost:3331/tax/${SearchNumber}`,
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

        // setshowdel(false)
        setButtonName("Add")

        resetfunc();


      })
      .catch(function (error) {
        setMessage("")
        setError("Unable to update data. Try again")
        alert("Unable to update data. Try again")
        console.log(error);
      });


    // var request = require('request');
    // var options = {
    //   'method': 'PATCH',
    //   'url': `http://localhost:3331/tax/${SearchNumber}`,
    //   'headers': {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "Code": code,
    //     "Name": name,
    //     "InActive": disply,
    //     "Category": category,
    //     "Acquisition_Reverse": disply2,
    //     "Effective_From": effective_From,
    //     "Rate_Percent": rate_Percent,
    //     "Non_Reduction_Percentage": non_Reduction_Percentage,
    //     "Tax_Account": tax_Account,
    //     "Acquisition_Tax_Account": acquisition_Tax_Account,
    //     "Deferred_Tax_Account": deferred_Tax_Account,
    //     "Non_Deduct_Account": non_Deduct_Account,
    //     "Group_Description": group_Description
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

  // input fields onChange functions
  const Code_Func = (e) => {
    setCode(e.target.value)
  }
  const Name_Func = (e) => {
    setName(e.target.value)
  }
  const Inactive_Func = (e) => {
    setInActive(e.target.value)
    setInActive(!inActive);
    if (inActive === 'true') {
      setdisply(false)
      setInActive('false')
    } else {
      setdisply(true)
      setInActive('true')
    }

  }
  const Category_Func = (e) => {
    setCategory(e.target.value)
  }
  const Acquisition_Reverse_Func = (e) => {
    setAcquisition_Reverse(e.target.value);
    setAcquisition_Reverse(!acquisition_Reverse);
    if (acquisition_Reverse === 'true') {
      setdisply2(false)
      setAcquisition_Reverse('false')
    } else {
      setdisply2(true)
      setAcquisition_Reverse('true')
    }

  }
  const Effective_From_Func = (e) => {
    setEffective_From(e.target.value)
  }
  const Rate_Percent_Func = (e) => {
    setRate_Percent(e.target.value)
  }
  const Non_Reduction_Percentage_Func = (e) => {
    setNon_Reduction_Percentage(e.target.value)
  }
  const Tax_Account_Func = (e) => {
    setTax_Account(e.target.value);
  }
  const Acquisition_Tax_Account_Func = (e) => {
    setAcquisition_Tax_Account(e.target.value)

  }
  const Deferred_Tax_Account_Func = (e) => {
    setDeferred_Tax_Account(e.target.value)

  }
  const Non_Deduct_Account_Func = (e) => {
    setNon_Deduct_Account(e.target.value)

  }
  const Group_Description_Func = (e) => {
    setGroup_Description(e.target.value)
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
      url: 'http://localhost:3331/tax',
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
      'url': `http://localhost:3331/tax/${SearchNumber}`,
      'headers': {
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response) {
      if (response.body == "") {
        setError("This Account number is not in database")
        alert("This Account number is not in database");
      } else {

        if (error) throw new Error(error);
        const data = response.body;
        const finalData = JSON.parse(data)
        setHeaderData(finalData)

        setCode(finalData.Code);
        setName(finalData.Name);
        setInActive(finalData.InActive);
        setCategory(finalData.Category);
        setAcquisition_Reverse(finalData.Acquisition_Reverse);
        setEffective_From(finalData.Effective_From);
        setRate_Percent(finalData.Rate_Percent);
        setNon_Reduction_Percentage(finalData.Non_Reduction_Percentage);
        setTax_Account(finalData.Tax_Account);
        setAcquisition_Tax_Account(finalData.Acquisition_Tax_Account);
        setDeferred_Tax_Account(finalData.Deferred_Tax_Account);
        setNon_Deduct_Account(finalData.Non_Deduct_Account);
        setGroup_Description(finalData.Group_Description);

        // Set buttons
        setButtonName("Update")
        setshowdel(true)

        setError("")
        setMessage("")

        //for set check box value on card
        if (finalData.InActive === 'true') {
          setdisply(true)
        } else {
          setdisply(false)
        }

        if (finalData.Acquisition_Reverse === 'true') {
          setdisply2(true)
        } else {
          setdisply2(false)
        }

      }

    });
  }
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(item)
    setButtonName("Update")
    setshowdel(true)
    setSearchNumber(item.Code)

    setCode(item.Code);
    setName(item.Name);
    setInActive(item.InActive);
    setCategory(item.Category);
    setAcquisition_Reverse(item.Acquisition_Reverse);
    setEffective_From(item.Effective_From);
    setRate_Percent(item.Rate_Percent);
    setNon_Reduction_Percentage(item.Non_Reduction_Percentage);
    setTax_Account(item.Tax_Account);
    setAcquisition_Tax_Account(item.Acquisition_Tax_Account);
    setDeferred_Tax_Account(item.Deferred_Tax_Account);
    setNon_Deduct_Account(item.Non_Deduct_Account);
    setGroup_Description(item.Group_Description);

    setError("")
    setMessage("")

    //for set check box value on card
    if (item.InActive === 'true') {
      setdisply(true)
    } else {
      setdisply(false)
    }

    if (item.Acquisition_Reverse === 'true') {
      setdisply2(true)
    } else {
      setdisply2(false)
    }
  }
  //Modal cancel button function
  const handleClose = () => {
    setShow(false)
  }

  // Delete function
  const DeleteData = (e) => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'delete',
      url: `http://localhost:3331/tax/${SearchNumber}`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setshowdel(false)
        setButtonName("Add")
        setError("")
        setMessage("Data deleted successfully")
        alert("Data deleted successfully")
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
    setShowModal2(false)
  }
  //................End Backend Code...............


  return (
    <>
      <div class="login-divbank" style={{ outline: 'none', border: 'none' }}>
        <div class="row">
          <div class="col form-group">
            <div class="lcol">
              <article class="card-body">
                <img
                  src="/Logo3.png"
                  height="80px"
                  width="100px"
                  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  alt="show"
                />
                <h2 style={{ textAlign: 'center' }}>Tax Details</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <br />
                <div class="bank_username" >
                  <a style={{ cursor: 'pointer' }} onClick={() => { Find_FilterFunc() }}>
                    <svg class="svg-icon1 " viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>
                  </a>
                  <input type="number" onChange={e => { setSearchNumber(e.target.value) }}
                    className="bank_user-input1" style={{ marginLeft: '1rem' }} placeholder="Code" value={SearchNumber} ref={refsearch} />
                </div>
                <br />
                <Form onSubmit={Submit_PatchFunc}>
                  <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">

                    <table class="Table1">
                      <thead  >

                        <th>#</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Inactive</th>
                        <th>Category</th>
                        <th>Acquisition/Reverse</th>
                        <th>Effective From</th>
                        <th>Rate Percent</th>
                        <th>Non Reduction Percentage</th>
                        <th>Tax Account</th>
                        <th>Acquisition Tax Account</th>
                        <th>Deferred Tax Account</th>
                        <th>Non Deduct Account</th>
                        <th>Group Description</th>

                      </thead>
                      <tbody >
                        <tr>
                          <td></td>
                          <td><input placeholder="Code" type="number" required name="Code" value={code || HeaderData && HeaderData.Code} onChange={Code_Func} className="Tax_user-input" ref={refcode}  ></input></td>

                          <td><input placeholder="Name" type="text" required name="Name" value={name || HeaderData && HeaderData.Name} onChange={Name_Func} className="Tax_user-input" ref={refname}  ></input></td>

                          <td><input type="checkbox" name="InActive" value={disply} checked={disply} onChange={Inactive_Func} className="Tax_user-input"  ></input>  </td>

                          <td><input placeholder="Category" type="text" required name="Category" value={category || HeaderData && HeaderData.Category} onChange={Category_Func} className="Tax_user-input" ref={refcatagory} ></input></td>

                          <td><input type="checkbox" name="Acquisition_Reverse" value={disply2} checked={disply2} onChange={Acquisition_Reverse_Func} className="Tax_user-input"  ></input>  </td>

                          <td><input type="date" required name="Effective_From" value={effective_From || HeaderData && HeaderData.Effective_From} onChange={Effective_From_Func} className="Tax_user-input" ref={refeffective} ></input>   </td>

                          <td><input placeholder="Rate Percent" type="text" required name="Rate_Percent" value={rate_Percent || HeaderData && HeaderData.Rate_Percent} onChange={Rate_Percent_Func} className="Tax_user-input" ref={refrate} ></input></td>

                          <td><input placeholder="Non Reduction_Percentage" type="text" required name="Non_Reduction_Percentage" value={non_Reduction_Percentage || HeaderData && HeaderData.Non_Reduction_Percentage} ref={refnonred} onChange={Non_Reduction_Percentage_Func} className="Tax_user-input"  ></input></td>

                          <td><input placeholder="Tax Account" type="text" required name="Tax_Account" value={tax_Account || HeaderData && HeaderData.Tax_Account} onChange={Tax_Account_Func} ref={reftax} className="Tax_user-input"  ></input></td>

                          <td><input placeholder="Acquisition Tax_Account" type="text" required name="Acquisition_Tax_Account" value={acquisition_Tax_Account || HeaderData && HeaderData.Acquisition_Tax_Account} ref={refacquisi} onChange={Acquisition_Tax_Account_Func} className="Tax_user-input" ></input></td>

                          <td><input placeholder="Deferred Tax Account" type="text" required name="Deferred_Tax_Account" value={deferred_Tax_Account || HeaderData && HeaderData.Deferred_Tax_Account} ref={refdeffer} onChange={Deferred_Tax_Account_Func} className="Tax_user-input"  ></input></td>

                          <td><input placeholder="Non Deduct Account" type="text" required name="Non_Deduct_Account" value={non_Deduct_Account || HeaderData && HeaderData.Non_Deduct_Account} ref={refnondeduct} onChange={Non_Deduct_Account_Func} className="Tax_user-input"  ></input></td>

                          <td><input placeholder="Group Description" type="text" required name="Group_Description" value={group_Description || HeaderData && HeaderData.Group_Description} ref={refgroup} onChange={Group_Description_Func} className="Tax_user-input"  ></input></td>

                          {/* <td><button type="button" className="btn btn-remove" >&times;</button></td> */}


                        </tr>

                        <Modal show={show} onHide={handleClose} className="Modal-big" size="lg">
                          {/* <div style={{ background: 'rgb(185 208 227)', width: '40rem', height: 'auto', borderRadius: "1rem" }} > */}

                          <div className="row">
                            <br />
                            <div class="col-lg-6 col-md-6 col-sm-6 modal-table" >
                              <div class="form-group">
                                <h3 style={{ textAlign: 'center' }}>Tax List</h3>
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
                                          <th>Category</th>
                                          <th>Tax Account</th>
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
                                            <td>{item.Category}</td>
                                            <td>{item.Tax_Account}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>
                              )}
                              <br />
                              <button className="DR-cancel-button" onClick={handleClose} >Cancel</button>
                              <br />
                              <br />
                            </div>
                          </div>
                        </Modal>
                      </tbody>
                    </table>
                    <br />

                  </div>
                  <br />
                  <button className="DR-add-button" type="submit" style={{ float: 'left' }} >{ButtonName}</button>
                </Form>
                {showdel ? <button class="DR-add-button" onClick={() => { DeleteData() }}> Delete </button> : null}
                <button className="DR-cancel-button" onClick={handleClose_func} >Cancel</button>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;