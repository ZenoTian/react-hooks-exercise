import React, { useEffect, useState } from 'react'

export default function Case14 () {
  const [stateA, setStateA] = useState('')
  const [stateB, setStateB] = useState('')

  useEffect(() => {
    // 如何在只有 stateA和stateB都变的时候改变
      console.log('a和b都改变了')
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
