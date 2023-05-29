import React, { Component , PureComponent} from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rittima'
      }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Rittima'
            })
        }, 2000)
    }
  render() {
    console.log('---------------Parent Component Render-------------------');
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
