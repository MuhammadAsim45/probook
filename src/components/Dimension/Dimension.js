import React, { useState, useEffect } from 'react'
import './index.css'
import { Button, Modal, Table } from 'react-bootstrap'
import { TableHead } from './Style';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Dimension = ({ setShowModal5 }) => {
  const [getheadernameapi, setgetheadernameapi] = useState()
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(false)
  const [discription, setDiscription] = useState({ DimDisc: "" })
  //const [getpatchdata, setgetpatchdata] = useState({})
  const [disply, setdisply] = useState(false)
  const [data, setData] = useState()

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
        setgetheadernameapi(response.data[8].CustomName)

      })
      .catch(function (error) {
      });
  }


  // checkbox onChange function
  const handleActive = (e, index) => {
    let obj = data
    obj[index]['DimActive'] = e.target.checked
    console.log(obj)
    setData(obj)
  }
  //Discriptions onChange function
  const handleChange = (e, index) => {
    let obj = data
    obj[index]['DimDesc'] = e.target.value
    console.log(obj)
    setData(obj)
  }
  // At initial state
  const [input, setInput] = useState({
    DimCode: "",
    DimName: "",
    DimActive: "",
    DimDesc: ""
  })
  // Add data function
  async function handleSubmit() {
    const newNote = {
      DimActive: active,
      DimDesc: discription,
    }
    // Try and catch
    try {
      axios.post("http://localhost:3331/dimension", newNote);
      setError("")
      setLoading(true)
    } catch {
      setMessage("")
    }
    setLoading(false)
    window.location.reload(false);
  }
  // Update Dimension
  const Update_Dim1 = () => {
    console.log("Data", data)

    let Postbody = [];
    data.forEach(element => {
      var request = require('request');
      var options = {
        'method': 'PATCH',
        'url': `http://localhost:3331/dimension/${element.DimCode}`,
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            DimDesc: element.DimDesc,
            DimActive: element.DimActive
          }
        )
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
      });
    });
    //window.location.reload(false)
  }

  // show All data
  useEffect(() => {
    getheadername()
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: 'http://localhost:3331/dimension',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        if (response.data.DimActive === 'true') {
          setdisply(true)
        } else {
          setdisply(false)
        }
        setData(response.data)
        console.log(response.data)
        console.log(response.data.DimActive)

      })
      .catch(function (error) {
      });
  }, [])
  const handleClose_func=()=>{
    setShowModal5(false)
    
  }
  return (
    <>
      <div class="login-divbank" style={{ outline: 'none', border: 'none' }}>
        {/* <div class="row"> */}
        <div class="form-group">
          <div class="lcol">
            <artical class="cord-body">
              <div class="img-cl">
                <img
                  src="/Logo3.png"
                  height="80px"
                  width="100px"
                  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  alt="show"
                /></div>
              <h3 style={{ textAlign: 'center' }}>{getheadernameapi}</h3>

              {/* <div className="row"> */}
              {/* <div class="col-lg-6 col-md-6 col-sm-6 modal-table"> */}
              {data && (
                <div class="row">
                  <div class="form-group">
                    <div class="lcol-">
                      <div class="table-responsive table-responsive-lg table-responsive-md table-responsive-sm">

                        <table class="center">
                          <thead>
                            <tr>
                              <th>Code</th>
                              <th>Name</th>
                              <th>Active</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody style={{ textAlign: 'center' }} >
                            {data.map((item, index) => (
                              <tr key={`${index}`} >
                                <td>{item.DimCode}</td>
                                <td>{item.DimName}</td>
                                <td><input type="checkbox" name="DimActive" defaultChecked={item.DimActive === "true" ? (true) : item.DimActive === "false" ? (false) : null}
                                  onChange={(e) => { handleActive(e, index) }} style={{ marginLeft: '1rem' }} /> </td>
                                <td><input type="text" name="DimDesc" defaultValue={item.DimDesc}
                                  onChange={e => { handleChange(e, index) }} class=" Di_user-input" />
                                </td>
                              </tr>


                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* </div> */}
              {/* </div> */}
              <br />
              <button class="Dim-add-button" onClick={Update_Dim1} style={{ outline: 'none', border: 'none' }}>Update</button>
              <button class="Dim-cancel-button" style={{ outline: 'none', border: 'none' }} onClick={handleClose_func}>Cancel</button>

            </artical>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
export default Dimension;