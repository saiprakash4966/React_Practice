import React, { Component } from 'react';
import withCounterEx from './withCounterEx';

class ClickCounterEx extends Component {
    render() {

    
        const {count,incrementCount} = this.props
        return <button onClick={incrementCount}> {this.props.name}clicked {count} times</button>
        
    }
}

export default withCounterEx(ClickCounterEx,10);