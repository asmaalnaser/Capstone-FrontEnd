import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './router/List.css';
import './router/Page.css';
import ListDesigner from './router/ListDesigner';
import Login from './router/Login';
import Home from './router/Home'; 
import Designer from './router/designer';
import Pictuer from './router/Pictuer';
import Dresses from './router/Dresses';
import Photo from './router/Photo';
import Access from './router/Access';
import Home2 from './router/Home2';
import Acssories from './router/Acssories';
import Page from './router/page';
import ListReview from './router/ListReview';
import Review from './router/Review';
import Listbooking from './router/Listbooking';
import Booking from './router/Booking';




 
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Page />} /> */}
      <Route path="/" element={<App />}>
      {/* <Route path="/Page" element={<Page />} /> */}
      <Route path="/Login" element={<Login />} />
        <Route path="/ListDesigner" element={<ListDesigner />} />
        <Route path="/Designer" element={<Designer />} />
        <Route path="/Listbooking" element={<Listbooking />} />
        <Route path="/Dresses" element={<Dresses />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path ="/Acssories" element={<Acssories/>} />
        <Route path ="/Photo" element={<Photo/>} />
        <Route path ="/Access" element={<Access/>} />
        <Route path ="/ListReview" element={<ListReview/>} />
        <Route path ="/Review" element={<Review/>} />
        <Route path="/Home" element={<Home />}>
        {/* <Route path="/Page" element={<Page />} /> */}
        
          
          
        </Route>
        <Route path="/Pictuer" element={<Pictuer />} />
        <Route path="/Booking" element={<Booking />} />
        

      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));

