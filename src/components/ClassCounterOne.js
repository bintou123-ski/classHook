import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {  counter:0,
        name:''
    }
    
    componentDidMount(){
        document.title=`you clicked ${this.state.counter} times`
    }
    componentDidUpdate(prevState, prevProps){
        if(prevState.counter !== this.state.counter){
        console.log('Updating state');
        document.title=`you clicked ${this.state.counter}times `
    }
}
    render() { 
        return ( 
            <div>
                <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>Click {this.state.counter} times</button>
            </div>
         );
    }
}
 
export default ClassCounter;