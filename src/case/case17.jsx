import React, { useEffect, useRef, forwardRef } from 'react'

const Input = (props, ref) => {
  useEffect(() => {
    ref.current.value = props.init
  }, [])

  return <input
    onChange={(e) => props.onChange(e.target.value)}
    ref={ref}
    type="text" />
}

const WrapInput = forwardRef(Input)

export default function case17() {
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
