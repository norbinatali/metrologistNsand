import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route} from "react-router-dom";

import { CookiesProvider } from 'react-cookie';
import HomePage from "./HomePage";
import Registration from "./Authorization/Registration";

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

  }

  callAPI() {
    fetch("http://localhost:9000/testApi")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  };
  render() {
    return (
       <CookiesProvider>
         <BrowserRouter>
           <Route path="/" exact render={props => <HomePage{...props} />} />
           <Route path="/registration" render={props => <Registration{...props} />} />
         </BrowserRouter>

       </CookiesProvider>
    );
  }
}

export default App;
