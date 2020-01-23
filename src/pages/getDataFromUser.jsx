import React from 'react';
import Game from "./game";

class GetDataFeomUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            min_number: null,
            max_number:null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target:{name,value}}){
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event)=> {
        event.preventDefault();
    };


    render() {
        // console.log(this.state);
        return(
            <div className={"home_page d-flex"}>
                {this.state.min_number && this.state.max_number && this.state.name ?
                   <Game min_number={this.state.min_number} max_number={this.state.max_number} name={this.state.name} />
                    :
                    <div className={"card"} style={{margin: "20px", padding: "20px"}}>
                        <h1>Guess The Number</h1>
                        <form className={"flex-column"} method="post" onSubmit={this.handleSubmit}>
                            <div className="col-md-4 mb-3 d-flex">
                                <label className={"input_label"} htmlFor="validationDefault01">your name</label>
                                <input  className="form_input" type="text"  name="name" placeholder="Enter your name" onBlur={this.handleChange} />
                            </div>
                            <div className="col-md-4 mb-3 d-flex">
                                <label className={"input_label"} htmlFor="validationDefault01">min number</label>
                                <input  className="form_input" type="number" min={1} name="min_number" placeholder="Enter min number" onBlur={this.handleChange} />
                            </div>
                            <div className="col-md-4 mb-3 d-flex">
                                <label className={"input_label"} htmlFor="validationDefault01">max number</label>
                                <input  className="form_input" type="number" min={2} name="max_number" placeholder="Enter max number" onBlur={this.handleChange} />
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default GetDataFeomUser;
