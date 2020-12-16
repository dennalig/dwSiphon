import React from 'react';
import { Link } from 'react-router-dom'; // npm i react-router-dom



function Header(){
    return(
        <header style={headerStyle}>
            <h1>Discover Weekly Siphon</h1>
            
        </header>
    )
}

const headerStyle ={
    background: 'white',
    textAlign:'center',
    padding:'10px',
    fontFamily: 'Tahoma'
}


const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
