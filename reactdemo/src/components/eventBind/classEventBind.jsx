import React, {Component} from "react";


class EventBind extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
         message : 'Hi Everyone'
        }
        // this.clickHandler = this.clickHandler.bind(this)      //type 3 :Binding in class constructor

    }

    

    // clickHandler()
    // {
    //     this.setState({
    //         message : 'Good Morning'
    //     })
    //     console.log(this)
    // }
     
    clickHandler = () =>                    // type4:class property as arrow function
    {
        this.setState({
            message : 'Good Morning'
        })
    }
    render()
    {
        return(
            <div>
                <div>{this.state.message}</div>
                
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>        //type 1 :Binding in Rendor*/}     
                {/* <button onClick={() =>this.clickHandler()}>Click</button>      //type 2 :Binding in Arrow function*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )

    }

}
export default EventBind