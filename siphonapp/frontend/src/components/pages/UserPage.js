import React, { Component } from 'react'

//page for user status and where they will be able to decide how songs are siphoned from discover weekly
//TODO:
/* 

Toggle buttons:
1. Toggle Siphoning
2. Automatically Siphon weekly

Status:

3. Current playlist Destination Dropdownbox
4. Scolling display of album covers of pulled songs from the week

Update with new preferences:
5. Update preferences
*/

export class UserPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <p style={{color:'white'}}> This is the user Page </p>
            </div>
        )
    }
}

export default UserPage
