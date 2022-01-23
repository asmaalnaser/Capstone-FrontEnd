// import React, { useEffect, useState, params } from "react";
// import axios from "axios"
// // import './App.css';
// import { Link } from "react-router-dom";




// export default function Login(props) {
   

//     let [username, setusername] = useState("")
//     let [password, setpassword] = useState("")
//     let [result, setresult] = useState("")
//     let info=[username,password];
//     let [userInfo, setUserInfo] = useState("")  

      

//     function handlesetusername(event) {
//         setusername((username = event.target.value))
//     }
//     function handlepassword(event) {
//         setpassword((password = event.target.value));
//         console.log(info)
//     }
  
//     function handleSubmit(event) {
//         event.preventDefault();


//         axios({
//             method: "get",
//             url: "api/user/login",
//             params: { username: username , password: password}
//         })
//         .then((res => {
//             console.log(res.data);
//             if(res.data == "authenticated"){
//                 props.handleLogin()

               
//             }
//             else{
//                 alert(res.data)
//             }
//         }))
//     }
//     return (
//         <div className="log">
//             {/* <div id="fullBg" />

// <div class="container">
//   <form class="form-signin">       
//       <h1 class="form-signin-heading">Please Login</h1>
//       <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
//       <input type="password" class="form-control" name="password" placeholder="Password" required=""/>     
      
//       <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>   
//     </form>
//   <p class="text-center sign-up"><strong>Sign up</strong> for a new account</p>
// </div> */}
//             <form id="selector-for-some-widget" onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={username}
//                     name="username"
//                     placeholder=" username"
//                     onChange={handlesetusername}
//                 />
//                 <input
//                     type="text"
//                     value={password}
//                     name="password"
//                     placeholder=" password"
//                     onChange={handlepassword}
//                 />
//                 <br />
//                 <input className='sub' type="submit"
//                     value="submit"
//                 /> 
//                 <br>
//                 </br>
//                 <br>
//                 </br>
//                 {/* <Link to="/User"><button className='btn'>singUp</button></Link> */}
//             </form>
//         </div>
        
//     )
// }
import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import '../App.css';
import {Link} from 'react-router-dom'
import {useNavigate } from 'react-router-dom'

export default function Login() {
  const [userName, setmyUsername] = useState("")
  const [password, setmypassword] = useState("")
  const [check, setCheck] = useState("")
  const [message, setmessage] = useState("");
 const navigate=useNavigate();
  let myData = { userName: userName, password: password, roles: "USER" }

  function SignUp() {
    axios({
      method: "post",
      url: "api/user/add",
      data:
        myData
    }).then(response => { setCheck(response.data) })
  }

  
  function Login(event) {
    event.preventDefault();
    axios.get("api/user/login", { params: { userName: userName, password: password } })
      .then(response => {
        if (response.data == "authenticatedUSER"){
          localStorage.setItem("Check","authenticatedUSER")
          navigate("/Home2");
        }
        else if(response.data == "authenticatedADMIN") {
          localStorage.setItem("Check","authenticatedADMIN")
          navigate("/Home2");
     }
        else { setmessage("Your username or Passwrd is invalid") }
      })
 
  }
  let log=localStorage.getItem("Check")
  console.log(log) 
  return (
    <div className="log">
    {/* <form class="form"> */}
      <h2>log in:  </h2><br></br> <th>
          <label> userName: </label><br />
        <input   type="text" class="textbox" name="userName" onChange={(event) => { setmyUsername(event.target.value) }} 
        /><br></br>
             <label>   password  : </label><br />
        <input type="text" class="textbox" name="password" onChange={(event) => { setmypassword(event.target.value) }}
         /><br></br>
        <h3>{check}</h3></th>
      <button onClick={(e)=>{Login(e)}}>Log in</button>
      <button onClick={SignUp}>Sign Up</button>
      <h2>{message}</h2>
   {/* </form> */}
   </div>
  );
}
