import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'; // npm i react-router-dom

//component imports
import EnterInfo from './EnterInfo'; // EnterInfo component
//Spotify color values 
//Green Hex color: #1DB954
//Black Hex color: #191414


//TODO: Make dynamic Login/Logout display whether user is logged in 

export class Header extends Component{

    state ={
        showEnterInfo: false,
        loginConnect:""
    }; // this controls the drop down of entering info, state


    showInfo = (showVersion) => {
        this.setState({showEnterInfo:true});
        this.setState({loginConnect:showVersion});
        //console.log(showVersion);
        
    } // function for changing the state 

    hideInfo =() => {
        this.setState({showEnterInfo:false});
    } //reverts to hiding when on a new page 

    render(){ // 

        return(
            <header style={headerStyle}>
                <h1> <Link style={linkStyle} to='/' onClick={this.hideInfo}>
                    Discover Weekly Siphon...
                    </Link>
    
                <input type="button"
                value="Connect Your Spotify Account"
                className="btn"
                style={buttonStyle}
                onClick = {
                    ()=>this.showInfo("Connect")
                } 
                />

                <input type="button"
                value="Login"
                className="btn"
                style={buttonStyle} 
                onClick = {
                   ()=> this.showInfo("Login")
                }
                />
                {/* https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method */}
    
                <div className="container">
                    <p style={optionStyle}>
                        <Link style={linkStyle} to='/' onClick={this.hideInfo}>Home </Link> 
                        |
                        <Link style={linkStyle} to='/about' onClick={this.hideInfo} >About </Link>
                    </p>
                </div>

                {this.state.showEnterInfo ? <EnterInfo type={this.state.loginConnect}/>: null} {/*this is the enter infocomponent*/}
                
                {/* https://www.youtube.com/watch?v=3wvdq_j5S1c&t=70s   
                
                Thanks Ben Awad */}
             {/* https://reactjs.org/docs/components-and-props.html  ---
             Passes in the value of the button clicked */} 

                
                </h1>
                
                
                
    
            </header>
        )
    }

 
}

const headerStyle ={
    background: 'white',
    textAlign:'justify',
    padding:'10px',
    fontFamily: 'Tahoma'
}


const buttonStyle ={
    flex: '0',
    padding: '15px 32px',
    margin: '5px',
    float: 'right',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1DB954',
    fontFamily: 'Tahoma',
    fontSize: '20px',
    color: 'white'
}

const optionStyle ={
    fontFamily: 'Tahoma',
    fontSize: '20px'
}


const linkStyle ={
    color: '#191414',
    textDecoration: 'none'
}
export default Header
