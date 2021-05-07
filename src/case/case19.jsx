import React, {createContext, useContext, useState} from 'react'

const content = createContext(null)

const {Provider} = content

const  Deep = () => {
  const value = useContext(content)
  return <div>最内层组件：{value}</div>
}

const Child = () => {
  return <div>
    <Deep></Deep>
  </div>
}

const Case19 = () => {
  const [value, setValue] = useState('hello')
  
  return  <div>
      <Provider value={value}>
        最外层组件：
        <button onClick={() => setValue(x => Math.random())}>Click</button>
        <Child></Child>
    </Provider>
  </div>
}

export default Case19