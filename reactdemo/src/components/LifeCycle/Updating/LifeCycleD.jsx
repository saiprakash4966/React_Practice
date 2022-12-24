import React, { Component } from 'react';

class LifeCycleD extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name : 'Raghu'
        }
        console.log('LifeCycleD constructor executed')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleD getDerivedStateFromProps executed')
        return null
        
    }

    componentDidMount ()
    {
        console.log('LifeCycleD componentDidMount executed')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleD shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate()
    {
        console.log('LifeCycleD getsnapshotbeforeupdate')
    }
    componentDidUpdate()
    {
        console.log('LifecycleD componentupdate')
    }
    render() {
        console.log('LifeCycleD render executed')
        
        return <div>LifeCycle D</div>
           
        
    }
}

export default LifeCycleD;