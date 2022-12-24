import React, { Component } from 'react';
import FRParentInput from './FRParentInput';

class FRParentInputPractice extends Component 
{
    constructor(props)
    {
        super(props)
        this.inputRef = React.createRef()
    }
    clickButton = () =>
    {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRParentInput ref={this.inputRef}/>
                <button onClick={this.clickButton}>click here</button>
            </div>
        );
}
}

export default FRParentInputPractice;