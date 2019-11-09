import React, {Component} from 'react';
import '../style/App.css';
import Login from "./Login";
import {Switch,Route} from 'react-router-dom'
import SignUp from "../SignUp";
import history from '../history';
import {Router} from "react-router-dom";
import User from '../components/User';
import MetrologistInfo from "./MetrologistInfo";
import History from "./History";
class App extends Component {

    render() {

        return (

            <div className="App">
                <div className="App-header">
                    <Switch>
                        <Router history={history}>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Switch>
                    <Route exact path="/user" component={User} />
                    <Route exact path="/user" component={History} />
                    <Route exact path="/user" component={MetrologistInfo} />
                    </Switch>
                        </Router>
                    </Switch>
                </div>
            </div> )
    }
}


export default App;
