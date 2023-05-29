import React, { Component } from 'react'

 class LifecyclecomponentB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rittima'
      }
      console.log('LifecyclecomponentB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecyclecomponentB getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecyclecomponentB componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate');
      return true;
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleB getSnapshotBeforeUpdate');
      return null
    }
    
    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate');
    }

  render() {
    console.log('LifecyclecomponentB render');
    return (
      <div>
        Lifecyclecomponent B
      </div>
    )
  }
}

export default LifecyclecomponentB
