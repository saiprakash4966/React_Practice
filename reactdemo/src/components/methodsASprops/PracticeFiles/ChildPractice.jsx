import React from 'react';

function ChildPractice(props) {
    return (
        <div>
              <button onClick={() => props.greetHandler('Beemari')}>Greet User</button>
            
        </div>
    );
}

export default ChildPractice;