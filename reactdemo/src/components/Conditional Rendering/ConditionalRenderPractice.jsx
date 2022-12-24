import React, { Component } from 'react';

class ConditionalRenderPractice extends Component {
    constructor(props)
    {
        super(props)
        {
            this.state = {
                userLogIn : true
            }
        }
    }
    render() {

        return this.state.userLogIn && <div>User Logged In</div>


        return this.state.userLogIn ? <div>User Logged In</div> : <div>User not Logged In</div>


        let greet 
        if(this.state.userLogIn)
        {
            greet = <div>User Logged in</div>
        }
        else
        {
            greet = <div>User not Logged in</div>
        }
        return <div>{greet}</div>


        if(this.state.userLogIn)
        {
            return <div>User Logged in </div>
        }
        else 
        {
            return <div>User not Logged in</div>
        }


        return (
            <div>
               Good Morning Sai 
            </div>
        );
    }
}

export default ConditionalRenderPractice;