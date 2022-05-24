import React, { useState, useMemo } from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Dropdown from 'react-multilevel-dropdown';
import "./select.css"

import { Form } from 'react-bootstrap'

import Select from 'react-select'
import countryList from 'react-select-country-list'
export const Address = ({ formData, setForm, navigation }) => {
  const [country,setCountry]=useState('')
  let { department,position,workEmail,CNIC,Name,companyName11,companyURL,coType,csize,customerType,cname } = formData;
  const [companyName2,setCompanyName2]=useState(false)
  const [companySize,setCompanySize]=useState(false)
  const [companyType,setCompanyType]=useState(false)
  const [companyUrl,setCompanyUrl]=useState(false)
  const [userCNIC,setUserCNIC]=useState(false)
  const [userName,setUserName]=useState(false)

const [input,setInput]=React.useState({
  companyName22:'',
})


const onChangeEvent=(e)=>{
  e.preventDefault()
  
    
  const name=e.target.name;
  const value=e.target.value

  setInput(preInpt=>{

  console.log(preInpt)
    return({
      ...preInpt,
      
      [name]:value
    })
 
  })

}




  const handleEvent=()=>{
    setCompanyName2(true)
    setCompanySize(true)
    setCompanyType(true)
    setCompanyUrl(true)
    setUserCNIC(false)
setUserName(false)
  }

  const Umair=()=>{
setUserCNIC(true)
setUserName(true)
setCompanyName2(false)
setCompanySize(false)
setCompanyType(false)
setCompanyUrl(false)
  }

  const CompanyNmae11=()=>
  {
    return(<>
    
 
  <div>
     <label style={{marginLeft:'0.5rem'}} >Company Name</label>  <label style={{marginLeft:'7rem'}}>Company URL</label>   
     <br/>
      <div class=" OPRJ2">
      <input type="text" class="user-input3" placeholder="last name" name="companyName11" value={companyName11} 
         onChange={setForm}/>
    
      </div>
      </div>
      <div>
      <div class=" OPRJ3">
        <input type="text" class="user-input3" placeholder="last name" name="companyURL" value={companyURL} 
         onChange={setForm}
         />
         </div>
      </div>





      <div  className="dropdown3">
     <div class="select-style1"> 
    <select placeholder="Select"
    onChange={setForm}
    name="ctype"
    >
 <option className="abc" >Select..</option>
     <option  value="PLC">PLC</option>
     <option  value="OPC">OPC</option>
     <option  value="UC">UC</option>
     <option  value="PVTC">PVTC</option>
     <option  value="UPL">UPL</option>
     <option  value="LTD">LTD</option>
    </select>
    </div>
  </div>



  <div>
  <label>company size</label>
  <div  className="dropdown3">
     <div class="select-style1"> 
    <select placeholder="Select"
    onChange={(e)=>{
setForm(e)
    }}
    name="csize"
    >
   <option  value="">Select..</option>
     <option value="0-50">0-50</option>
     <option  value="50-100">50-100</option>
     <option  value="100-1000">100-10000</option>
     <option  value="1000-10000">1000-100000</option>
    <option  value="10000-100000">10000-100000</option>
   
    </select>
    </div>
  </div></div>
      </>)
  }
//       const CompanyUrl11=()=>
//    {
   
//    return(
//    <>
//    <div>
//       <div class=" OPRJ3">
//         <input type="text" class="user-input3" placeholder="last name" name="companyURL" value={companyURL} 
//          onChange={setForm} /></div>
//       </div>
// </>
//    )
//    }
//     const Companytype11=()=>
    
//     {
//  return(
//    <>
//  <div  className="dropdown3">
//      <div class="select-style1"> 
//     <select placeholder="Select"
//     onChange={setForm}
//     name="ctype"
//     >
//  <option className="abc" >Select..</option>
//      <option  value="PLC">PLC</option>
//      <option  value="OPC">OPC</option>
//      <option  value="UC">UC</option>
//      <option  value="PVTC">PVTC</option>
//      <option  value="UPL">UPL</option>
//      <option  value="LTD">LTD</option>
//     </select>
//     </div>
//   </div>


// </>
  

//  )
//  }
// const CompanySize11=()=>
//   {
  
  
//   return(<>
//   <div>
//   <label>company size</label>
//   <div  className="dropdown3">
//      <div class="select-style1"> 
//     <select placeholder="Select"
//     onChange={setForm}
//     name="csize"
//     >
//    <option  value="html">Select..</option>
//      <option value="0-50">0-50</option>
//      <option  value="50-100">50-100</option>
//      <option  value="100-1000">100-10000</option>
//      <option  value="1000-10000">1000-100000</option>
//     <option  value="10000-100000">10000-100000</option>
   
//     </select>
//     </div>
//   </div></div>


// </>
// )
//   }
const UserCNI11=()=>{

return(<>



<div>
<label>CNIC</label>
<div class=" username1 ">
          <input type="text" class="user-input4" placeholder="CNIC"name="CNIC" 
          value={CNIC} onChange={setForm} />
          </div></div>
          </>)
}

  const UserName11=()=>
{
  return(
    <>
<div>
<label>Name</label>
<div class=" username1 ">
          <input type="text" class="user-input4" placeholder="name"name="Name" 
          value={Name} onChange={setForm} />
          </div></div>
</>
  )
} 

const KKKKK=(e)=>{

  e.preventDefault();


  const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
   const result = pattern.test(workEmail);
   if(result==true){
    //  alert("yes")
    navigation.next()
   }
    else{
      // navigation.next()
      alert("Invalid Email")
    }
  
 
}

  return (
    <div className="main">
    <Container maxWidth="xs">
       <div class="Name-div5">
       
    <Form onSubmit={(e) => KKKKK(e)} >

    {/* <div class="title">Red Stapler</div>
    <div class="sub-title">BETA</div> */}
    <div class="Name-fields1">
    <img
    src="/Logo3.png"
    height="80px"
    width="100px"
    style={{display:'block',marginLeft:'auto',marginRight:'auto'}}
    alt="show"
  />
  <h2 style={{textAlign:'center'}}><b>Working Details</b></h2>
    
  <label>Department</label>
  <div  className="wor-dropdown3">
     <div class="wor-select-style1">
   
      
     <select placeholder="Select" required
  
    
    onChange={setForm}
    name="department"
    >

    <option value="">Select Type</option>
  <option value="AF" >Management</option>
  <option value="AX"  >Admin</option>
  <option value="AL">User</option>
  


  </select>
  </div>
  </div>


            <label>Position</label>
            <div  className="wor-dropdown3">
     <div class="wor-select-style1">
   
      
     <select placeholder="Select" required
  
    
    onChange={setForm}
    name="Position"
    >

    <option value="">Select Type</option>
  <option value="AF" >Supervisor</option>
  <option value="AX"  >Manager</option>
  <option value="AL">Director</option>
  <option value="AL">Executive</option>
  


  </select>
  </div>
  </div>

            <label>Work E-mail</label>
  <div class=" Name-username1 ">
            <input type="text" required class="Name-user-input4" placeholder="Work E-mail" name="workEmail" 
            value={workEmail} onChange={setForm} />
            </div>
     
   
    

      
      <br/>
      </div>
    

 
 <div  className="wor-dropdown3">
     <div class="wor-select-style1">
   
      
     <select placeholder="Select" required
  
    
    onChange={setForm}
    name="coType"
    >

    <option value="">Select Type</option>
  <option value="AF" >Public Ltd</option>
  <option value="AX"  >Pvt Ltd</option>
  <option value="AL">Proprietorship</option>
  <option value="AF" >partnership</option>
  <option value="AX"  >Liasion</option>
  <option value="AL">Registered Firm</option>
  <option value="AF" >Trust</option>
  <option value="AX"  >Guarantee Ltd</option>
  <option value="AL">SMC-Pvt</option>
  <option value="AL">Inter Governmental Organization</option>
  <option value="AL">LLP</option>
  <option value="AL">Non Profit Organization</option>


  </select>
  </div>
  </div>
 <br/>
 <div>
<label>Name</label>
<br/>
<div class=" wor-username1 " style={{float:"left"}}>
          <input type="text" required class="wor-user-input4" placeholder="CNIC"name="CNIC" 
          // value={CNIC} onChange={setForm}
value={CNIC}
onChange={setForm}
/>
          </div>
          <div  style={{marginLeft:'12rem'}} class=" wor-username1 ">
          <input type="text" required class="wor-user-input4" placeholder="name"name="cname"
          onChange={setForm} value={cname}
          
           />
          </div>
          </div>
          <br/>
{/* <button class="add1-button" onClick={() => navigation.next()}>Next</button> */}
<button class="add1-button" type="submit">Next</button>
    <br/>
</Form>
    <button class="cancel1-button"    onClick={() => navigation.previous()}>Back</button>

      {/* <h3>Address</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />}}
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button> */}
      </div>
    </Container>
    </div>
  );
};



