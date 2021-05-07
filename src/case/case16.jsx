import React, { useEffect, useRef } from 'react'

const Input = (props) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = props.init
  }, [])

  return <input
    onChange={(e) => props.onChange(e.target.value)}
    ref={inputRef}
    type="text" />
}

export default function Case16() {
  const inputFocus = () => {
    // 如何让input focus
  }

  return (
    <div>
      <Input  
        init={10}
        onChange={(x) => console.log(x)}/>
      <button onClick={inputFocus}>Focus the input</button>
    </div>
  )
}