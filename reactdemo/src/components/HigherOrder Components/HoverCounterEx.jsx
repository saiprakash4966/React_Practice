import React, { Component } from 'react';
import withCounterEx from './withCounterEx';

class HoverCounterEx extends Component {
    render() {
        const {count ,incrementCount} = this.props

        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        );
    }
}

export default withCounterEx(HoverCounterEx,5);;