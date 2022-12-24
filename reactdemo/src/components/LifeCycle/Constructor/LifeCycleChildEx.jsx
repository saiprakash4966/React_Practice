import React, { Component } from 'react';

class LifeCycleChildEx extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name : 'Saiprakash'
        }
        console.log('Child constructor executed')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('Child getDerivedStateFromProps executed')
        return null
        
    }

    componentDidMount ()
    {
        console.log('Child componentDidMount executed')
    }
    render() {
        console.log('Child render executed')

        return  <div>LifeCycle Child</div>
           
        
    }
}

export default LifeCycleChildEx;