// import logo from './logo.svg';
import React, {Component } from "react";
import Header from './components/layout/Header'; 
import './App.css';
import Helmet from 'react-helmet'; //https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body/45588307

class App extends Component{

  render(){
    return(
      // document.body.style = 'background:#191414 ;',
    <div className="App">
      <Helmet> {/* https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body*/}
        <style>{'body {background-color: #191414;}'}</style>
      </Helmet>
      <Header />
    </div>
     
    );
  }
}




export default App;
