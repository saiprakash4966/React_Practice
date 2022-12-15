import React from "react";

// const Name = ({name,surname}) =>

const Name = props =>
{
    const {name,surname} =props

{
    return(
        <div>
         <h1>My name is  {name}  Surname is {surname}</h1>
        
        </div>
    )
}
}
export default Name

