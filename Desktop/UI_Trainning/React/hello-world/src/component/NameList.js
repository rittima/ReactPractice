import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const name=['Riya','Diya','Riche','Riya']
    const person = [
        {
            id:1,
            name:'Riya',
            age:22,
            skill:'Marketing'
        },{
            id:2,
            name:'Diya',
            age:19,
            skill:'Angular'
        },{
            id:3,
            name:'Riche',
            age:18,
            skill:'Java'
        }
    ]
    const nameList=name.map((names,index) => <h2 key={index}> {index} {names}</h2>)

  return (
    <div>
      {nameList}
    </div>
  )
}

export default NameList
