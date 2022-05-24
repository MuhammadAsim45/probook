import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import OTP from "./stepForm/OTP"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Verifyemail from "./VerifyEmail"
import costCenter from "./costOfAccount/CostOfAccount"
import Entry_Table from './Journal_Entry_Table/Entry_Table'
import { connect } from 'react-redux'
import { MultiStepForm } from "./MultiStepForm"
import Name from './Names/names'
import currency from './Currency/Currency'
import currency_copy from './Currency/Currency_copy'
import Test from './test'
import tax from './Tax/Tax'
import Deduction from "../HR/Deduction_setup/Deduction"
import ELP from "../HR/Earnd_Leave_Policy/Earnd_Leave_Policy"
import LA from "../HR/Leave Application/LPA"
import journalEntry from './journalEntry/JEN'
import Dimension from "./Dimension/Dimension"
import DSRule from './Distribution Rules/Distribution_rules'
import Bank from '../components/Bank/Bank'
import OPRJ from './Projects/Project'
import chartOfAccount from './Chart of Account/Chart of Account/Ch_Of_Acc';
// import Task from '../task'
import NotFound from './NotFound'
function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
    // style={{ minHeight: "100vh" }}
    >
      {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            {/* <PrivateRoute exact path="/Dashboard1" component={Dashboard1} /> */}
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/deduction" component={Deduction} />
            <Route path="/elp" component={ELP} />
            <Route path="/la" component={LA} />
            <Route path="/Test" component={Test} />
            {/* <Route path="/task" component={Task}/> */}
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/name" component={Name} />
            <Route path="/verify-email" component={Verifyemail} />
            <Route path="/details" component={MultiStepForm} />
            <PrivateRoute path="/cost-center" component={costCenter} />
            <Route path="/currency" component={currency} />
            <Route path="/currency_copy" component={currency_copy} />
            <Route path="/tax" component={tax} />
            <Route path="/journal-entry" component={journalEntry} />
            <Route path="/dimension" component={Dimension} />
            <Route path="/Distribution_rules" component={DSRule} />
            <Route path="/oprj" component={OPRJ} />
            <Route path="/Bank" component={Bank} />
            <Route path="/entry_table" component={Entry_Table} />
            <Route path="/chartOfAccount" component={chartOfAccount} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* </div> */}
    </Container>
  )
}


export default App
