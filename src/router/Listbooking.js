import React from 'react'
import axios from "axios";
import { Component } from "react";
import {Link} from 'react-router-dom'


export default class Listbooking extends Component {

    constructor (props) {
        super(props);
        this.state = {
            MyArr: [],
            MyArr1:[],
          List  :[],
        };
    }

    componentDidMount() {
        let myDesignerDisplay = sessionStorage.getItem("designer")
        console.log(myDesignerDisplay)
        axios.get(`https://asmahamadfashion.herokuapp.com/api/designer/designers/${myDesignerDisplay}`)
            .then(result => {
                this.setState({ MyArr: result.data });
            });
    }
    
    post=()=>{
      let  myData={designer: this.state.MyArr }
    axios({
        method:"post",
        url:"https://asmahamadfashion.herokuapp.com/api/designer/add",
        data:myData
    })
     }

    
    deleteListCar(id){
        axios.delete(`https://asmahamadfashion.herokuapp.com/api/designer/delete/${id}`)
        .then(res =>{
            const myData = this.state.myData.filter
            (item => item.id !== id );
            this.setState({myData});
        })
    }
  
    
    render() {
        console.log(this.state.MyArr)
        let List = []
        List.push(this.state.MyArr)
        console.log(List)


        return (
          <div className="listd">
              <div className="a1">
                <tbody>
                  {List.map((item => (
                                <tr key={item.id}>
                                    <div className="a2">
                                   <img height="150 px" width="150 px" src={item.img}/>
                                <h3> Name {item.designer_Name}</h3>
                               <h3>  email{item.designer_Email}</h3>
                               <h3>phone  {item.designer_Phone}</h3>
                               <h3> company{item.designer_Company}</h3>
                               <h3> age {item.designer_Age}</h3>
                               <h3> bio: {item.bio}</h3>
                               {/* <h3>User Name :{item.user.userName}</h3> */}
                               {/* <h3> {item.img}</h3> */}
                               <h3> expertise {item.expertise}</h3>
                               <Link to ="/Booking">
                                 <button onClick={this.post}>Request</button></Link>
                        
                                 </div>   
                    </tr>
                  )))
                }
                </tbody>
                </div>
            </div>
        );
      }
}
