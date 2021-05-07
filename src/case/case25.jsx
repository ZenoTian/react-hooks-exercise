import React, {useState, useEffect} from 'react'

// 把这个当做请求
const request = (num) => new Promise((resolve => {
  setTimeout(() => {
    resolve(num+1)
  }, 3000)
}))

export default function Case21() {
  const [count, setCount] = useState(0)

  const api = async (num = 0) => {
    // 与state合并出这一次请求需要的参数
    console.log('count', count);
    let res = await request(count + num)
    setCount(res)
  }

  useEffect(() => {
      // 要求进页面请求一次
      api()
  }, [])

  return (
    <div>
      <button onClick={() => api(count)}>点击请求不一样的参数</button>
      <h1>{count}</h1>
    </div>
  )
}
