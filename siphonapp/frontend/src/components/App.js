import React, { Component } from 'react';
import { render } from "react-dom";

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Helmet from 'react-helmet'; //https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body/45588307

//component imports
import Header from './layout/Header';  // Header component
import About from './pages/About'; // About component


import './appheader.css';

import axios from "axios";// npm i axios -- checks the proxy upon 3000 fail 
import UserPage from "./pages/UserPage";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state= {

        }
    }

    render() {
        return(

            <div >
            <Router>

   
            <div className="appheader">
               <Helmet> {/* https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body*/}
                 <style>{'body {background-color: #191414;}'}</style>
               </Helmet>
               <Header />
               <Route exact path="/"/> {/* Home Route (self) */}
               <Route path="/about" component= {About}/> {/* About Route */}
               <Route path ="/userPage" component ={UserPage}/>
               
             </div>
           
         
             {/* <p style={{color:'white'}}>here is {this.state.weather}</p> */}
             </Router>
             </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);


