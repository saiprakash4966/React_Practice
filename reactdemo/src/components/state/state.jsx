import React , { Component } from "react";

class Welcome extends Component
{
    constructor()
    {
        super();
        this.state ={
            message:'Welcome to Javatpoint'

        }
    }

    changeMessage()
    {
        this.setState({
            message:'Thanks you for subscribe'
        })
    }
    render()
    {
      return  (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() =>this.changeMessage()}>subscribe</button>
      </div>
        
      )
    }
}
export default Welcome