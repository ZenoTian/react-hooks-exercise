import React, { useEffect, useState } from 'react'

export default function Case8() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `更新${count}次`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is: {count}
      </button>
    </div>
  )
}
