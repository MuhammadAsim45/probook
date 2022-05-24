import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import "./style/verifyEmail.css"
import { auth } from "../firebase"
export default function Login() { 
  const emailRef = useRef()
  const passwordRef = useRef()
  //const passwordConfirmRef = useRef()
  const { login} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    if(emailRef.current.value==''||passwordRef.current.value==''){
      return setError("please fill all fields")
    }
  // const user=auth.currentUser

    try {
      setError("")
      setLoading(true)

      // const user=auth.currentUser

      // if(user.emailVerified){
      // await login(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
      // }else{
      //   history.push("/")
      // }
      // if(user.emailVerified=='true'){
      //   await login(emailRef.current.value,passwordRef.current.value)
      //   history.push("/")
      // }
 
      // else if(user.emailVerified=='false'){
      //    history.push("/verify-email")
      await login(emailRef.current.value,passwordRef.current.value)
      history.push("/")
      // console.log(emailRef.current.value)
      // console.log("user  "+user.emailVerified)
    }
     catch {
      setError("Failed to login")
    }

    setLoading(false)
  }

  return (
    <>


    <div className="main">
{/* <div style={{display:'flex',justifyContent:'center',width:'100%', height:'100%'}}> */}
<div className="log-div2">
    

    {/* <div className="title">Red Stapler</div>
    <div className="sub-title">BETA</div> */}
    <div className=" log-fields">
    <img
    src="/Logo3.png"
    height="80px"
    width="100px"
    style={{display:'block',marginLeft:'auto',marginRight:'auto'}}
    alt="show"
  />
   {error && <Alert variant="danger">{error}</Alert>}
      {/* <h1 style={{textAlign:'center'}}><b>Create Accoun</b></h1> */}
    
    
   <br/>
      <div className=" log-username "><svg fill="#999" viewBox="0 0 1024 1024"><path className=" log-path1" d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"></path></svg>
      <input type="text" className=" log-user-input" placeholder="Email Adress" ref={emailRef} /></div>
      <div className=" log-password"><svg fill="#999" viewBox="0 0 1024 1024"><path className=" log-path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg>
      <input type="password" className="pass-input" placeholder="password" ref={passwordRef}/></div>
     <div  style={{float:'left'}}>
      <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
      </div>
      <div className=" log-link2">
      <Link to="/forgot-password">Forgot Password</Link>
      </div>
      {/* <div className="password"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input type="username" className="user-input" placeholder="Username" /></div> */}
    </div>
    <button className=" log-signin-button" onClick={handleSubmit} disabled={loading}>Log In</button>
    <div className=" log-link1">
      <br/>
      <p>Don't have any account?</p> <Link to="/signup">Sign Up</Link>
       <br/>   <br/><br/>
 
    </div>
   
    
       <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <a color="inherit" href="https://aiotpl.com/">
        AIOT
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  <br/>
  </div>
  </div>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
    
    </>
  )
}
