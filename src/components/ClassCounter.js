import React, {component} from 'react';


 class ClassCounter extends React.Component {
     state={
         counter:0
     }
     Increment=()=>{
         this.setState({counter:this.state.counter +1})
     }
    render() {
        return (
            <div>
                <button onClick={this.Increment}>Count {this.state.counter}</button>
            </div>
        )
    }
}

export default ClassCounter
