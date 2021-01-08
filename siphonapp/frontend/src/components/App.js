import React, { Component } from 'react'
import { render } from "react-dom";
import Helmet from 'react-helmet';//https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body/45588307


import HomePage from './HomePage';
import Header from './Header';

export default class App extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div id ="taskBar" style={taskBarStyle}>

        
        <Helmet> {/* https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body*/}
        <style>{'body {background-color: #191414;}'}</style>
        </Helmet>
        
        <HomePage />
            </div>
        );
    }
}

//taskbar style 
const taskBarStyle = {
    position:"fixed",
    width:"100%",
    height:"100%", 
    display:"flex",
    textAlign:"center",
    flexDirection: "column"
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
