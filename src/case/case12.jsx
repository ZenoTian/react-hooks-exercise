import React, { useEffect, useState } from 'react'

const request = () => new Promise((resolve => {
  setTimeout(() => {
    resolve(10)
  }, 5000)
}))

export default function Case12 () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let isCancelled = false;
    (async () => {
      let res = await request()
      if (!isCancelled) {
        setCount(res)
      }
    })()
    return () => {
      isCancelled = true
    }
  }, [])
  return (
    <div>
      {count}
    </div>
  )
}