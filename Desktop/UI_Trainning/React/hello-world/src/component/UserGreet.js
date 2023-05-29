import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    //4 approches to conditionally render UI
    //short curcuit operator
    return this.state.isLoggedIn && <div>Welcome Rittima</div> 


    //Ternary conditional operator
    //return this.state.isLoggedIn ? (<div>Welcome Rittima</div>) : (<div>Welcome Guest</div>)


    //Element variable 
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Rittima</div> 
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    

    //if-else loop
    // if(this.state.isLoggedIn){
    //     return( <div>Welcome Rittima</div>)
    // }
    // else{
    //     return( <div>Welcome Guest</div>)
    // }
}
}

export default UserGreet
