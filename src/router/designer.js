import React, { useState } from 'react';
import react from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import {useNavigate} from  'react-router-dom'
export default function Designer() {
   

    
    let [designer_Name, setDesigner_Name] = useState("");
    let [designer_Email, setDesigner_Email] = useState("");
    let [designer_Phone, setDesigner_Phone] = useState("");
    let [designer_Company, setDesigner_Company] = useState("");
    let [designer_Age, setDesigner_Age] = useState("");
    let [bio, setBio] = useState("");
    let [expertise, setExpertise] = useState("");
    let [img, setImg] = useState("");

   const navigate=useNavigate();

    function handleDesigner_Name(event) {
        setDesigner_Name(designer_Name=event.target.value);
    }
    function handleDesigner_Email(event) {
        setDesigner_Email(designer_Email=event.target.value);
    }
    function handleDesigner_Phone(event) {
        setDesigner_Phone(designer_Phone=event.target.value);
    }
    function handleDesigner_Company(event) {
        setDesigner_Company(designer_Company=event.target.value);
    }
    function handleDesigner_Age(event) {
        setDesigner_Age(designer_Age=event.target.value);
    }
    function handleBio(event) {
        setBio(bio=event.target.value);
    }
    function handleExpertise(event) {
        setExpertise(event.target.value);
    }
    function handleImg(event) {
        setImg(img=event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let Designer = {
            designer_Name: designer_Name, designer_Email: designer_Email,
           designer_Phone: designer_Phone, designer_Company: designer_Company, designer_Age: designer_Age, bio: bio, img: img,expertise:expertise
       }
  
   
        console.log("insid function");
        axios({
            method: "post",
            url: "api/designer/add",
            data: Designer
        });
        // ?else{alert("just for ADMIN")}
        console.log(" after post ");
        navigate("/ListDesigner")
    }
    
 


    return (
        <fieldset>
        <form id="msform">
            <h4 className="card__title" > Register DESIGNER </h4>
            <form className='log' onSubmit={handleSubmit}>
                <label> Enter Your Name :</label>
                <input placeholder=" Name" onChange={handleDesigner_Name} />
                <br />
                <br />
                <label> EMAIL :  </label>
                <input placeholder=" Email" onChange={handleDesigner_Email} />
                <br />
                <br />
                <label> PHONE : </label>
                <input placeholder=" phone" onChange={handleDesigner_Phone} />
                <br />
                <br />
                <label> COMPANY : </label>
                <input placeholder="COMPANY" onChange={handleDesigner_Company} />
                <br />
                <br />
                <label> AGE : </label>
                <input placeholder=" AGE" onChange={handleDesigner_Age} />
                <br />
                <br />
                <label> BIO : </label>
                <input placeholder=" BIO" onChange={handleBio} />
                <br />
                <br />
                <label> FOR EXAMPLE :</label>
                <input placeholder=" Dresses wedding ,Acssories ,Dresses" onChange={handleExpertise} />

                <br />
                <br />
                <label> IMG </label>
                <input placeholder=" IMG" onChange={handleImg} />
                <br />
    
                  <button  onClick={handleSubmit} >submit</button>
                  
            </form>

           </form>
            </fieldset>
            
     );      
    }

