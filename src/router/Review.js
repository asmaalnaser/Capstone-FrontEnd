import axios from "axios";
import { Component } from "react";
// import '../App.css';
import { Link } from 'react-router-dom'


export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ReviewEmphasis: [],
            MyArr:[]
        };
    }
    componentDidMount() {
        axios.get("https://asmahamadfashion.herokuapp.com/reviews")
            .then(result => {
                const ReviewEmphasis = result.data;
                this.setState({ ReviewEmphasis });
            });
    }
    deleteListCar(id){
        // let log=localStorage.getItem("Check")
        // if (log=="authenticatedADMIN"){
          axios.delete(`https://asmahamadfashion.herokuapp.com/api/delete/${id}`)
          .then(res =>{
              const MyArr = this.state.MyArr.filter
              (item => item.id !== id );
              this.setState({MyArr});
          })
     
        }    // deleteListCar(id) {
    //     axios.delete(`api/delete/${id}`)
    //         .then(res => {
    //             const ReviewEmphasis = this.state.ReviewEmphasis.filter
    //                 (item => item.id !== id);
    //             this.setState({ ReviewEmphasis });
    //         })
    // }
    render() {
        return (
            <section id="portfolio" class="bg-light-gray">
                <div className="card1">
                {this.state.ReviewEmphasis.map((item => (
                        <div key={item.id} className='row' padding="50px" >
                         
                            <div className="container1">
                                {/* <p id="demotext1">id: {item.Id}</p> */}
                                <p id="demotext1">Date:{item.date}</p>
                                <p id="demotext1">details:{item.details} </p>
                                <button onClick={(e) => this.deleteListCar(item.id , e)}>delete</button>
                                {/* <p id="demotext1">Owner Of Car:{item.owner.owner_firstName}{item.owner.owner_lastName}</p> */}
                                {/* <button onClick={(e) => this.deleteListCar(item.id, e)}>Delete Car</button> */}
                                <br />
                             {/* <a href="/Booking">  <button onClick={() => { this.handleButtonId(item.id) }}  value={this.state.buttonId} >Show Details</button> </a> */}
                            </div>
                        </div>
                    )))
                    }
                </div>
            </section>
        );
    }
}