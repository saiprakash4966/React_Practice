import React from 'react';

// function FRInputPractice(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }
const FRInputPractice = React.forwardRef( (props,ref) =>
{
    return (
                <div>
                    <input type="text" ref={ref}/>
                </div>
            );

}) 

export default FRInputPractice;