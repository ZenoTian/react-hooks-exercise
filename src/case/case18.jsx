import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

const Input = (props, ref) => {

  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))

  useEffect(() => {
    inputRef.current.value = props.init
  }, [])

  return <input
    onChange={(e) => props.onChange(e.target.value)}
    ref={inputRef}
    type="text" />
}

const WrapInput = forwardRef(Input)

export default function Case18 () {
  const parentRef = useRef()
  const inputFocus = () => {
    parentRef.current.focus()
  }

  return (
    <div>
      <WrapInput
        ref={parentRef}
        init={10}
        onChange={(x) => console.log(x)}/>
      <button onClick={inputFocus}>Focus the input</button>
    </div>
  )
}