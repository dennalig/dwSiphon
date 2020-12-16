import React, {Component} from 'react';

import { Link } from 'react-router-dom'; // npm i react-router-dom

//component imports
import EnterInfo from './EnterInfo'; // EnterInfo component

//Spotify color values 
//Green Hex color: #1DB954
//Black Hex color: #191414


//TODO: Make dynamic Login/Logout display whether user is logged in 

export class Header extends Component{
    render(){ // 
        return(
            <header style={headerStyle}>
                <h1>Discover Weekly Siphon
    
                <input type="button"
                value="Connect Your Spotify Account"
                className="btn"
                style={buttonStyle} />

                <input type="button"
                value="Login"
                className="btn"
                style={buttonStyle} />
    
                <div className="container">
                    <p style={optionStyle}>
                        <Link style={linkStyle} to='/'>Home </Link> 
                        |
                        <Link style={linkStyle} to='/about'>About </Link></p>
                </div>

                <EnterInfo/> {/* renders component within component */}
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
