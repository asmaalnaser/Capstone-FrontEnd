import axios from "axios";
import { Component } from "react";
import {Link} from 'react-router-dom'



export default class ListDesigner extends Component {

    constructor (props) {
        super(props);
        this.state = {
            MyArr: [],
            buttonId: ""
        };
    }


    handleButtonId = (designerId) => {
      console.log("designer id is=> " + designerId)
      sessionStorage.setItem("designer",designerId)
  }


      componentDidMount() {
        axios.get("api/designer")
            .then(result => {
                const MyArr = result.data;
                this.setState({ MyArr });
            });
    }
    deleteListCar(id){
      // let log=localStorage.getItem("Check")
      // if (log=="authenticatedADMIN"){
        axios.delete(`api/designer/delete/${id}`)
        .then(res =>{
            const MyArr = this.state.MyArr.filter
            (item => item.id !== id );
            this.setState({MyArr});
        })
   
      }
    // post=()=>{
    //   let  myData={designer: this.state.MyArr }
    // axios({
    //     method:"post",
    //     url:"api/designer/add",
    //     data:myData
    // })
    // }   

    render() {
        return (
          <section id="portfolio" class="bg-light-gray" >
               
                <br />
                <ul class="listd">
                    <li class="a1">
                       

             
               
               
                  {this.state.MyArr.map((item => (
                                <div key={item.id}>
                                  
                                 
                                  <div className="a2">
                                  <img height="150 px" width="150 px" src={item.img}/>
                               <h2>name : {item.designer_Name}</h2>
                                <h4> email : {item.designer_Email}</h4>
                                <h4>phone :{item.designer_Phone}</h4>
                               <h4>company :{item.designer_Company}</h4>
                              <h4>age :{item.designer_Age}</h4>
                              <h4>bio :{item.bio}</h4>
                              {/* <img {item.img} /> */}
                               <h4> expertise:{item.expertise}</h4>

                                
                                <button onClick={(e) => this.deleteListCar(item.id , e)}>delete</button>
                                <Link to="/Listbooking">
                              <button onClick={() => { this.handleButtonId(item.id) }}  value={this.state.buttonId} >Show Details</button> </Link>
                              
                              </div>
                                
                    </div>


                  )))
                }
               
              
            </li>
            </ul>
            </section>
            
        );
      }
    }