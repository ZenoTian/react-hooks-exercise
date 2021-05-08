import React, { useEffect, useState } from 'react'

const request = () => new Promise((resolve => {
  setTimeout(() => {
    resolve(10)
  }, 5000)
}))

function Page () {
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

export default function Case11() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(prev => !prev)}>切换</button>
      {
        visible && <Page></Page>
      }
    </div>
  )
}