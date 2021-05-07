import React, {useState, useEffect} from 'react'

export default function Case21() {
  const [count, setCount] = useState(0)

  const handleResize = () => {
    // 把count输出
    console.log(`count is ${count}`)
  }

  useEffect(() => {
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  )
}
