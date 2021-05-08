import React, { useEffect, useState } from 'react'

export default function Case9() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count+1)
    }, 1000)
  })

  return (
    <div>
      count is: {count}
    </div>
  )
}
