import React from "react";
import react, { useState } from 'react';
import axios from "axios";



export default function Booking() {

    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [number, setNumber] = useState("")
    let [date, setDate] = useState("")
    let [communication, setCommunication] = useState("")
    let [id, setid] = useState("")
    
    function handleUsername(event) {
        setUsername((username = event.target.value));
    }
    function handleEmail(event) {
        setEmail((email = event.target.value));
    }
    function handleNumber(event) {
        setNumber((number = event.target.value));
    }
    function handleDate(event) {
        setDate((date = event.target.value));
    }
    function handleCommunication(event) {
        setCommunication((communication = event.target.value));
    }
    function handledesigner_Id(event) {
        setid((id = event.target.value));
    }

console.log(sessionStorage.getItem("designer"))
    function rgisterHandel() {
      let myDesignerDisplay = sessionStorage.getItem("designer")
      let designerForeign={"id":myDesignerDisplay}
        let Booking = { username: username, email: email, number: number ,communication:communication }
    console.log("insid function");
    console.log(Booking)

    
    axios({
        method: 'post',
        url: 'https://asmahamadfashion.herokuapp.com/booking/add',
        data: Booking,
    });
    alert("Register done")
}
return (
    <div className="log">
        
        <br />
        <label> designer_Id: </label><br />
        <input type="text" name="designer_Id"
            placeholder="designer_Id"
            onChange={handledesigner_Id}
        />
        <label> USER: </label><br />
        <input type="text" name="Username"
            placeholder="Username"
            onChange={handleUsername}
        />
        <br />  <br />
        <label className="last"> Email: </label><br />
        <input type="textarea" name="Email"
            placeholder="Email"
            onChange={handleEmail}
        />
        <br />  <br />
        <label> Number: </label><br />
        <input type="textarea" name="Name"
        
        placeholder="Number" 
            onChange={handleNumber}
            />
        <br />  <br />
        <label for="handleDate" class="form-label">DATE</label>
    <input type="Date" class="form-control" id="handleDate"/>
            {/* placeholder="Date"
            onChange={handleDate} */}
            
  
        
        <br />  <br />
        <div class="col-md-4">
    <label for="handleCommunication" class="form-label">COMMUNICATION</label>
    <select id="Communication" class="form-select">
      <option value="2">EMAIL</option>
      <option value="2">PHONE</option>
    </select>
  </div>
        <br />  <br />
        
       <button onClick={rgisterHandel}>Submit</button>


<br></br>
<br></br>
<br></br>
  
  </div>
//   <div class="container">

// <form class="well form-horizontal" action=" " method="post"  id="contact_form">
// <fieldset>


// <legend>Contact Us Today!</legend>



// <div class="form-group">
// <label class="col-md-4 control-label">Username</label>  
// <div class="col-md-4 inputGroupContainer">
// <div class="input-group">
// <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
// <input  name="Username" placeholder="Username " onChange={handleUsername}
// class="form-control"  type=""/>
// </div>
// </div>
// </div>



// <div class="form-group">
// <label class="col-md-4 control-label" >Date</label> 
// <div class="col-md-4 inputGroupContainer">
// <div class="input-group">
// <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
// <input name="Date" placeholder="Date"onChange={handleDate}
//  class="form-control"  type="Date"/>
// </div>
// </div>
// </div>


//    <div class="form-group">
// <label class="col-md-4 control-label">E-Mail</label>  
// <div class="col-md-4 inputGroupContainer">
// <div class="input-group">
//     <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
// <input name="Email" placeholder="Email"onChange={handleEmail}
//  class="form-control"  type="text"/>
// </div>
// </div>
// </div>



   
// <div class="form-group">
// <label class="col-md-4 control-label">Phone #</label>  
// <div class="col-md-4 inputGroupContainer">
// <div class="input-group">
//     <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
// <input name="Number" placeholder="(845)555-1212"
// onChange={handleNumber} class="form-control" type="text"/>
// </div>
// </div>
// </div>


  


// <div class="form-group"> 
// <label class="col-md-4 control-label">Communication</label>
// <div class="col-md-4 selectContainer">
// <div class="input-group">
//     <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
// <select name="state"
// onChange={handleCommunication} class="form-control selectpicker" >
//   <option value=" " >Please select your state</option>
  
//   <option>phone </option>
//   <option >E-Mail</option>
  
//   </select>
//   </div>
// </div>
// </div>




// <div class="form-group">
//   <label class="col-md-4 control-label"></label>
//   <div class="col-md-4">
//     <button type="Handel" class="btn btn-warning" >Send <span 
//     onClick={rgisterHandel}class="glyphicon glyphicon-send"></span></button>
//   </div>
// </div>

// </fieldset>
// <button onClick={rgisterHandel}>asmas button</button>
// </form>
// </div>
   
);    
      
}