import React from "react";
import react, { useState } from 'react';
import axios from "axios";
import {useNavigate} from  'react-router-dom'


export default function ListReview() {
    let [details, setDetails] = useState("")
    let [date, setDate] = useState("")
    let [id, setBooking_id] = useState("")


    const navigate=useNavigate();


    function handleDetails(event) {
        setDetails((details = event.target.value));
    }
    function handleDate(event) {
        setDate((date = event.target.value));
    }
    function handleBookingId(event) {
        setBooking_id((id = event.target.value));
    }
    function rgisterHandel(event) {
        event.preventDefault();


        let Reviews = { details: details, date: date , booking: { id: id }}
        console.log("insid function");
        console.log(Reviews)
        axios({
            method: 'post',
            url: 'https://asmahamadfashion.herokuapp.com/api/add',
            data: Reviews,

        });
        console.log(" after post ");
        navigate("/Review")
    }
    return (
        <form class="log">
            <h3 > Register Review </h3>
            <br />  <br />
            <label className="last"> Review Details: </label><br />
            <input type="Details" name="Details"
                placeholder="Review" class="textbox"
                onChange={handleDetails}
            />
            <br />  Review Date: <br />
            <label>: </label><br />
            <textarea maxlength="290" name="date" id="info"
                placeholder="date" class="textbox"
                onChange={handleDate}
            />
            <br />
          
            <label> BookingId: </label><br />
            <input type="text" name="BookingId"
                placeholder="BookingId" class="textbox"
                onChange={handleBookingId}
            />
            <br />  <br />
             
             <button onClick={(e) => { rgisterHandel(e) }}>Submit</button>
        </form>
    );
}