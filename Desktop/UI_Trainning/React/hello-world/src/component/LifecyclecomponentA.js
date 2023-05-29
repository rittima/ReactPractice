import React, { Component } from 'react'
import LifecyclecomponentB from './LifecyclecomponentB';

 class LifecyclecomponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rittima'
      }
      console.log('LifecycleA constructor');
    }
    
static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
}

componentDidMount(){
    console.log('LifecycleA componentDidMount');
}

shouldComponentUpdate(){
  console.log('LifecycleA shouldComponentUpdate');
  return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('LifecycleA getSnapshotBeforeUpdate');
  return null
}

componentDidUpdate(){
  console.log('LifecycleA componentDidUpdate');
}

changeState=()=>{
  this.setState({
    name:'Codevolution'
  })
}

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>Lifecycle A</div>
        <div><button onClick={this.changeState}>click</button></div>
        <LifecyclecomponentB/>
      </div>
    )
  }
}

export default LifecyclecomponentA
