import React from 'react';
import axios from 'axios';
import '../css/game.css'
import History from "./history";

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            history_games: false,
            user_name: this.props.name,
            min_number: parseInt(this.props.min_number),
            max_number: parseInt(this.props.max_number),
            computer_guess: [],
            user_number: null,
            one_comp_guess: this.getRndInteger(parseInt(this.props.min_number), parseInt(this.props.max_number)),
        };
    }


    getRndInteger(min, max) {
        return  Math.floor(Math.random() * (max - min + 1) ) + min;

    };

    smaller_number = () => {
        let max = this.state.one_comp_guess;
        this.state.computer_guess.push(max);
        this.setState({
             one_comp_guess: this.getRndInteger(this.state.min_number, max )
        })
    };

    biger_number = () => {
        let min = this.state.one_comp_guess;
        this.state.computer_guess.push(min);
        this.setState({
            one_comp_guess: this.getRndInteger(min,this.state.max_number )
        })
    };

    my_number = () => {
        this.setState({
            user_number: this.state.one_comp_guess,
        }, () => {this.send_data()});

    };

    send_data(){
        this.data()
    }

    async data(){
        const data = await axios.post(`http://localhost:5000/dataFormGame`,this.state );
        console.log(data);
    }


    get_my_history_games = () =>{
        this.setState({
            history_games: !this.state.history_games,
        })
    };




    render() {
        console.log(this.state);
        return(
            <div>
                <div className={"card"} style={{margin: "20px", padding: "20px"}}>
                    <div className="alert alert-primary " role="alert">
                        <p> Your number is {this.state.one_comp_guess} ? </p>
                    </div>

                    <div className={"d-flex"}>
                        <div className={"butt"}>
                            <button type="button" className="btn btn-outline-primary butt" onClick={this.smaller_number}>My number is smaller than that number</button>
                        </div>


                        <div className={"butt"}>
                            <button type="button" className="btn btn-outline-success butt" onClick={this.my_number}>it's my number</button>
                        </div>

                        <div className={"butt"}>
                            <button type="button" className="btn btn-outline-primary butt" onClick={this.biger_number}>My number is greater than that number</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="button" className="btn alert-success" onClick={this.get_my_history_games}>get my history games</button>
                    </div>
                </div>

                {this.state.history_games === true ?
                    <History user_name={this.state.user_name}/>
                    :
                    null
                }

            </div>

        )
    }
}

export default Game;
