import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import './App.css';

import React, { Component } from 'react'
import Logo from "./router/img/Logo.png";



export default function App() {
  let checkLogIn = localStorage.getItem("Check")
  return (
    
    //       <div className="main3">
    //         <br />  <br />
    //         <button onClick={()=>{localStorage.setItem("Check","")}}>LogOut</button>
    //         <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //           <div class="container-fluid">
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //               <span class="navbar-toggler-icon"></span>
    //             </button>
    //    </div>

    //       <div>
        
    //       <nav
    //         style={{
    //           borderBottom: "solid 1px",
    //           paddingBottom: "1rem"
    //         }}
    //       >



    //         <br></br>
    //         <Link to="/Page"><button className="button1">Page</button>  </Link> 
    //         <Link to="/Home2"><button className="button1">Home</button>  </Link> 
    //         <Link to="/Home"><button className="button1">Home</button>  </Link>  {""}
    //         <Link to="/Designer"><button className="button1">DESIGNER</button>  </Link>  {""}
    //         <Link to="/ListDesigner"><button className="button1">ListDesigner</button>  </Link>  {""}
    //         <Link to="/Booking"><button className="button1">Booking</button>  </Link>  {""}
    //         <Link to="/Photo"><button className="button1">Photo</button>  </Link>  {""}
    //         <Link to="/Access"><button className="button1">ACCESSORIES</button>  </Link>  {""}
    //         <Link to="/Pictuer"><button className="button1">Pictuer</button>  </Link> 
    //    
    //         <Link to="/Login"><button className="button1">Login</button>  </Link>  {""}
    //         {/* <Link to="/Photo"><button className="button1">Photo</button>  </Link>  {""}

    //         <br></br>
    //         <br></br>
    //         <br></br>
    //         <br></br>
    //   {/* <img src={Img1} alt="img1" className="img"/> */}
    //   <br></br>
    // </nav>
    // </div>
    //       </nav>
    //       <Outlet/>
    //     </div>
    <div>


           
                <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Home2">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Designer">DESIGNER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ListReview">REVIEW</a>
        </li>
        {/* <li class="nav-item dropdown"/>
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="/Home2">Home</a></li>
            <li><a class="dropdown-item" href="/Login">login</a></li>
            <li><a class="dropdown-item" href="/Home2">Home</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/Designer">Designer</a></li>
          </ul> */}
       
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
                  <div>
                    
                    {/* <h4>GLAMOUR</h4> */}
                  </div>
                  <div>
                    {/* <h2>only one</h2> */}
                  </div>
                  {/* <img src={Logo} alt="logo" className="logo"/> */}
                  <div>
                    <ul>
                      <br></br>
                      
{/*                       
                    <div class="dropdown">
                        <li class="dropbtn"><Link to="/Login">login</Link></li>
                       
                      </div>

                      <div class="dropdown">
                        <li class="dropbtn"><Link to="/Home2" >Home</Link> </li>

                      </div>
                      <div class="dropdown">
                        <li class="dropbtn"><Link to="/Designer">DESIGNER</Link></li>
                       
                      </div>
                      <div class="dropdown">
                        <li class="dropbtn"> <Link to="/ListDesigner">ListDesigner</Link></li>
                      
                      </div>
                    
                    
                      <div class="dropdown">
                        <li class="dropbtn"><Link to="/ListReview" >Review</Link> </li>

                      </div>
                      <div class="dropdown">
                        <li class="dropbtn"><Link to="/Review" > ListReview</Link> </li>

                      </div>
                      <div class="dropdown">
                        <li class="dropbtn"><Link to="/Booking">Booking</Link></li>
                       
                      </div>
                      
                      <div class="dropdown">
                        <li class="dropbtn"><Link to="/Listbooking" >Listbooking</Link> </li>

                      </div> */}
                      {/* <div class="dropdown">
                        <li class="dropbtn"><Link to="/RegisterImg">RegisterImg</Link></li>
                       
                      </div> */}
{/* 
                      <div class="dropdown">
                        <li class="dropbtn"><button onClick={()=>{localStorage.setItem("Check","")}}>LogOut</button></li>
                       
                      </div> */}


                    </ul>
                    
                  </div>
                </header>
                <Outlet/>
                
              </div>
              
              )
  }
  