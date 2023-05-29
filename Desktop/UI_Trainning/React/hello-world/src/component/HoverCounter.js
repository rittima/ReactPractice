import React, { Component } from 'react'
import HOCpartll from './HOCpartll'
import UpdateComponent from './HOCpartll'

class HoverCounter extends Component {
    
    
  render() {
    const{count,incrementCounter}=this.props
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default HOCpartll(HoverCounter,10)
