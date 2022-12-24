import React, { Component } from 'react';
import RefParent from './RefParent';

class RefPracticeInput extends Component {
    constructor(props)
    {
        super(props)

        this.componentRef = React.createRef() 
        
       
    }

    
        

    click = () =>
    {
    this.componentRef.current.focusInput()
    }
    render() {

        return (
            <div>
               <RefParent ref = {this.componentRef}/>
                <button onClick={this.click}>Click Here</button>
            </div>
        );
}
}

export default RefPracticeInput;