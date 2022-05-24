import React, { useState } from 'react';
import './TStable.css';



const Input = () =>{
   return(
    <>
    <div class="TSModal" style={{ outline: 'none',border:'none'}}>
    <h2 style={{textAlign:'center'}}><b>Details</b></h2>
    <br/>
    <div class=" TS1_username " ><a style={{cursor:'pointer'}}> <svg   class="svg-icon1 " viewBox="0 0 20 20">
	   <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
	   </svg></a><input type="number" className="TS1_user-input1" style={{marginLeft:'1rem'}} placeholder="" /></div>

<br/>
       <table class="Table4">
        <thead  >
            
               <th>#</th>
               <th>Date</th>
               <th>Start Time</th>
               <th>End Time</th>
               <th >Activity Type    </th>
               <th>Work Order No.</th>
               <th>Financial Project</th>
               <th>Cost Center</th>
               <th>Stage</th>
               <th>Location</th>
               
               

          
        </thead>
          <tbody>
          <tr>
         <td></td>
         <td><input type="Date" className="TS1_user-input" placeholder="" ></input></td>
         <td><input type="time" className="TS1_user-input" placeholder=""></input></td> 
         <td><input type="time" className="TS1_user-input" placeholder=""></input></td>  
         <td> 
        
         <div  className="TS1dropdown">
              <div class="TS1select-style">
                <select placeholder="Select">
                <option class="abc" value="html">Select</option>
                <option class="abc" value="javascript">Type 1</option>
                <option class="abc" value="html">Type 2</option>
               </select>
             </div>
        </div>
       
        </td>

         <td><input type="text" className="TS1_user-input" placeholder="" disabled="true"></input></td>
         <td><div  className="TS1dropdown">
              <div class="TS1select-style">
                <select placeholder="Select">
                <option class="abc" value="html">Select</option>
                <option class="abc" value="javascript">Type 1</option>
                <option class="abc" value="html">Type 2</option>
               </select>
             </div>
        </div></td>
         <td><div  className="TS1dropdown">
              <div class="TS1select-style">
                <select placeholder="Select">
                <option class="abc" value="html">Select</option>
                <option class="abc" value="javascript">Type 1</option>
                <option class="abc" value="html">Type 2</option>
               </select>
             </div>
        </div></td>

         <td><input type="text" className="TS1_user-input" placeholder="" disabled="true" ></input></td>  
         <td><div  className="TS1dropdown">
              <div class="TS1select-style">
                <select placeholder="Select">
                <option class="abc" value="html">Select</option>
                <option class="abc" value="javascript">Type 1</option>
                <option class="abc" value="html">Type 2</option>
               </select>
             </div>
        </div></td> 
        
        
          </tr>
      
         </tbody>
        </table>
        <br/>

       
        <br/>
          <button className="TS1Okay-button" >Ok</button>
          <button className="TS1Can-button" >Cancel</button>
    </div> 

    </>
  );
}

export default Input;