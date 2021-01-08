import React, { Component } from 'react'

import {BrowserRouter as Router,
    Switch,
    Route, 
    Link, 
    Redirect } from "react-router-dom";
import Header from './Header';
import UserInfoPage from './UserInfoPage';
import About from './About'; 

export class HomePage extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <Router>
               <Header/> {/* header component */}
                
                <Switch>
                    <Route exact path="/"><p> This is the Home Page</p></Route>
                    <Route path="/user" component={UserInfoPage}/>
                    <Route path="/about" component={About}/>

                </Switch>
                
            </Router>
        );
    }
}

export default HomePage
