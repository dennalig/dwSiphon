import React from 'react'
// About page 
export default function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p style={paraStyle}> This is a script used to automatically
                pull your Discover Weekly songs into a 
                saved playlist for you every week.
            </p>

        </React.Fragment>
    )
}

const paraStyle ={
    color:'white',
    fontFamily: 'Tahoma',
    fontSize: '15px'
}

