import React, {useState, useMemo} from 'react'

export default function () {
  const [stateA, setStateA] = useState(1)
  const [stateB, setStateB] = useState(1)

  const memoizedValue = useMemo(() => stateA+stateB, [stateA, stateB])
  return <div>
    <h3>合计：{memoizedValue} </h3>
    <button onClick={() => setStateA(x => Math.random())}>Click</button>
    <button onClick={() => setStateB(x => Math.random())}>Click</button>
    <button onClick={() => setStateB(x => 1)}>Click</button>
  </div>
}
