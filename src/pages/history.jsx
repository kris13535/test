import React from 'react';
import axios from 'axios';
import '../css/game.css'

class History extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user_name: this.props.user_name,
            data_history: [],
        };
    }


    componentDidMount(){
        this.get_data();
    };

    async get_data(){
        const data = await axios.post(`http://localhost:5000/dataFormGame/history`,{user_name:this.props.user_name});
        this.setState({data_history: data.data});
        console.log(data.data);
    }

    tabel_creat = () =>{
        return this.state.data_history.map((data, i) =>
            <tr>
                <th scope="row">{i}</th>
                <td>{data.min_number}</td>
                <td>{data.max_number}</td>
                <td>{data.user_number}</td>
                <td>{data.computer_guess}</td>
                <td>{data.created_on}</td>
            </tr>
        );
    };

    render() {
        console.log(this.state);
        return(
            <div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">min_number</th>
                        <th scope="col">max_number</th>
                        <th scope="col">your number</th>
                        <th scope="col">computer guess</th>
                        <th scope="col">date</th>
                    </tr>
                    </thead>


                    <tbody>
                    {this.state.data_history.length &&
                        this.tabel_creat()
                    }

                    </tbody>
                </table>
            </div>
        )
    }
}
export default History;
