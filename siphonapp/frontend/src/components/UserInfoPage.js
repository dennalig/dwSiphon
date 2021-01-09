import React, { Component } from 'react'
import {Button} from 'react-bootstrap'; 

import { FormGroup, FormControlLabel } from '@material-ui/core'; //https://material-ui.com/api/form-group/
//https://react-bootstrap.github.io/components/buttons/

export class UserInfoPage extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            

        <div id="parent"> 
            <div className="mb-2"> 
            
            {/* siphon button */}
            <Button 
            variant="primary"
            size="lg"
            style={buttonStyle}
            > 
            
                Pull Songs From Your Discover Weekly Playlist
            </Button>
            </div>

            <div>
                {/*Automatically Siphon Weekly div */}

            </div>

            <div>
                {/*Allow Explicit songs div */}

            </div>


            <div> 
                {/* playlist dest dropdown div */}
            </div>

            <div> 
                {/* Discoveries of the week 
                album showcase div */}
            </div>

            <div> 
                {/* Disconnect from DWSiphon div */}

            <Button 
            variant="secondary"
            size="sm"
            style={disconnectStyle}
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

const disconnectStyle ={
    flex: '0',
    padding: '15px 32px',
    margin: '35px 35px',
    float: 'center',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1DB954',
    fontFamily: 'Tahoma',
    fontSize: '20px',
    color: 'black',
}






export default UserInfoPage
