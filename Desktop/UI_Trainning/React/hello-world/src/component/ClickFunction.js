import React from 'react'

function ClickFunction() {

    function clickHandler(){
        console.log("Button Cliked");
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default ClickFunction

