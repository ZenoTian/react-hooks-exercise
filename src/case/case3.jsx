import React, { useState } from 'react'

export default function Case3() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
      }}>Click</button>
    </div>
  )
}