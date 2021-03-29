import React, { Component } from 'react'

 class ClassCounterTwo extends Component {
     state={
         counter:0
     }
         IncrementCounter =()=>{
             this.setState(prevState=>{
                 return{
                     counter:prevState.counter+1
         }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.IncrementCounter}>Count {this.state.counter}</button>
               
            </div>
        )
    }
}

export default ClassCounterTwo
