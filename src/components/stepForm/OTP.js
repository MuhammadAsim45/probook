import React, { useState } from 'react'
import './OTP.css';
import OtpInput from 'react-otp-input';
const Input = () =>{
    const[State,setState]=React.useState({
    otp:''
    });
//const [user,setUser]=useState('')    

 const handleChange = (otp) =>setState({ otp });



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


 const onSubmitOTP = (e) =>{
  e.preventDefault()
  const code =State.otp;
  console.log(code)
  window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(JSON.stringify(user))
    alert("User is verified")
    // ...
  }).catch((error) => {
  
alert("user is not veriofied  "+error)

  });
}



    return(
        <>
        <div className="main">
         <div class="OTP-div7">
    
<div id="sign-in-button"></div>
      <div class="OTP-field7">
      <img
      src="/Logo3.png"
      height="80px"
      width="100px"
      style={{display:'block',marginLeft:'auto',marginRight:'auto'}}
      alt="show"
    />
      <h3 style={{textAlign:'center'}}><b>Enter OTP</b></h3>
        <br/>
      
        <div class="ABD"> <OtpInput
      
        inputStyle="inputStyle"
        value={State.otp}
        onChange={(e)=>{
InputEvent(e)
handleChange(e)
        }}
        numInputs={6}
        separator={<span>-</span>}
      /></div>
       
     
      
       
      </div><br/>
      <button class="add7-button">Re-send OTP</button>
      <div class="link1">
        <br/>


      </div>
      <br/><br/><br/>
    </div>
    </div>
        </>

    )
}
export default Input;