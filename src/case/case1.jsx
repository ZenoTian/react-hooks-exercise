import React, { useState } from 'react'

export default function Case1() {
  // useState参数会作为count的初始值，参数可以是函数
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(1)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
