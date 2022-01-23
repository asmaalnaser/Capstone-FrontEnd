import axios from "axios";
import { Component } from "react";


export default class Acssories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: [],
        };
    }
    componentDidMount() {
        axios.get("api/designer")
            .then(result => {
                const i = result.data;
                this.setState({ i });
            });
    }
    render() {
        const myAcssories = this.state.x.filter(item => item.expertise == 'Acssories' );
        
        return (
          <div>
              <table >
                <tbody>
                  {myAcssories.map((item => (
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