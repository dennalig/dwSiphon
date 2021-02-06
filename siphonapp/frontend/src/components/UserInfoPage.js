import React, { Component } from 'react'
import {Button, Dropdown} from 'react-bootstrap'; 
 import { Switch } from '@material-ui/core'; //https://material-ui.com/api/form-group/
//https://react-bootstrap.github.io/components/buttons/

import DiscoveryCarousel from './DiscoveryCarousel';

export class UserInfoPage extends Component {
  
    // state will hold the current values of the user 
  
    // we will need states for different things here 
    constructor(props){
        super(props);
        this.state ={
            username:null,
            auto_siphon:false,
            allow_explicit: false,
    
            playlist_dest:null,
            last_siphoned:null,
            disconnect_account:false,
            session_name : null
    
        }
        //bindings
        this.handleAutoSiphonChange = this.handleAutoSiphonChange.bind(this);
        this.handleAllowExplicitChange = this.handleAllowExplicitChange.bind(this);
        this.handlePlaylistDestChange = this.handlePlaylistDestChange.bind(this);
        this.handleDisconnectChange = this.handleDisconnectChange.bind(this);
        
        //save changes
        this.handleSaveChanges= this.handleSaveChanges.bind(this);

    }

    //pull button
    handlePullButtonClick(e){
        console.log("Songs Pulled");
    }

    //change auto siphon function
    handleAutoSiphonChange(e){

        this.state.auto_siphon=!this.state.auto_siphon
        this.setState({auto_siphon:this.state.auto_siphon});
        // console.log(this.state)
      
        
        
    }

    handleAllowExplicitChange(e){

        // console.log("changed allow Explicit");

        this.state.allow_explicit=!this.state.allow_explicit;
        //setting the state value changes the inputted value that we are dealing with
        this.setState({allow_explicit:this.state.allow_explicit});
        //setting the state changes the button
        
       
      
        // console.log(this.state);
    }

    handlePlaylistDestChange(e){
        
        this.state.playlist_dest =  e.target.value+"";
        this.setState({
            playlist_dest: e.target.value,
        });
    }

    handleSaveChanges(e){//save current changes 
        console.log("Current State \n");
        // console.log(this.state);

        //connection to backend
        //converting frontend to JSON
        // console.log("username: "+this.state.username)
        // console.log("auto_siphon: "+ this.state.auto_siphon)
        // console.log("allow_explicit: "+ this.state.allow_explicit)
        // console.log("playlist_dest: "+ this.state.playlist_dest)
        // console.log("last_siphoned: "+ this.state.last_siphoned);
        // console.log("disconnect_account: "+ this.state.disconnect_account)

        const requestOptions ={
            method:'POST',
            headers:{"Content-Type": "application/json; charset=UTF-8"},
            body:JSON.stringify({
                username: this.state.username,
                auto_siphon: this.state.auto_siphon,
                allow_explicit: this.state.allow_explicit,
                playlist_dest : this.state.playlist_dest,
                last_siphoned : this.state.last_siphoned,
                disconnect_account : this.state.disconnect_account,
                session_name: this.state.session_name
            })
                //last_siphoned is a date value, which is the unsupported media type
        };

        fetch('/api/create-pref', requestOptions).then((response) => response.json())
                                                .then((data)=> console.log(data));


    } //end handle 

    handleDisconnectChange(e){

        this.state.disconnect = true;
        this.setState({
            disconnect:this.state.disconnect
        });
        // console.log(this.state)
    }


  
//*RENDER*
    render() {
       
        return (

            //main div 
        <div id="parent"> 
            <div className="mb-2" style={divStyle}> 
          
            {/* siphon button */}
            <Button 
            variant="primary"
            size="lg"
            style={buttonStyle}
            onClick ={this.handlePullButtonClick}
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
                onClick={this.handleAutoSiphonChange}
                color="primary"
                value="siphon_switch"
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
                onChange={this.handleAllowExplicitChange}
                checked ={this.state.allow_explicit}
                color="primary"
                value="explicit_switch"/>
                
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
                {this.state.playlist_dest}
                </Dropdown.Toggle>

                   <Dropdown.Menu>
                    <Dropdown.Item as="button"
                    onClick={this.handlePlaylistDestChange}
                    value="User Playlist 1">User Playlist 1
                    </Dropdown.Item>

                    <Dropdown.Item as="button"
                    onClick={this.handlePlaylistDestChange}
                    value="User Playlist 2">User Playlist 2
                    </Dropdown.Item>

                    <Dropdown.Item as="text" >...</Dropdown.Item>

                    <Dropdown.Item as ="button">+ Create A New Playlist</Dropdown.Item>
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

             <DiscoveryCarousel/> 
             {/* Discovery Carousel component
             Will need a prop */}

            </div>
            <div style={divStyle}>
                {/* text to display when last siphoned */}
                Last Siphoned: {this.state.last_siphoned}
            </div>

            
            <div style={divStyle} > 
                {/* save Changes */}

            <Button 
            variant="secondary"
            size="sm"
            style={saveChangeStyle}

            onClick= {this.handleSaveChanges}
            > 
            Save Changes
            </Button>
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

const saveChangeStyle ={
    flex: '0',
    padding: '5px 10px',
    margin: '10px 10px',
    float: 'center',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: 'white',
    fontFamily: 'Tahoma',
    fontSize: '20px',
    color: '#1DB954',
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
