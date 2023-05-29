import React, { Component } from 'react'
import HOCpartll from './HOCpartll'
import UpdateComponent from './HOCpartll'

class ClickCounter extends Component {

    
    
  render() {
    const {count,incrementCounter}=this.props

    return (
      <div>
        <button onClick={incrementCounter}>{this.props.name} Click {count} times</button>
      </div>
    )
  }
}

export default  HOCpartll(ClickCounter,5)
