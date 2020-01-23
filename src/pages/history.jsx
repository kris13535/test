import React from 'react';
import axios from 'axios';
import '../css/game.css'

class History extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user_name: this.props.user_name,
            data_history: '',
        };
        // console.log(this.state)
    }


    componentDidMount(){
        this.get_data();
    };

    async get_data(){
        const data = await axios.post(`http://localhost:5000/dataFormGame/history`,{user_name:this.props.user_name});
        this.setState({data_history: data});
        console.log(data.data);
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">date</th>
                        <th scope="col">min_number</th>
                        <th scope="col">max_number</th>
                        <th scope="col">your number</th>
                        <th scope="col">computer guess</th>
                    </tr>
                    </thead>



                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default History;
