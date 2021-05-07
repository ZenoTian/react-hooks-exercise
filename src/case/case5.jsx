import React, { useState } from 'react'

export default function Case5() {
  const [user,setUser] = useState({name:'a', age: 18})
  const onClick = ()=>{
    setUser({
      name: 'b'
    })
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  )
}