{/* 
// import React from "react";
// import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import "./select.css"

// export const Address = ({ formData, setForm, navigation }) => { */}
{/* //   const {address, department,workEmail,position,age } = formData;
//   return (
//     <Container>
//         <div class="login-div5">
     */}

//     {/* <div class="title">Red Stapler</div>
//     <div class="sub-title">BETA</div> */}
//     <div class="fields1">
//     <img
//     src="/Logo3.png"
//     height="80px"
//     width="100px"
//     style={{display:'block',marginLeft:'auto',marginRight:'auto'}}
//     alt="show"
//   />
//   <h2 style={{textAlign:'center'}}><b>Working Detail</b></h2>
     
    
//   {/* <TextField
//         label="Address"
//         name="address"
//         value={address}
//         onChange={setForm}
//         margin="normal"
//         variant="outlined"
//         autoComplete="off"
//         fullWidth
//       /> */}
     
    
//                       <label>Department</label>
//       <div class=" username1 "><input type="text" class="user-input5" placeholder=""  name="department"
//        value={department} onchange={setForm} /></div>
            
//             <label>Work E-mail</label>
//       <div class=" username1 "><input type="text" class="user-input5" placeholder="" name="workEmail"
//        onchange={setForm} value={workEmail}  /></div>
//       <label>Position</label>
//       <div class=" username1 "><input type="text" class="user-input5" placeholder="" name="position"
//        onchange={setForm} value={position}/></div>
   
   

 
//       <div>
//           {/* <label>Gender</label><br/> */}
//           <input className="Radio" type="radio" name="age" value="company" onchange={setForm}/>
// <label>Company</label>
  
  


