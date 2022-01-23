import axios from "axios";
import { Component } from "react";
export default class Dress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: [],
        };
    }
    componentDidMount() {
        axios.get("https://asmahamadfashion.herokuapp.com/api/designer")
            .then(result => {
                const x = result.data;
                this.setState({ x });
            });
    }
    render() {
        const myDress = this.state.x.filter(item => item.expertise == 'Dress' );
        return (
          <div>
              <table >
                <tbody>
                  {myDress.map((item => (
                                 <tr key={item.designer_Id}>
                                 <td>{item.designer_Name}</td>
                                 <td>{item.designer_Email}</td>
                                 <td>{item.designer_Phone}</td>
                                 <td>{item.expertise}</td>
                                 <td>{item.designer_age}</td>
                                 <td>{item.designer_Company}</td>
                                 <td>{item.bio}</td>
                    </tr>
                    )))
                }
                </tbody>
              </table>
            </div>
        );
      }
    }