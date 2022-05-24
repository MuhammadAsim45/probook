
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import Entry from './journalEntry/JEN'
import { Modal } from "react-bootstrap";
import CUR from './Currency/Currency'
import Tax from "./Tax/Tax"
import './Sidebar.css'
import VOC from './Journal Voucher/Journal_Voucher'
import { useLocation } from "react-router-dom";
import OPRJ from './Projects/Project'
import Banks from './Bank/Bank'
import DR from './Distribution Rules/Distribution_rules'
import FYS from '../HR/Fiscal_Year/FY'
import COC from './costOfAccount/CostOfAccount'
import { CSSTransition } from 'react-transition-group';
import Time from '../HR/Time Sheet/TS'
import WSS from '../HR/Work Shift/WS'
import ESD from '../HR/Employee Salary Details/ESD'
import DIM from './Dimension/Dimension'
import COA from './Chart of Account/Chart of Account/Ch_Of_Acc'
import ELP from '../HR/Earnd_Leave_Policy/Earnd_Leave_Policy'
import LA from '../HR/Leave Application/LPA'
import PGS from '../HR/Pay/paygrade'
import DEDUCTION from '../HR/Deduction_setup/Deduction'
import { Scrollbars } from 'react-custom-scrollbars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faCog, faBusinessTime, faFileExcel, faAngleDown, faPuzzlePiece, faFileContract, faSearchPlus, faFileSignature, faChalkboardTeacher, faUsers, faUserAlt, faDollyFlatbed, faFileAlt, faBalanceScale, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faUniversity, faAddressCard, faCalendarAlt, faMapPin, faInbox, faRocket, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

