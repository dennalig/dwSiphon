// import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Helmet from 'react-helmet'; //https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body/45588307

//component imports
import Header from './components/layout/Header';  // Header component
import About from './components/pages/About'; // About component


import './App.css';

import axios from "axios";// npm i axios -- checks the proxy upon 3000 fail 
// to link front end to backend
//go to package.json, add variable proxy to whatever the backend was running on
// if we ever make a request to an end point, and cant find on front end ...will look there

class App extends Component{
 
  // constructor(){
  //   super()
  //   this.state ={
  //     weather: "",
  //   }
    
  // };

  // componentDidMount = () =>{ // default funct 
  //   axios.get("/getWeathertoronto").then(response =>{
  //     console.log(response.data.temp);
  //     this.setState({

      
  //       weather: response.data.temp
  //     }
  //     ); // this sets the state to the passed in weather data
  //   });
  // };

  /* but you dont want api requests in these places actually.. 
  can cause timing out

  use redux saga or thunk 
  YouTuber: Anthony Sistilli

  */

  //--->end of weather app example 

  render(){
    return(
      // document.body.style = 'background:#191414 ;',
   <Router>

   
   <div className="App">
      <Helmet> {/* https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body*/}
        <style>{'body {background-color: #191414;}'}</style>
      </Helmet>
      <Header />
      <Route exact path="/"/> {/* Home Route (self) */}
      <Route path="/about" component= {About}/> {/* About Route */}
      

    </div>

    {/* <p style={{color:'white'}}>here is {this.state.weather}</p> */}
    </Router>
     
    );
  }
}

//for onbutton click info go to timestamp 18:42 at
//here: https://www.youtube.com/watch?v=kJA9rDX7azM&t=554s



export default App;
