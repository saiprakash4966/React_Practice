import React, { createElement } from 'react'

const Hello = () =>
{
    // return(
    //     <div>
    //         <h1>Welcome</h1>
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Welcome'));
}
export default Hello