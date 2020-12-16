// import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Helmet from 'react-helmet'; //https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body/45588307

//component imports
import Header from './components/layout/Header';  // Header component
import About from './components/pages/About'; // About component


import './App.css';



class App extends Component{

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

    </Router>
     
    );
  }
}




export default App;
