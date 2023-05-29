import React ,{ Component } from "react";

class Welcome extends Component{
    render(){
        const {name,place}=this.props
        return <h1>Welcome {name} to {place}</h1>
    }
}

export default Welcome