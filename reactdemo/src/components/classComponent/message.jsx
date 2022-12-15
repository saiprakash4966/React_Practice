import React , { Component } from "react";

class Message extends Component
{
    render()
    {
      return  (
         <h1>Good Morning {this.props.name}</h1>
      )
    }
}
export default Message