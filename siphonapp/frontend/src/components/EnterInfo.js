import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import UserPage from '../pages/UserPage'; //https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue
// enter username and pw in this component
export default function EnterInfo(props) {
// console.log(options);
const buttonType=props.type; //https://reactjs.org/docs/components-and-props.html
//TODO: conditional for if clicked on login or connect 
    // const [showResults, setShowResults]= React.userState(false);
    const inputBoxStyle={
       fontSize:'15px',
       textAlign:'left',
       marginRight:'4px',
       borderColor:'#1DB954'
       
       
    };// text input style

    const formStyle ={
        display:'flex', 
        float:'right',
        height:'30px '
       
        
    };// form style

    const enterButtonStyle ={
        flex: '0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'blue',
        fontFamily: 'Tahoma',
        color: 'white',
        
        
    }
    
const [hide]= useState(false);

    function submit(event){
        event.preventDefault();
        console.log("here");
    };

    if(hide){
        
        return (null);
    }
    else{

    

    return (
 
        <div style={{padding: '1px'}} onClick= "onClick">
           {/* https://stackoverflow.com/questions/28268835/react-onclick-event-on-component 
           so what works is simply setting onClick = "onClick" ...wow...*/}
        <form
        style ={formStyle}>
         {/* https://www.youtube.com/watch?v=7Vo_VCcWupQ */}
         <input type="text"
         id ="username-email"
         size='25'
         placeholder="username or email"
         style={inputBoxStyle}
         >
         </input>
    
         <input type="password"
         id ="password"
         size='25'
         placeholder="password"
         style={inputBoxStyle}
         >
         </input>
    
         
         <Button renderAs ="button"
         id ="enter"
         className="btn"
         style={enterButtonStyle}
         
         ><Link to='/user' style={{color:'white'}}>{buttonType}
         </Link></Button>  {/*Link to userPage */}
        {/* Make a state to hide after logging in */}
        
        </form>
     </div>
    
    );
    }


 

}
