import React,{Component} from "react";

class Counter extends Component{
   constructor(props){
    super(props)
        this.state ={
            count:0
        }
    
   }

   incrementcount()
   {
    // this.setState(
    //     {
    //     count :this.state.count+1
    // },
    //  () => {
    //     console.log('call back value',this.state.count)
    // })

    this.setState ((previousState,props) => ({
        count:previousState.count + 1

    }))
    {

    }
    console.log(this.state.count);
   }
   incrementThree()
   {
    this.incrementcount();
    this.incrementcount();
    this.incrementcount();
    
   }
   
    render()
    {
        return(
            <div>
            <div> Count -{this.state.count} </div>
            <button onClick={() =>this.incrementThree()}>Increment</button>
            </div>
        )
            
        
    }
}
    export default Counter