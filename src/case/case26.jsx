import React, {useState, useEffect} from 'react'

export default function Case21() {
  const [count, setCount] = useState(0)

  const api = async (num = 0) => {
    // 与state合并出这一次请求需要的参数
    console.log('count', count);
    let res = await request(count + num)
    setCount(res)
  }

  // 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

  useEffect(() => {
    // componentDidMount
    // vue的 mounted
    document.title = `You clicked ${count} times`;
    return () => {
      // componentWillUnmount
      // vue的beforeDestroy
    }
  }, [
    // componentDidUpdate
  ])

  return (
    <div>
      <button onClick={() => api(count)}>点击请求不一样的参数</button>
      <h1>{count}</h1>
    </div>
  )
}
