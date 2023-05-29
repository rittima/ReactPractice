import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'React'
      }
    }

    hadlerusernameChange=(event)=>{
        this.setState(
            {
                username:event.target.value
            }
        )
    }
    hadlercommentChange=(event)=>{
        this.setState(
            {
                comment:event.target.value
            }
        )
    }
    hadlertopicChange=(event)=>{
        this.setState(
            {
               topic:event.target.value
            }
        )
    }
    handleSubmit = event => {
        alert (`${this.state.username} ${this.state.comment} ${this.state.topic}` )
        event.preventDefault()
    }

  render() {
    const {username,comment,topic}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <lable>username : </lable>
            <input type="text" value={username} onChange={this.hadlerusernameChange} />
        </div>
        <div>
            <lable>comment : </lable>
            <textarea type="text" value={comment} onChange={this.hadlercommentChange} />
        </div>
        <div>
            <lable>Topic : </lable>
            <select value={topic} onChange={this.hadlertopicChange}>
                <option>React</option>
                <option>Angular</option>
                <option>Vue</option>
            </select>
        </div>
        <div>
            <button type='submit' >Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
