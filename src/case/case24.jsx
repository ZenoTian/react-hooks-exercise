import React, {useState, useEffect} from 'react'

// 把这个当做请求
const request = (num) => new Promise((resolve => {
  setTimeout(() => {
    resolve(num+1)
  }, 5000)
}))

export default function Case21() {
  const [count, setCount] = useState(0)
  const api = async (num = 0) => {
    let res = await request(num)
    setCount(res)
  }

  useEffect(() => {
      api()
  }, [])

  return (
    <div className="App">
      <button onClick={api(count)}>点击请求不一样的参数</button>
      <h1>{count}</h1>
    </div>
  )
}
