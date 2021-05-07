import React, {useState, useEffect, useCallback} from 'react'

export default function case22() {
  const [count, setCount] = useState(0)

  const handleResize = useCallback(() => {
    console.log(`count is ${count}`)
  }, [count])
  
  useEffect(() => {
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])


  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  )
}