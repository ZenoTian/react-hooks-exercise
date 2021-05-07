import React, { useEffect, useState } from 'react'

const request = () => new Promise((resolve => {
  setTimeout(() => {
    resolve(10)
  }, 5000)
}))

export default function Case11  () {
  const [count, setCount] = useState(0)
  useEffect((async () => {
    let res = await request()
    setCount(res)
  }), [])
  return (
    <div>
      {count}
    </div>
  )
}
