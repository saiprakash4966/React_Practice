import React, { Component } from 'react';

class GreetingUser extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render() 
    {

       // Type4 :- Shor circuit operators

        return this.state.isLoggedIn && <div>Welcome Saiprakash</div>

        //Type3 :- Ternary conditional operators

        // return  this.state.isLoggedIn ?  (<div>Welcome Saiprakash</div>) : (<div>Welcome Guest</div>)
        

        

        //Type2 :- Using Element Variables
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message = <div>Welcome Saiprakash</div>
        // }
        // else
        // {
        //     message =<div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        //Type1 : - Using If Else Statement

    //   if(this.state.isLoggedIn )                    
    //   {
    //     return  <div>Welcome Saiprakash</div>
    //   }
    //   else
    //   {
    //     return <div>Welcome Guest</div>
    //   }

        // return (
        //     <div>
        //       Welcome Saiprakash  
        //     </div>
        // );
    }
}

export default GreetingUser;