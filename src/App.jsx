import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import GetDataFeomUser from "./pages/getDataFromUser";
import '../src/css/game.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>

                <Router>
                    <Switch>

                        <Route path="/">
                            <GetDataFeomUser/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;


