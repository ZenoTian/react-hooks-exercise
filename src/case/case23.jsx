import React, {useState, useEffect, useLayoutEffect} from 'react'


export default function case23() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect', new Date().getTime())
  }, [count])

  useLayoutEffect(() => {
    console.log('useLayoutEffect', new Date().getTime())
  }, [count])

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(x => x+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>
    case23
  </div>
}