import React, { useState } from 'react'

export default function Case2() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
      }}>Reset</button>
    </div>
  )
}
