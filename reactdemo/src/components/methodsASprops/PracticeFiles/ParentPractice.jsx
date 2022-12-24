import React, { Component } from 'react';
import ChildPractice from './ChildPractice';

class ParentPractice extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            
            userName : 'Saiprakash'
            }
            this.greetUser = this.greetUser.bind(this)
           }
            greetUser(surName)
            {
                alert(`My name is  ${this.state.userName} surname  ${surName}`)
            }
           
            render() {
                return (
                    <div>
                    <ChildPractice  greetHandler = {this.greetUser}/>
                        
                    </div>
                );
            }
}

export default ParentPractice;