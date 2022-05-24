import React from "react";
import './index.css'
import { Modal } from "react-bootstrap";
import Ch_Of_Acc from '../Chart of Account/Ch_Of_Acc'
import { Scrollbars } from 'react-custom-scrollbars'
import Bank from '../Bank/Bank'
// import { Scrollbars } from 'react-custom-scrollbars'
// import Dimension from '../../Module/Book Keeping/Dimension/Dimension'
// import OPRJ from '../../Module/Book Keeping/Project/OPRJ'
// import Bank from '../../Module/Book Keeping/Bank/Taxes'
// import Tax from '../../Module/Book Keeping/Tax/Tax'
// import Currency from '../../Module/Book Keeping/Currency/Currency'
// import EmployeeMasterData from '../../Module/Book Keeping/HMD/EmployeeMasterData'
// import Distribution_rules from '../../Module/Book Keeping/Distribution Rules/Distribution_rules'
// import Cost_of_Account from '../../Module/Book Keeping/Cost of account/Cost_of_Account'
// import Dimension from "../../Module/Book Keeping/Dimension/Dimension";
const SideBar = () => {
  //different hooks
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);
  //HandleClosen functions
  const handleClose1 = () => setShowModal1(false);
  const handleClose2 = () => setShowModal2(false);
  const handleClose3 = () => setShowModal3(false);
  const handleClose4 = () => setShowModal4(false);
  const handleClose5 = () => setShowModal5(false);
  const handleClose6 = () => setShowModal6(false);
  const handleClose7 = () => setShowModal7(false);
  const handleClose8 = () => setShowModal8(false);

  //handleShow functions
  const handleShow = () => { setShowModal1(true) };
  const handleShow1 = () => { setShowModal2(true) };
  const handleShow2 = () => { setShowModal3(true) };
  const handleShow4 = () => { setShowModal4(true) };
  const handleShow5 = () => { setShowModal5(true) };
  const handleShow6 = () => { setShowModal6(true) };
  const handleShow7 = () => { setShowModal7(true) };
  const handleShow8 = () => { setShowModal8(true) };


  return (
    <>
      <input type="checkbox" id="check" />
      <label class="Label2 button bars" for="check"><i class="fas fa-bars"></i></label>
      <div class="side_bar">
        <div class="title">
          <div class="logo">Probook247</div>
          <label class="Label1 button cancel" for="check"><i class="fas fa-times"></i></label>
        </div>
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          <ul>
            <li><a href="#" ><i class="fas fa-qrcode"></i>Administration</a></li>
            <li><a href="#" ><i class="fas fa-link"></i>Financiais <div style={{ float: 'right' }}><i class="fas fa-caret-down"></i></div></a>
              <ul>
                <li><a href="#" >Journal Voucher</a></li>
                <li><a href="#">Journal Entry</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="fas fa-stream"></i>Sales-A/R</a></li>
            <li><a href="#"><i class="fas fa-calendar-week"></i>Master Data<div style={{ float: 'right' }}><i class="fas fa-caret-down"></i></div></a>
              <ul>
                <li><a href="#" onClick={handleShow7} >Human Master Data</a></li>
                <li><a href="#" onClick={handleShow}>Project</a></li>
                <li><a href="#" onClick={handleShow2}>Dimensions</a></li>
                <li><a href="#" onClick={handleShow4}>Distribution Rules</a></li>
                <li><a href="#" onClick={handleShow1}>Cost Center</a></li>
                <li><a href="#" onClick={handleShow6}>Chart of Account</a></li>
                <li><a href="#" onClick={handleShow5}>Bank</a></li>
                <li><a href="#" onClick={handleShow8}>Tax</a></li>
                <li><a href="#">Chart of Account</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-question-circle"></i>Business Partners
                <div style={{ float: 'right' }}><i class="fas fa-caret-down"></i>
                </div>
              </a>
              <ul>
                <li><a href="#">Working Detail</a></li>
                <ul>
                  <li><a href="#">Wovcvcvl</a></li>
                  <li><a href="#">Pcvcvcv</a></li>
                </ul>
                <li><a href="#">Personal Detail</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Banking</a></li>
            <li><a href="#"><i class="fas fa-phone-volume"></i>Inventory</a></li>
            <li><a href="#"><i class="fas fa-comments"></i>Resources</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Production</a></li>
            <li><a href="#"><i class="fas fa-phone-volume"></i>MRP</a></li>
            <li><a href="#"><i class="fas fa-comments"></i>Services</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Human Resources</a></li>
            <li><a href="#"><i class="fas fa-phone-volume"></i>Action</a></li>
            <li><a href="#"><i class="fas fa-comments"></i>Reports</a></li>
            <li><a href="#"><i class="fas fa-comments"></i>Project Management</a></li>

          </ul>

          {/* <div class="media_icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div> */}
        </Scrollbars>
      </div>
      <Modal contentClassName="modal-OPRJ" show={showModal1} onHide={handleClose1}>
        {/* <OPRJ/> */}
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal2} onHide={handleClose2}>
        {/* <Cost_of_Account/> */}
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal3} onHide={handleClose3}>
        {/* <Dimension/> */}
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal4} onHide={handleClose4}>
        {/* <Distribution_rules/> */}
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal5} onHide={handleClose5}>
        <Bank />
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal6} onHide={handleClose6}>
        <Ch_Of_Acc />
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal7} onHide={handleClose7}>
        {/* <EmployeeMasterData/> */}
      </Modal>
      <Modal contentClassName="modal-OPRJ" show={showModal8} onHide={handleClose8}>
        {/* <Tax/> */}
      </Modal>
    </>
  )
}
export default SideBar;