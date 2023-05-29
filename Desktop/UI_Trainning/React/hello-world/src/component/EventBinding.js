import React, { Component } from 'react'

 class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

      //this.clickHandller=this.clickHandller.bind(this)
    }

    // clickHandller(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    //     console.log(this);
    // }
    

    clickHandller=()=>{
        this.setState({
            message:"Goodbye"
        })
       
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandller.bind(this)} >Click</button> */}
        {/* <button onClick={()=> this.clickHandller()} >Click</button> */}
        <button onClick={this.clickHandller} >Click</button>
      </div>
    )
  }
}

export default EventBinding
