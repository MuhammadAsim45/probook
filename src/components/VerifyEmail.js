import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



import "./style/signup.css"
const Verifyemail=()=>{
 //   const emailRef = useRef()
  //  const passwordRef = useRef()
    //const passwordConfirmRef = useRef()
    const { emailVerify} = useAuth()
    const [error, setError] = useState("")
    const [message,setMesaage]=useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
    
  
      try {
        setError("")
        setLoading(true)
     //   await signup(emailRef.current.value, passwordRef.current.value)
     await emailVerify()
        //history.push("/verify-email")
        setMesaage("please check your inbox")
      } catch {
        setError("Failed to verify email")
        setMesaage("")
      }
  
      setLoading(false)
    }


    return (
        <>

<div className="main">
<div class="Email-div4">
    

    {/* <div class="title">Red Stapler</div>
    <div class="sub-title">BETA</div> */}
    <div class="Email-fields">
   
    <h3 style={{textAlign:'center'}}><b>Verify Your E-mail</b></h3>
<p style={{textAlign:'center',fontSize:'small'}}>Go to your email inbox,and please verify your email. </p>
      <br/>
      {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
  
   
   
     
     
    </div>
    <button class="Email-signin-button" disabled={loading} onClick={emailVerify} >Re-send verification E-mail</button>
    <div class="link1">
      <br/>


    </div>
    <br/><br/><br/>
  </div>
  </div>

        </>
    )


}

export default Verifyemail