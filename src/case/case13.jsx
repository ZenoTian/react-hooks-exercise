import React, { useEffect, useState, useRef } from 'react'

const Input = (props) => {
  const ref = useRef()
  
  useEffect(() => {
    ref.current.value = props.value
  }, [props.value])
  return <input ref={ref}/>
}

export default function Case13 () {
  const [value, setValue] = useState('')
  return <div>
    <Input value={value}/>
    <button onClick={() => setValue(x => Math.random())}>Click</button>
  </div>
}