//   <input style={{marginLeft:'35%'}} className="Radio1" type="radio" name="age" value="singleUser" onchange={setForm}/>
  
//   <label>Single</label>
 
// </div>

// <div>
//      <label style={{marginLeft:'0.5rem'}} >Name</label>     
//      <br/>
//       <div class=" OPRJ5"><input type="taxt" class="user-input7" placeholder="" /></div>
//       </div>
      
//       <div>
//      <label style={{marginLeft:'0.5rem',marginTop:'-1rem'}} >Link</label>     
//      <br/>
//       <div class=" OPRJ4"><input type="taxt" class="user-input7" placeholder="" /></div>
//       </div>
//       <label style={{marginLeft:'0.5rem'}} >Type</label>  
//       <div  className="dropdown4">
//      <div class="select-style2">
//     <select placeholder="Select">
//     <option className="abc" value="html">Select..</option>
//     <option class="abc" value="javascript">PLC</option>
//     <option class="abc" value="html">OPC</option>
//     <option class="abc" value="html">UC</option>
//     <option class="abc" value="css">PVTC</option>
//     <option class="abc" value="css">UPL</option>
//     <option class="abc" value="php">LTD</option>
//     </select>
//     </div>
//   </div>
//   <label style={{marginLeft:'0.5rem'}} >Size</label>  
//       <div  className="dropdown4">
//      <div class="select-style2">
//     <select placeholder="Select">
//     <option className="abc" value="html">Select..</option>
//     <option class="abc" value="javascript">00-10</option>
//     <option class="abc" value="html">10-20</option>
//     <option class="abc" value="html">20-30</option>
//     <option class="abc" value="css">30-40</option>
//     <option class="abc" value="css">40-50</option>
  
//     </select>
//     </div>
//   </div>
//       {/* <div class="password"><svg fill="#999" viewBox="0 0 1024 1024"><path class="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input type="username" class="user-input" placeholder="Username" /></div> */}
//     </div>
//     <button class="add1-button" onClick={() => navigation.next()}>Next</button>
//     <button class="cancel1-button"    onClick={() => navigation.previous()}>Back</button>
    
//     <br/>
//   </div>
//       {/* <h3>Address</h3>
//       <TextField
//         label="Address"
//         name="address"
//         value={address}
//         onChange={setForm}
//         margin="normal"
//         variant="outlined"
//         autoComplete="off"
//         fullWidth
//       />
//       <TextField
//         label="City"
//         name="city"
//         value={city}
//         onChange={setForm}
//         margin="normal"
//         variant="outlined"
//         autoComplete="off"
//         fullWidth
//       />
//       <TextField
//         label="State"
//         name="state"
//         value={state}
//         onChange={setForm}
//         margin="normal"
//         variant="outlined"
//         autoComplete="off"
//         fullWidth
//       />
//       <TextField
//         label="Zip"
//         name="zip"
//         type="number"
//         value={zip}
//         onChange={setForm}
//         margin="normal"
//         variant="outlined"
//         autoComplete="off"
//         fullWidth
//       />
//       <div style={{ marginTop: "1rem" }}>
//         <Button
//           color="secondary"
//           variant="contained"
//           style={{ marginRight: "1rem" }}
//           onClick={() => navigation.previous()}
//         >
//           Back
//         </Button>
//         <Button
//           color="primary"
//           variant="contained"
//           onClick={() => navigation.next()}
//         >
//           Next
//         </Button>
//       </div> */}
//     </Container>
//   );
// };
