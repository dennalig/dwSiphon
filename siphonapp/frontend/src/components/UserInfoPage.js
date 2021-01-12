import React, { Component } from 'react'
import {Button, Dropdown} from 'react-bootstrap'; 



// import Switch from "react-switch";// https://www.npmjs.com/package/react-switch
import { generate, presetPalettes } from '@ant-design/colors';
// https://www.npmjs.com/package/@ant-design/colors
import { CloseOutlined, CheckOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
//checks and x's
//https://www.npmjs.com/package/react-multi-carousel
//I think this could be cool



 import { FormGroup, FormControlLabel, Switch } from '@material-ui/core'; //https://material-ui.com/api/form-group/
//https://react-bootstrap.github.io/components/buttons/

export class UserInfoPage extends Component {
  
    // state will hold the current values of the user 
  
    // we will need states for different things here 
    constructor(props){
        super(props);
        this.state ={
            auto_siphon:true,
            allow_explicit: true,
    
            playlist_dest:"",
            last_siphoned:"DD-MM-YYYY",
            disconnect:true
    
        }
        this.handleAutoSiphonChange = this.handleAutoSiphonChange.bind(this);
        this.handleAllowExplicitChange = this.handleAllowExplicitChange.bind(this);
        this.handlePlaylistDestChange = this.handlePlaylistDestChange.bind(this);
        this.handleDisconnectChange = this.handleDisconnectChange.bind(this);
        

    }

    //change auto siphon function
    handleAutoSiphonChange(e){
        console.log(e.target.value);
        
        this.setState({
            auto_siphon: e.target.value === 'true' ? true : false,
        });

        
    }

    handleAllowExplicitChange(e){

        // console.log("changed allow Explicit");
        console.log(this.state.allow_explicit);
        this.setState({
            allow_explicit: e.target.value === 'true' ? true : false,
        });
    }

    handlePlaylistDestChange(e){
        
        this.setState({
            playlist_dest: e.target.value,
        });
    }

    handleDisconnectChange(e){

        this.setState({
            disconnect: e.target.value === 'true' ? true : false,
        });
    }

//*RENDER*
    render() {
        return (

        <div id="parent"> 
            <div className="mb-2" style={divStyle}> 
          
            {/* siphon button */}
            <Button 
            variant="primary"
            size="lg"
            style={buttonStyle}
            > 
            Pull Songs From Your Discover Weekly Playlist
            </Button>
            </div>
         
            <div id="autoSiphon"
            style={divStyle}>
                {/*Automatically Siphon Weekly div */}
            
                
                <div style={{display: 'inline',
                 float:'left',
                 margin: '1px 50px'}}> 
                 {/* div style floats to left */}
                {'Automatically Pull Songs Each Week: '}
                <Switch

                onChange={this.handleAutoSiphonChange}
                />
                
                
                </div>
            
            </div>

            <div id="allowExplicit"
            style={divStyle}>
                {/*Allow Explicit Songs div */}
            
                
                <div style={{display: 'inline',
                 float:'left',
                 margin: '1px 50px'}}> 
                 {/* div style floats to left */}
                {'Allow Explicit Songs: '}
                <Switch
                onChange={this.handleAllowExplicitChange}/>
                
                </div>
            
            </div>

            <div id="playlistDest"
            style={divStyle}> 
                {/* playlist dest dropdown div */}

                <div style={{display:'inline',
                 float:'left',
                 margin: '1px 50px'}}>
                    Save to Playlist:
                </div>
                {/* div for text */}

                <div style={{display: 'inline',
                 float:'left',
                 }}> 

                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                color="#1DB954">
                + Create A New Playlist
                </Dropdown.Toggle>

                   <Dropdown.Menu>
                    <Dropdown.Item >User Playlist 1</Dropdown.Item>
                    <Dropdown.Item >User Playlist 2</Dropdown.Item>
                    <Dropdown.Item >...</Dropdown.Item>
                    <Dropdown.Item >User Playlist x</Dropdown.Item>
                    </Dropdown.Menu>                
                </Dropdown>
               
                </div>
                
            </div>

            <div> 
                {/* Discoveries of the week 
                album showcase div */}

            {/* Image slider options here  */}
             {/* 
             CAROUSELLLLLL!; https://www.npmjs.com/package/react-multi-carousel
             https://codepen.io/bkainteractive/pen/VLxLYp
             
             
             */}

            </div>
            <div style={divStyle}>
                {/* text to display when last siphoned */}
                Last Siphoned: DD-MM-YYYY
            </div>

            <div style={divStyle} > 
                {/* Disconnect from DWSiphon div */}

            <Button 
            variant="secondary"
            size="sm"
            style={disconnectStyle}

            onClick= {this.handleDisconnectChange}
            > 
            Disconnect From DWSiphon
            </Button>
                </div>

            </div>
             
            
          
        )
    }
}

const buttonStyle ={
    flex: '0',
    padding: '15px 32px',
    margin: '35px 35px',
    float: 'left',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1DB954',
    fontFamily: 'Tahoma',
    fontSize: '20px',
    color: 'white',
}

const leftItemStyle ={
    float: 'left',
    margin: '35px 35px',
}

const disconnectStyle ={
    flex: '0',
    padding: '15px 32px',
    margin: '10px 10px',
    float: 'center',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1DB954',
    fontFamily: 'Tahoma',
    fontSize: '20px',
    color: 'black',
}

// https://www.w3schools.com/cssref/pr_class_display.asp
// inline -block is what we want 
const divStyle ={
    display: 'inline-block',
    width:'100%',
    fontFamily: 'Tahoma',
    fontSize: '20px',
    color: 'white',
}


export default UserInfoPage
