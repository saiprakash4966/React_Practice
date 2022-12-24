import React from "react";

const withCounterEx = (WrappedComponent,incrementNumber)=>{
    class WithCounterEx extends React.Component{
        constructor(props)

        {
            super(props)
            this.state = {
                count : 0
            }
        }
         incrementCount = () =>
        {
            this.setState (prevState  =>{
                return{
                    count : prevState.count + incrementNumber
                }
        
            })
        
        }
        render()
        
        {
            console.log(this.props.name)
            return <WrappedComponent
            count = {this.state.count}
            incrementCount = {this.incrementCount}
            {...this.props}
            />
        }
    }
    return WithCounterEx

}
export default withCounterEx