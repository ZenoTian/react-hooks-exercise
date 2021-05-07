import React, { useEffect, useState } from 'react'

export default function Case7() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `更新${count}次`
  })

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is: {count}
      </button>
    </div>
  )
}