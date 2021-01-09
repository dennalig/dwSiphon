import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import UserPage from '../pages/UserPage'; //https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue
// enter username and pw in this component

import Popup from 'reactjs-popup'; // popup import 
import 'reactjs-popup/dist/index.css';
import Modal from 'react-bootstrap/Modal';
import Header from './Header';
import PropTypes from 'prop-types';

EnterInfo.PropTypes ={
    type: PropTypes.string
};
export default function EnterInfo(props) {
// console.log(options);
const buttonType=props.type ; //https://reactjs.org/docs/components-and-props.html
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
    
const [showModal, setShowModal]= useState(false);
const closeModal = () => setShowModal(false);
const openModal = () => setShowModal(true);


var hideSelf= false; // var for rendering a new headercomponent 

   if(hideSelf){ 
    console.log("Hi")
       render(<Header/>);
       
   } //renders if we set hideself to true 

    return (
 
        <div style={{padding: '1px'}} >
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
         onClick= {hideSelf=true}
         ><Link to='/user' style={{color:'white'}}>{buttonType}
         </Link></Button>  {/*Link to userPage */}
        {/* Make a state to hide after logging in */}

        </form>

        <Modal
            show={showModal}
            onHide={()=> setShowModal(false)}
            dialogClassName="modal-90w"
            arial-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="modal_title">
                    Connect to Spotify?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure that you want to connect to spotify?
                </p>
            </Modal.Body>
        </Modal>
    
     </div>

    
    );
    


 

}
