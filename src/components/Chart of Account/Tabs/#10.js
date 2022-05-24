import React, { useState, useEffect, useCallback } from "react";
import './tab.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import request from 'request'
import { TreeView } from '@material-ui/lab';
import { TreeItem } from '@material-ui/lab';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Select from 'react-select'


const Tabs = ({ setCounter, setgetnamefromchild, seteditglaccountfield, seteditglaccountfield2, setDbLevel, tree, setName, setActive,
  setupd, setdispupd, setGetFromTab10, tab10Name, setSearchNumber, setName1, setShowDropDown1, setShowDropDown2, assetChildUpdate, Group_Mask_Func10 }) => {

  const [expanded, setExpanded] = useState([])
  const [expandDefault, setExpandDefault] = useState()

  function check() {
    document.getElementById("flexRadioDefault1").checked = true;
  }
  function uncheck() {
    document.getElementById("flexRadioDefault1").checked = false;
  }

  function check1() {
    document.getElementById("flexRadioDefault2").checked = true;
  }
  function uncheck1() {
    document.getElementById("flexRadioDefault2").checked = false;
  }

  const Danish = useCallback((item) => {
    setDbLevel(item.Level);
    setActive(item.Active)
    setSearchNumber(item.GL_Account)
    Group_Mask_Func10()
    setName1("")
    setName("")
    // console.log(item.Level);

    check()
    if (item.Active) {
      check1()
      uncheck()
      setShowDropDown1(false)
      setShowDropDown2(true)
    }
    if (item.Title) {
      check()
      uncheck1()
      setShowDropDown1(true)
      setShowDropDown2(false)
    }
    if (item.Level == 1) {
      setCounter(1);
    }
    if (item.Level == 2) {
      setCounter(2);
    }
    if (item.Level == 3) {
      setCounter(3);
    }
    if (item.Level == 4) {
      setCounter(4);
    }
    if (item.Level == 5) {
      setCounter(5);
    }
    if (item.Level == 6) {
      setCounter(6);
    }
    // console.log(item.Level);
    setupd("Update10")
    setdispupd("Update")
    setgetnamefromchild(item);
    const SS = item._id
    let result
    result = expanded.includes(SS) ? [] : [SS]
    result = expanded.includes(SS) ? expanded.filter(item => item !== SS) : [...new Set([SS, ...expanded])]
    setExpanded(result)
  }, [expanded])

  const getTreeItemsFromData = (tree) => {
    return tree && tree.map((item) => {
      // TreeViewControl.Items[5].ExpandSubtree();
      let children = undefined;
      if (item.children && item.children.length > 0) {
        children = getTreeItemsFromData(item.children);
      }
      return (
        <TreeItem
          className={item.Active == 'active' ? 'ActiveTree' : 'TitleTree'}
          key={item._id}
          nodeId={item._id}
          label={item.Name + - item.GL_Account}
          children={children}
          onClick={e => { Danish(item) }}
        />
      );
    });
  };
  function DataTreeView({ tree }) {
    return (
      <TreeView
        defaultCollapseIcon={< ExpandMoreIcon />}
        defaultExpandIcon={< ChevronRightIcon />}
        expanded={expanded}
        collapsed={expanded}
        onNodeToggle={handleToggle}
      >
        {getTreeItemsFromData(tree)}
      </TreeView>
    );
  }
  const con = () => {
    seteditglaccountfield(false)
    seteditglaccountfield2(false)
    setupd("Update10")
    setdispupd("Update")
    setgetnamefromchild("")
    setName1("")
  }
  const getheadername = () => {
    var axios = require('axios');
    var data = ({
    });
    var config = {
      method: 'get',
      url: 'http://localhost:3331/chartOfAccount/101000000',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        // setgetheadernameapi(response.data.Name)
        setGetFromTab10(response.data.Name)
        // console.log("response.data", response.data);
      })
      .catch(function (error) {
        window.location.reload(false);
      });
  }
  // show All data
  useEffect(() => {
    getheadername()
    handleExpandClick()

  }, [])
  const handleExpandClick = () => {
    setExpanded(() =>
      [
        expandDefault,
        "61ca47df48afb0b2ec2325b9",
        //  "61ca45b648afb0b2ec2325a7",
        //  "61cd19dc5a70870859122397",
        //   "61cd19fa5a708708591223a8",
        //  "61cd1a115a708708591223b9",
        //   "61cd1a295a708708591223ca",
        //   "61cd1a7b5a708708591223f9",
        //   "61cd1aa75a7087085912240a",
        //  "61cd1bca5a7087085912242c",
        //   "61cd1c215a7087085912245d",
        //  "61cd206a5a7087085912249b",
        //  "61ce67a705ed43afdc62ccfc",
        //  "61cf9adce7dd29439cbd400b",
        //   "61d39e9cfe55bd7dcc2217d7",
        //  "61d3b06193db184f96fc0190"
      ]
    );
  };
  const handleToggle = (event, nodeId) => {
    setExpanded(nodeId);
  };
  return (
    <>
      <div className="back">
        <a className="heading" href="#" style={{ cursor: 'pointer' }} ><h6 style={{ marginLeft: '2rem' }}
          onClick={(e) => { con() }}>Tab10</h6></a>
      </div>
      <div class="form-check form-check-inline">
        <div className="App">
          <DataTreeView tree={tree} />
        </div>
      </div>
    </>
  )
}
export default Tabs;