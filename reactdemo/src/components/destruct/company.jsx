import React , { Component } from "react";

class Company extends Component
{
    render()
    {
    const {name,companyname} =this.props

      return  (
         <h1>Iam {name} from {companyname}</h1>
      )
    }
}
export default Company