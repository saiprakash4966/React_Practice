import React, { Component } from 'react';
import withCounter from './withCounter';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {
    


render() {

    
        const {count,incrementCount} = this.props
        return <button onClick={incrementCount}> {this.props.name}clicked {count} times</button>
        
    }
}

export default withCounter(ClickCounter,5);