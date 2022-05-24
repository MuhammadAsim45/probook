import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PhoneInput from 'react-phone-number-input'
import "./select.css"
import firebase from "../../firebase";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
// import axios from 'axios'
export const Contact = ({ formData, setForm, navigation }) => {
  const {go}=navigation
//const firebase=app
//   const {
//     firstName,
//     lastName,
//     DOB,
//     adressLine1,
//     adressLine2,
//     zipCode,
//     city,
  
//     coun,
//     age,
    
//     department,
//   position,

//     workEmail,
  
//     customerType,
// companyName,
// companyURL,
// ctype,
// csize,
//     mobile,
  
//   } = formData;


// console.log({formData})




 // const { mobile } = formData;
  const [values, setValue] = React.useState()
const [state,setState]=useState({
  mobile:'',
})
const auth=firebase.auth();

const InputEvent=(e)=>{
 e.preventDefault()
  
    
    const name=e.target.name;
    const value=e.target.value
  
    setState(preInpt=>{
  
    console.log(preInpt)
      return({
        ...preInpt,
        
        [name]:value
      })
   
    })
  
 
}


function recaptcha(){
  
  
  window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('sign-in-button',{
    'size':'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
sentOtp()
console.log({response})
      console.log("Recaptca varified")
    
    },
    defaultCountry: "PK"
    
  })
}




function sentOtp(){
 
  recaptcha()
  const phoneNumber=state.mobile;
  console.log({phoneNumber})
  const appVerifier=window.recaptchaVerifier;
  
  auth.signInWithPhoneNumber(phoneNumber,appVerifier)
  .then((confirmationResult) => {

    window.confirmationResult = confirmationResult;
    // ...
    console.log("sms sent")
  }).catch((error) => {
    // Error; SMS not sent
  console.log("your error to send sms  "+error);
  });
}







const history=useHistory()


const handleSbmit=()=>{
try {
  console.log(state.mobile)
  sentOtp()
//  history.push('/otp')

  

} catch (error) {
  console.log("your error for function  "+error)
}

}

  return (
    <div className="main">
  
       <div class="Contact-div6">
       <Form onSubmit={()=>{handleSbmit();navigation.next()}}>
    

    {/* <div class="title">Red Stapler</div>
    <div class="sub-title">BETA</div> */}
    <div class="Contact-fields1">
    <img
    src="/Logo3.png"
    height="80px"
    width="100px"
    style={{display:'block',marginLeft:'auto',marginRight:'auto'}}
    alt="show"
  />

    <h3 style={{textAlign:'center'}}><b>Contact Information</b></h3>
      <br/>
      <label style={{marginLeft:'2.5rem'}} >Phone Number</label> 
      <div class="Contact-password1" >
  




 <div id="sign-in-button"></div>
  <div class=" Contact-username1 ">

  {/* <PhoneInput
//international
//countryCallingCodeEditable={false}
defaultCountry="PK"
name="phone"
value={values}
onChange={(e)=>{
//  e.preventDefault()
  setValue()
  console.log(values)
  
}}  



/>  */}
            <input required type="text" class="Contact-user-input4" name="mobile" 
            placeholder="+92 000 0000000"
         onChange={(e)=>{
           InputEvent(e)
           setForm(e)

         }
         }     value={state.mobile} />
            </div>


        {/* <PhoneInput
international
countryCallingCodeEditable={false}
defaultCountry="PK"
name="phone"
value={values}
onChange={
phoneSubmit  
}


/> */}

</div>

     
   
    
     
    </div><br/>
    <button class="Contact-add3-button" type="submit" >Send OTP</button>
    {/* <button class="Contact-add3-button" onClick={()=>{handleSbmit();navigation.next()}} >Send OTP</button> */}

    <div class="Contact-link1">
      <br/>


    </div>
    <br/>
    </Form>
    
  </div>
  
      {/* <h3>Contact</h3>
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div> */}
  
    </div>
  );
};
