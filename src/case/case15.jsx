import React, { useEffect, useState, useRef } from 'react'

export default function Case15 () {
  const [stateA, setStateA] = useState('')
  const [stateB, setStateB] = useState('')
  const  ref = useRef({
    a:stateA,
    b:stateB
  })

  useEffect(() => {
    let {a, b} = ref.current
    if (a !== stateA && b !== stateB) {
      console.log('a和b都改变了')
      ref.current={
        a: stateA,
        b: stateB
      }
    }
  }, [stateA, stateB])

  return <div>
    <button onClick={() => setStateA(x => Math.random())}>change A</button>
    <button onClick={() => setStateB(x => Math.random())}>change B</button>
    <button onClick={() => {
      setStateA(x => Math.random())
      setStateB(x => Math.random())
    }}>change A and B</button>
  </div>
}