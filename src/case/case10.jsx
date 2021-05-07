import React, { useEffect, useState } from 'react'

export default function Case10() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(x => x + 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div>
      count is: {count}
    </div>
  )
}