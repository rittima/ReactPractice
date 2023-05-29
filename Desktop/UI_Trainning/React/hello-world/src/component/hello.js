import React from "react";

const Hello = () => {
    // using JSX
    // return(
    //     <div  className:'dummyClass'>
    //         <h1>Hello Rittima</h1>
    //     </div>
    // )

    //without using JSX
    return React.createElement(
        'div',
        {id: 'hello', className:'dummyClass'},
        React.createElement('h1',null,'Hello Rittima!')
        )
}
export default Hello