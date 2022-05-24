import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table  } from 'react-bootstrap'
import {TableHead} from '../Style';
import './names.css';

const Form23 = () => {

    const [message, setMessage]= useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [customName, setCustomName] = useState()
    const [data, setData] = useState()

    const [input, setInput] = useState({
        Code:"",
        Name:"",
        CustomName:""
      })
       // Add data function
    async function handleSubmit() {

        const newNote={
         Code:code,
         Name:name,
         CustomName:customName
       }
          // Try and catch
       try {
         axios.post("http://localhost:3331/name",newNote);
         setLoading(true)
        //alert('Data Successfully Add')
       } catch(error) {
         setMessage()
       }
         alert("Data Successfully added")
      
       setLoading(false)
       // window.location.reload(false)
       console.log(newNote);
     }
//onChange function
     const Code_Func=(e)=>{
        setCode(e.target.value)
      }
      const Name_Func=(e)=>{
        setName(e.target.value)
      }
      const CustomName_Func=(e)=>{
        setCustomName(e.target.value)
      }
      //Code onChange function
  const handleCode=(e,index)=> {
    let obj = data
    obj[index]['Code']= e.target.value
   console.log(obj)
   setData(obj)
  }
   //Name onChange function
   const handleName=(e,index)=> {
    let obj = data
    obj[index]['Name']= e.target.value
   console.log(obj)
   setData(obj)
  }
   //CustomName onChange function
   const handleCustom=(e,index)=> {
    let obj = data
    obj[index]['CustomName']= e.target.value
   console.log(obj)
   setData(obj)
  }
  // Update Dimension
 const Update_Dim1=()=>{
    console.log("Data",data)
   
   let Postbody = [];
   data.forEach(element => {
     var request = require('request');
   var options = {
  'method': 'PATCH',
   'url': `http://localhost:3331/name/${element.Code}`, 
  'headers': {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(
   {
    CustomName:element.CustomName,
    
   }
 )
 };
 request(options, function (error, response) {
 if (error) throw new Error(error);
 });
   });  
 //window.location.reload(false)
 }
    // show All data
 useEffect(() =>{
    var axios = require('axios');
    var data=({
    });
    var config = {
      method: 'get',
      url: 'http://localhost:3331/name',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {

     setData(response.data)
     console.log(response.data)
       
    })
    .catch(function (error) {
    });
    }, [])
    

    return (
        <>
            <div class="NAME_main_class">
                <div class="NAME_field">
                    <img
                        src="/logo3.png"
                        height="80px"
                        width="100px"
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                        alt="show"
                    />
                    <h2 style={{ textAlign: 'center' }}> Names</h2>
                </div>
                {data &&(
             <Table  bordered>
                 <TableHead>
                 <tr>
        <th>Index</th>
        <th>Code</th>
        <th>Name</th>
        <th>Customize Name</th>
        </tr>
      </TableHead>
      <tbody style={{textAlign:'center'}}>
    {data.map((item,index) => (
          <tr key={`${index}`}>
              <td>{index + 1}</td>
            <td><input type="text" readOnly name="Code" defaultValue={item.Code} 
          onChange={e=>{handleCode(e,index)}} class=" Di_user-input"  /></td>

            <td><input type="text" readOnly name="Name" defaultValue={item.Name} 
          onChange={e=>{handleName(e,index)}} class=" Di_user-input"  /></td>    
          
      <td><input type="text"  name="CustomName" defaultValue={item.CustomName} 
          onChange={e=>{handleCustom(e,index)}} class=" Di_user-input"  /> 
           </td>                      
          </tr>
        
          
    ))}
      </tbody>
    </Table>
  )}
               
                <br />
                <br />
                <button class="Name-add-button"  onClick={() => {Update_Dim1()}}>Update</button>
                <button class="Name-cancel-button">Cancel</button>




            </div>
        </>
    );
}
export default Form23;
