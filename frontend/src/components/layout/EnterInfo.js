import React from 'react'

// enter username and pw in this component
export default function EnterInfo() {

//TODO: conditional for if clicked on login or connect 
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

    return (
        <div style={{padding: '3px'}}>
           <form
           style ={formStyle}>
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

            <input type ="button"
            id ="enter"
            value ="login"
            className="btn"
            style={enterButtonStyle}
            />

           </form>
        </div>
    )


}
