import React, { Component } from 'react';
import LifeCycleD from './LifeCycleD';




class LifeCycleC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Raghu'
        }
        console.log('LifeCycleC constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleC getDerivedStateFromProps')
        return null

    }


    componentDidMount() {
        console.log('LifeCycleC componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleC shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('LifeCycleC getsnapshotbeforeupdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleC componentupdate')
    }
    changeState = () => {
        this.setState({
            name: 'Codevaluation'
        })
    }


render()
{
    console.log('LifeCycleC render')

    return (
        <div>
            <div>LifeCycle C</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleD />

        </div>

    )


}
}


export default LifeCycleC;