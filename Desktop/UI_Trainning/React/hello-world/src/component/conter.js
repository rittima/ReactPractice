import React, { Component } from 'react'

class Conter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
           count:0
        }
      }
      
      increase(){
        // this.setState(
        // {
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log('Callback value= ',this.state.count)
        // }
        // )
        

        this.setState(preState=>({
            count: preState.count+1
        }
        ))
        console.log(this.state.count)
      }

      increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
      }
  render() {
    return (
      <div>
        <div>
            Count - {this.state.count}
        </div>
        <button onClick={()=>this.increaseFive()}>Increase</button>
      </div>
    )
  }
}

export default Conter
