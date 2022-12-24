import React, { Component } from 'react';
import LifeCycleChildEx from './LifeCycleChildEx';

class LifeCycleExParent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name : 'Saiprakash'
        }
        console.log('Parent constructor executed')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('Parent getDerivedStateFromProps executed')
        return null
        
    }

    componentDidMount ()
    {
        console.log('Parent componentDidMount executed')
    }
    render() {
        console.log('Parent render executed')

        return (
            <div>
                <div>LifeCycle Parent</div>
                
                <LifeCycleChildEx/>
            </div>
        
        )
           
        
    }
}

export default LifeCycleExParent;