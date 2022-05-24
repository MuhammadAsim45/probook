import React,{useState} from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Alert } from "react-bootstrap";

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import OtpInput from "react-otp-input";
import './OTP.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


export const Review = ({ formData, navigation }) => {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { go } = navigation;
  const history=useHistory()
  const {
    firstName,
    lastName,
    DOB,
    adressLine1,
    adressLine2,
    zipCode,
    city,
  
    coun,
    gender,
    
    department,
  position,

    workEmail,
  
    customerType,
    coType,

companyName11,
companyURL,
ctype,
csize,
Name,
CNIC,
cname,
    mobile,
  
  } = formData;
const Data={
  firstName:firstName,
  Lastname:lastName,
  DOB:DOB,
  AdressLine1:adressLine1,
  AdressLine2:adressLine2,
  Zipcode:zipCode,
  city:city,
  Country:coun,
  Gender:gender,
  department:department,
  position:position,
  workEmail:workEmail,
  companyType:coType,

CNIC:CNIC,
companyName:cname,
  mobile:mobile
}
// if (firstName == null || lastName == null || DOB == null || adressLine1 == null
//   || adressLine1 == null || adressLine2 == null || zipCode == null  
//    || city == null || coun == null || department == null   
//    || position == null || workEmail == null || coType == null ) {
//   setError("Please filled all fields ❌")
// } else {
//   // Try and catch

//   try {
//     axios.post("http://localhost:3331/details",Data);
//     setError("")
//     setMessage("Data save successful 👌")
//     alert("Data successfully added")
//   } catch {
//     setMessage("")
//   }
// }
// const companyOrUserDetail={
//   companyName:companyName,
//   CompanyURL:companyURL,
//   ctype:ctype,
//       csize:csize,
//       Name:Name,
//       CNIC:CNIC,
// }

console.log({Data})


axios.post("http://localhost:3331/details",Data).then(()=>{
  console.log("retgister succesful")
}).catch((err)=>{
  console.log("your error to post data   "+err)
})
const[State,setState]=React.useState({
  otp:''
  });
  
 const onSubmitOTP = (e) =>{
  e.preventDefault()
  const code =State.otp;
  console.log(code)
  window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(JSON.stringify(user))
    alert("User is verified")
    history.push("/login")
  
  }).catch((error) => {
  
alert("user is not verified  "+error)
//history.push("/OTP")

  });
}


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





const handleChange = (otp) =>setState({ otp });

  return (
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
            {/* <br/>
            {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>} */}
            <div class="ABD"> <OtpInput
          
            inputStyle="inputStyle"
            value={State.otp}
            onChange={handleChange}
            

            numInputs={6}
            separator={<span>-</span>}
          /></div>
           
         
          
           
          </div><br/>
          <button onClick={onSubmitOTP} class="OTP-add7-button">Submit</button>
          <div class="link1">
            <br/>
    
    
          </div>
          <br/><br/><br/>
        </div>
        </div>
            </>
//     <Container maxWidth='sm'>
//       <h3>Review</h3>
//       <RenderAccordion summary="personal Details" go={ go } details={[
//         { 'First Name': firstName },
//         { 'Last Name': lastName },
//         { 'DOB': DOB },
//         {'Adress Line 1':adressLine1},
//         {'Adress Line 2':adressLine2},
//         {'zip code':zipCode},
//         {'city':city},
//         {'country':coun},
//         {'gender':age}
//       ]} />
//       <RenderAccordion summary="Working details" go={ go } details={[
//         { 'Department': department },
//       {'position':position},
      
//         {'work email':workEmail},
    
      
//         {'company or single':customerType},
//         {'company name':companyName},
//         {'company url':companyURL},
//         {'company type':ctype},
//         {'company size':csize}
        
//       ]} />
//       <div id="sign-in-button"></div>
//       <RenderAccordion summary="Contact" go={ go } details={[
//         { 'Phone': mobile },
        
//       ]} />
//       <Button
//         color="primary"
//         variant="contained"
//         style={{ marginTop: '1.5rem' }}
//         onClick={() => go('submit')}
//       >
//         Submit
//       </Button>

//     </Container>
//   );
// };

// export const RenderAccordion = ({ summary, details, go }) => (
//   <Accordion>
//     <AccordionSummary
//       expandIcon={<ExpandMoreIcon />}
//     >{summary}</AccordionSummary>
//     <AccordionDetail>
//       <div>
//         { details.map((data, index) => {
//           const objKey = Object.keys(data)[0];
//           const objValue = data[Object.keys(data)[0]];

//           return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

//         }) }
//         <IconButton
//           color="primary"
//           component="span"
//           onClick={() => go(`${summary.toLowerCase()}`)}
//         ><EditIcon /></IconButton>
//       </div>
//     </AccordionDetail>
//   </Accordion>
  )
}
