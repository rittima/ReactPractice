import React from "react";
// function Greet(){
//     return <h1>Hi Rittima !</h1>
// }

const Greet =props => {
// console.log(props)
const {name,place,children}=props
return <div>
    <h1>Hi {name} from {place}</h1>
    {children}
</div> 
}
export default Greet