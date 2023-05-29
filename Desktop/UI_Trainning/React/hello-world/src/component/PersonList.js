import React from 'react'

function PersonList({persons}) {
  return (
    <div>
      <h2>
        Iam {persons.name} and Iam {persons.age} year old, my skill is {persons.skill} 
    </h2>
    </div>
  )
}

export default PersonList
