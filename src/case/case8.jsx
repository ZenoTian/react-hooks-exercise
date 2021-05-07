import React, { useEffect, useState } from 'react'

export default function Case8() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(x => x + 1)
    }, 1000)
  })

  return (
    <div>
      count is: {count}
    </div>
  )
}
