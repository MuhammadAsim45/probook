import React, { useState } from "react";
import { Button, Modal, Table, Alert } from "react-bootstrap";
import request from "request";
import { TableHead } from "../Style";
import axios from "axios";
import "./FY.css";

const Input = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ButtonName, setButtonName] = useState("Add");
  const [Search, setSearch] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [HeaderData, setHeaderData] = useState([]);
  const [name, setname] = useState();
  const [locked, setlocked] = useState();
  const [startdate, setstartdate] = useState();
  const [enddate, setenddate] = useState();

  //Submit or Update function
  const Submit_PatchFunc = () => {
    if (ButtonName === "Add") {
      senddata();
    } else if (ButtonName !== "Add") {
      updataData();
    }
  };

  // Add data function
  const senddata = (e) => {
    const bata = {
      Name: name,
      Locked: locked,
      Startdate: startdate,
      Enddate: enddate,
    };
    try {
      axios.post("http://localhost:3331/fiscalyear", bata);
      setLoading(true);
    } catch (error) {
      setMessage();
    }
    alert("Data Successfully added");

    setLoading(false);
    console.log(bata);
  };

  // Update function
  const updataData = () => {
    var request = require("request");
    var options = {
      method: "PATCH",
      url: `http://localhost:3331/fiscalyear/${Search}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Locked: locked,
        Startdate: startdate,
        Enddate: enddate,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    });
    window.location.reload(false);
  };

  //
  const Find_FilterFunc = async () => {
    if (Search === "") {
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
      url: "http://localhost:3331/fiscalyear",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {});
    setShow(true);
  };
  //Get Filter data from Mongodb
  const FilterData = () => {
    setButtonName("Update");
    var options = {
      method: "GET",
      url: `http://localhost:3331/fiscalyear/${Search}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const data = response.body;
      const finalData = JSON.parse(data);
      setHeaderData(finalData);
      console.log(finalData);
    });
  };
  //get value from Modal and set on card
  const getvaluefromcheckbox = (item, index) => {
    setHeaderData(item);
    setButtonName("Update");
  };
  //Modal cancel button function
  const handleClose = () => {
    setShow(false);
  };

  const TableRow = ({ row, action }) => (
    <tr class="table-light" onClick={action()}>
      <th scope="row">{row.Name}</th>
      <td>{row.Locked}</td>
      <td>{row.Startdate}</td>
      <td>{row.Enddate}</td>
    </tr>
  );

  return (
    <>
      <div class="FY_Div">
        <div class="FY_fields ">
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
            <b>Fiscal Year</b>
          </h3>
          <div class=" FY_lab1" style={{}}>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                Find_FilterFunc();
              }}
            >
              {" "}
              <svg class="FY-icon1" viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg>
            </a>
            <input
              type="number"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              class="FY-input3"
              placeholder="Search"
            />
          </div>

          <div>
            <label>Name</label>{" "}
            <label style={{ marginLeft: "11rem" }}>Locked</label>
            <br />
            <div class="FY_lab" style={{ float: "left" }}>
              <input
                type="text"
                class="FY-input"
                placeholder=""
                name="Name"
                value={name || (HeaderData && HeaderData.Name)}
                onChange={(e) => {
                  setname(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div class=" FY_box" style={{ marginLeft: "0.5rem" }}>
              {" "}
              <input
                type="text"
                class="FY-input"
                placeholder=""
                name="Locked"
                value={locked || (HeaderData && HeaderData.Locked)}
                onChange={(e) => {
                  setlocked(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label>Start Date</label>{" "}
            <label style={{ marginLeft: "9.4rem" }}>End Date</label>
            <div class=" FY_box">
              <input
                type="date"
                class="FY-input"
                placeholder="Code"
                name="Startdate"
                value={startdate || (HeaderData && HeaderData.Startdate)}
                onChange={(e) => {
                  setstartdate(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div class=" FY_box" style={{ marginLeft: "0.5rem" }}>
              <input
                type="date"
                class="FY-input"
                placeholder="Code"
                name="Enddate"
                value={enddate || (HeaderData && HeaderData.Enddate)}
                onChange={(e) => {
                  setenddate(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>

          <Modal
            className="modal Modal-big"
            show={show}
            onHide={handleClose}
            size="lg"
          >
            {/* <Modal.Header closeButton>
            <Modal.Title Style={{ marginLeft: '10rem' }} id="example-modal-sizes-title-lg">Fiscal Year Data</Modal.Title>
          </Modal.Header>
          <Modal.Body> */}
            {data && (
              <Table bordered>
                <TableHead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Locked</th>
                    <th>Start Date</th>
                    <th>End Date</th>
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
                      <td>{item.Name}</td>
                      <td>{item.Locked}</td>
                      <td>{item.Startdate}</td>
                      <td>{item.Enddate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            {/* </Modal.Body>
          <Modal.Footer> */}
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            {/* </Modal.Footer> */}
          </Modal>

          <br />
          <br />
          <br />
          <br />
          <div></div>

          {/* <div class="password"><svg fill="#999" viewBox="0 0 1024 1024"><path class="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input type="username" class="user-input" placeholder="Username" /></div> */}
          <button
            class="FY_add-button"
            onClick={(bata) => {
              Submit_PatchFunc();
            }}
          >
            {ButtonName}
          </button>
          <button class="FY_cancel-button">Cancel</button>
        </div>
      </div>

      {/* <table class="table table-hover">
        <thead>
            <tr class="table-primary">
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">No. Of Copies</th>
            </tr>
        </thead>
        <tbody>
            {data.map(row => 
                <TableRow key={row.id} row={row} action={action} />
            )}

        </tbody>
    </table> */}
    </>
  );
};
export default Input;