// import { Routes } from "../routes";
// import ThemesbergLogo from "../assets/img/themesberg.svg";
// import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
// import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = "") => {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);
  const [showModal9, setShowModal9] = React.useState(false);
  const [showModal10, setShowModal10] = React.useState(false);
  const [showModal11, setShowModal11] = React.useState(false);
  const [showModal12, setShowModal12] = React.useState(false);
  const [showModal13, setShowModal13] = React.useState(false);
  const [showModal14, setShowModal14] = React.useState(false);
  const [showModal15, setShowModal15] = React.useState(false);
  const [showModal16, setShowModal16] = React.useState(false);
  const [showModal17, setShowModal17] = React.useState(false);
  const [showModal18, setShowModal18] = React.useState(false);
  const [showModal19, setShowModal19] = React.useState(false);
  const [showModal20, setShowModal20] = React.useState(false);
  const [showModal21, setShowModal21] = React.useState(false);
  const [showModal22, setShowModal22] = React.useState(false);
  const [showModal23, setShowModal23] = React.useState(false);
  const [showModal24, setShowModal24] = React.useState(false);
  const [showModal25, setShowModal25] = React.useState(false);
  const [showModal26, setShowModal26] = React.useState(false);

  //set all handleClose value false
  const handleClose1 = () => setShowModal1(true);
  const handleClose2 = () => setShowModal2(true);
  const handleClose3 = () => setShowModal3(true);
  const handleClose4 = () => setShowModal4(true);
  const handleClose5 = () => setShowModal5(true);
  const handleClose6 = () => setShowModal6(true);
  const handleClose7 = () => setShowModal7(true);
  const handleClose8 = () => setShowModal8(true);
  const handleClose9 = () => setShowModal9(true);
  const handleClose10 = () => setShowModal10(true);
  const handleClose11 = () => setShowModal11(true);
  const handleClose12 = () => setShowModal12(true);
  const handleClose13 = () => setShowModal13(true);
  const handleClose14 = () => setShowModal14(true);
  const handleClose15 = () => setShowModal15(true);
  const handleClose16 = () => setShowModal16(true);
  const handleClose17 = () => setShowModal17(true);
  const handleClose18 = () => setShowModal18(true);
  const handleClose19 = () => setShowModal19(true);
  const handleClose20 = () => setShowModal20(true);
  const handleClose21 = () => setShowModal21(true);
  const handleClose22 = () => setShowModal22(true);
  const handleClose23 = () => setShowModal23(true);
  const handleClose24 = () => setShowModal24(true);
  const handleClose25 = () => setShowModal25(true);
  const handleClose26 = () => setShowModal26(true);

  //set all handleShow value true
  const handleShow = () => { setShowModal1(true) };
  const handleShow1 = () => { setShowModal2(true) };
  const handleShow2 = () => {
    setShowModal3(true)
  };
  const handleShow4 = () => {
    setShowModal4(true)
  };
  const handleShow5 = () => {
    setShowModal5(true)
  };
  const handleShow6 = () => {
    setShowModal6(true)
  };
  const handleShow7 = () => {
    setShowModal7(true)
  };
  const handleShow8 = () => {
    setShowModal8(true)
  };
  const handleShow9 = () => {
    setShowModal9(true)
  };
  const handleShow10 = () => {
    setShowModal10(true)
  };
  const handleShow11 = () => {
    setShowModal11(true)
  };
  const handleShow12 = () => {
    setShowModal12(true)
  };
  const handleShow13 = () => {
    setShowModal13(true)
  };
  const handleShow14 = () => {
    setShowModal14(true)
  };
  const handleShow15 = () => {
    setShowModal15(true)
  };
  const handleShow16 = () => {
    setShowModal16(true)
  };
  const handleShow17 = () => {
    setShowModal17(true)
  };
  const handleShow18 = () => {
    setShowModal18(true)
  };
  const handleShow19 = () => {
    setShowModal19(true)
  };
  const handleShow21 = () => {
    setShowModal21(true)
  };
  const handleShow22 = () => {
    setShowModal22(true)
  };
  const handleShow23 = () => {
    setShowModal23(true)
  };
  const handleShow24 = () => {
    setShowModal24(true)
  };
  const handleShow25 = () => {
    setShowModal25(true)
  };
  const handleShow26 = () => {
    setShowModal26(true)
  };

  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, icon1, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="justify-content-between align-items-center ">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-icon"><FontAwesomeIcon style={{ float: 'right' }} icon={icon1} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {

    const { title, link, external, target, icon, icon1, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? " justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}
            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <div>
        {/* <Navbar style={{background:'black',width: '17rem'}} expand={false} collapseOnSelect variant="dark" className=" d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link}>
          <Image className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar> */}
        {/* <CSSTransition timeout={300} in={show} classNames="sidebar-transition"> */}
        {/* <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-black text-white`}> */}
        <div className="sidebar-inner px-0 pt-0">
          <div className="user-card d-md-none align-items-center justify-content-between justify-content-md-center ">
            <div className=" align-items-center">
              <div className="user-avatar lg-avatar me-4">
                {/* <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" /> */}
              </div>
              {/* <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button type="submit" as={Link} variant="secondary" size="xs" className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div> */}
            </div>
            {/* <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link> */}
          </div> 
          <Nav style={{ background: 'black', width: '14rem' }} id="myDIV" className="flex-column">
            {/* <Scrollbars style={{ width: '100%', height: '100%' }}> */}
            <NavItem style={{ background: 'Yellow !important', width: '15rem' }} link="" title="ProBook 247" />
            <CollapsableNavItem title="Administration" icon={faUserTie} icon1={faAngleDown}>
              <CollapsableNavItem title="Setup" icon1={faAngleDown}>
                <CollapsableNavItem title="Banking" icon1={faAngleDown}>
                  <Button class="btn active" pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow(); console.log("sssssss") }} >
                    <NavItem title="Banks" />
                  </Button>
                </CollapsableNavItem>
                <CollapsableNavItem eventKey="examples/" title="Financials" icon1={faAngleDown}>
                  <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow9(); console.log("sssssss") }} >
                    <NavItem title="Currencies" />
                  </Button>
                  <CollapsableNavItem eventKey="examples/" title="Tax" icon1={faAngleDown} >
                    <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow1(); console.log("sssssss") }} >
                      <NavItem title="Tax Groups" />
                    </Button>
                  </CollapsableNavItem>
                </CollapsableNavItem>
              </CollapsableNavItem>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Financials" icon={faBusinessTime} icon1={faAngleDown}>
              <Button className=" justify-content-between align-items-center" pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow10(); console.log("sssssss") }} >  <NavItem title="Journal Voucher" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow2(); console.log("sssssss") }} >  <NavItem style={{ float: 'left' }} title="Journal Entry" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none', float: 'left' }} onClick={() => { handleShow4(); console.log("sssssss") }} >  <NavItem style={{ float: 'left' }} title="Chart of Account" /></Button>
              <CollapsableNavItem eventKey="examples/" title="Cost Accounting" icon1={faAngleDown} >
                <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }}>  <NavItem style={{ float: 'left' }} title="Dimensions" /></Button>
                <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow6(); console.log("sssssss") }} >  <NavItem style={{ float: 'left' }} title="Cost Center" /></Button>
                <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow7(); console.log("sssssss") }} >  <NavItem style={{ float: 'left' }} title="Distribution Rules" /></Button>
              </CollapsableNavItem>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="CRM" icon={faUserAlt} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Opportunities" icon={faAddressCard} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Sales - A/R" icon={faBalanceScale} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Bussiness Partner" icon={faUsers} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Banking" icon={faUniversity} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Inventory" icon={faDollyFlatbed} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Resources" icon={faChalkboardTeacher} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="MRP" icon={faPuzzlePiece} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Services" icon={faFileSignature} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}  >  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Human Resources" icon={faSearchPlus} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }} >  <NavItem title="Employee Master Data" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow15(); console.log("sssssss") }} >  <NavItem title="Time Sheet" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }} >  <NavItem title="Human Resources" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow16(); console.log("sssssss") }} >  <NavItem title="Pay Grade Setup" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow14(); console.log("sssssss") }} >  <NavItem title="Empolyee Salary Detail" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow17(); console.log("sssssss") }} >  <NavItem title="Fiacal Year Setup" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow18(); console.log("sssssss") }} >  <NavItem title="Work Shift Setup" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow11(); console.log("sssssss") }}  >  <NavItem title="Earned Leave Policy" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }} >  <NavItem title="Tax Rule Setup" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }} >  <NavItem title="Loan/Advance Appliction" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow12(); console.log("sssssss") }} >  <NavItem title="Leave Application" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }} >  <NavItem title="Empolyee Allownce" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow13(); console.log("sssssss") }} >  <NavItem title="Employee Deduction" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow5(); console.log("sssssss") }} >  <NavItem title="Payroll Process" /></Button>
              {/* <Button pathname="/" as={Link} style={{background:'none',border:'none'}}  >  <NavItem title="Human Resources" /></Button> */}
            </CollapsableNavItem>

            <CollapsableNavItem eventKey="examples/" title="Project Management" icon={faFileContract} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }} onClick={() => { handleShow8(); console.log("sssssss") }} >  <NavItem title="Project" /></Button>

            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Reports" icon={faChartPie} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>
            <CollapsableNavItem eventKey="examples/" title="Excel Report" icon={faFileExcel} icon1={faAngleDown}>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
              <Button pathname="/" as={Link} style={{ background: 'none', border: 'none' }}>  <NavItem title="Sign In" /></Button>
            </CollapsableNavItem>


            {/* <NavItem  external title="Messages"  target="_blank"  icon={faInbox} />
              <NavItem link="" title="Transactions" icon={faHandHoldingUsd}  />
              <NavItem link="" title="Settings" icon={faCog} />
              <NavItem link="" external title="Calendar" link="https://demo.themesberg.com/volt-pro-react/#/calendar" target="_blank" badgeText="Pro" icon={faCalendarAlt} />
              <NavItem link="" external title="Map" link="https://demo.themesberg.com/volt-pro-react/#/map" target="_blank" badgeText="Pro" icon={faMapPin} />

              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem link="" title="Bootstrap Table" />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
             <Button pathname="/" as={Link} style={{background:'none',border:'none'}} onClick={()=>{handleShow();console.log("sssssss")}} >  <NavItem title="Sign In" /></Button>
             <Button pathname="/" as={Link} style={{background:'none',border:'none'}} onClick={()=>{handleShow();console.log("sssssss")}} >  <NavItem title="Sign In" /></Button>
             <Button pathname="/" as={Link} style={{background:'none',border:'none'}} onClick={()=>{handleShow();console.log("sssssss")}} >  <NavItem title="Sign In" /></Button>
              </CollapsableNavItem>

              <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" badgeText="Pro" icon={faChartPie} />

              <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem link="" title="Overview" />
                <NavItem link="" title="Download"  />
                <NavItem link="" title="Quick Start"  />
                <NavItem link="" title="License"  />
                <NavItem link="" title="Folder Structure"  />
                <NavItem link="" title="Build Tools"  />
                <NavItem link="" title="Changelog"  />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem link=""  title="Accordion"/>
                <NavItem link="" title="Alerts"  />
                <NavItem link="" title="Badges"  />
                <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank" badgeText="Pro" />
                <NavItem link="" title="Breadcrumbs"  />
                <NavItem link="" title="Buttons" />
                <NavItem link="" title="Forms" />
                <NavItem link="" title="Modals" />
                <NavItem link="" title="Navbars" />
                <NavItem link="" title="Navs"  />
                <NavItem link="" title="Pagination" />
                <NavItem link="" title="Popovers" />
                <NavItem link="" title="Progress"  />
                <NavItem link="" title="Tables" />
                <NavItem link="" title="Tabs"  />
                <NavItem link="" title="Toasts"/>
                <NavItem link="" title="Tooltips" />
              </CollapsableNavItem> */}
            {/* <NavItem external title="Themesberg" link="https://themesberg.com" target="_blank"  />
              <Button as={Link}  variant="secondary" className="upgrade-to-pro" onClick={()=>{handleShow()}}><FontAwesomeIcon icon={faRocket} className="me-1" /> Upgrade to Pro</Button> */}
            {/* </Scrollbars> */}
          </Nav>


        </div>
        {/* </SimpleBar> */}
        {/* </CSSTransition> */}
        <Modal contentClassName="modal-OPRJ" show={showModal1} onHide={handleClose1}>
          {/* <span aria-hidden="true">&times;</span> */}
          <Banks setShowModal1={setShowModal1} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal2} onHide={handleClose2}>
          <Tax setShowModal2={setShowModal2} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal3} onHide={handleClose3}>
          <Entry setShowModal3={setShowModal3} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal4} onHide={handleClose4}>
          <COA setShowModal4={setShowModal4} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal5} onHide={handleClose5}>
          <DIM setShowModal5={setShowModal5} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal6} onHide={handleClose6}>
          <COC setShowModal6={setShowModal6} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal7} onHide={handleClose7}>
          <DR setShowModal7={setShowModal7} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal8} onHide={handleClose8}>
          <OPRJ setShowModal8={setShowModal8} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal9} onHide={handleClose9}>
          <CUR setShowModal9={setShowModal9} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal10} onHide={handleClose10}>
          <VOC setShowModal10={setShowModal10} />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal11} onHide={handleClose11}>
          <ELP />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal12} onHide={handleClose12}>
          <LA />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal13} onHide={handleClose13}>
          <DEDUCTION />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal14} onHide={handleClose14}>
          <ESD />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal15} onHide={handleClose15}>
          <Time />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal16} onHide={handleClose16}>
          <PGS />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal17} onHide={handleClose17}>
          <FYS />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal18} onHide={handleClose18}>
          <WSS />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal19} onHide={handleClose19}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal20} onHide={handleClose20}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal21} onHide={handleClose21}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal22} onHide={handleClose22}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal23} onHide={handleClose23}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal24} onHide={handleClose24}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal25} onHide={handleClose25}>
          <VOC />
        </Modal>
        <Modal contentClassName="modal-OPRJ" show={showModal26} onHide={handleClose26}>
          <VOC />
        </Modal>
      </div>
    </>
  );
};
