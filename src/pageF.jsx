import React, { useContext } from 'react'
import HelloContent from './helloContent'

const {Provider} = HelloContent

const  Deep = () => {
  const value = useContext(HelloContent)
  return <div>{value}</div>
}

const Child = () => {
  return <Deep></Deep>
}

const Parent = () => {
  return <Provider value='hello'>
    <Child></Child>
  </Provider>
}

export default Parent
