# React-hooks

## 背景

  React-hooks虽然已正式发布很久，hooks的相关资料也没少看，但由于使用React机会较少（路径依赖，习惯了vue一把梭），实际使用时经常要再查阅资料。而官网的示例并不能包含常用场景，细节散落在各个地方，遂决定做一次分享，将React的hooks的基本用法，及注意点做分享,也方便大家查阅。如有错误的地方或可以补充进来的示例欢迎大家直接修改此分享文档的错误之处。

## 学习hooks的正确姿势

  最开始学习hooks，第一反应是去官网学习，然而官网将`hooks`和`生命周期`做类比的教程，反而在后续的使用中给我带来了思维上的误区。所以我我觉得学习hooks，完全可以抛去过去Class组件的写法以及生命周期，可能可以更快上手的。

## 索引

### hooks

- [useState](#useState)
- [useEffect](#useEffect)
- [useRef](#useRef)
- [useImperativeHandle](#useImperativeHandle)
- [useContext](#useContext)
- [useMemo](#useMemo)
- [useCallback](#useCallback)
- [useLayoutEffect](#useLayoutEffect)
- [useReducer](#useReducer)

## 正文

### <span id="useState">useState</span>

#### useState场景1：基础使用

基本语法：

```jsx
const [state, setState] = useState(initialState)
```

##### useState 的返回值和参数?

  返回一个 state，以及更新 state 的函数。
  在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。
  setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

  setState(newState);
  在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state。

##### 调用 useState 方法的时候做了什么?

  它定义一个 “state 变量”。我们的变量叫 count， 但是我们可以叫他任何名字，比如 banana。这是一种在函数调用时保存变量的方式 —— useState 是一种新方法，它与 class 里面的 this.state 提供的功能完全相同。一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。

重新渲染即整个函数重新执行一遍，而`useState`声明的状态不会变，其他变量与正常函数执行没有区别。

case1：

```jsx
function Case1() {
  // useState 的参数为state的初始值，参数可以是函数
  // 返回值为一个数组，第一个元素为state，第二个为更改状态的函数
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(1)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>-</button>
    </div>
  )
}
```

#### useState场景2：函数式更新

case2：
问题： 点击按钮后 count值为几？

```jsx
function Case2() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
      }}>Click</button>
    </div>
  )
}
```

case3：

```jsx
function Case3() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
      }}>Click</button>
    </div>
  )
}
```

`Case2`结果为`Count: 1`
`Case3`结果为`Count: 3`

原因：
setCount为异步函数`Case2`setCount的三次调用时实际设置的值都是`1`

setCount可以接收一个函数，函数的实参是先前的state, 函数的返回值会是更新后的值。

#### useState场景3：合并更新对象

case4：

```jsx
function Case4() {
  const [user,setUser] = useState({name:'a', age: 18})
  const onClick = ()=>{
    user.age = 123
    console.log(user)
    setUser(user)
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h2>{x}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
```

case5：

```jsx
function Case5() {
  const [user,setUser] = useState({name:'a', age: 18})
  const onClick = ()=>{
    setUser({
      name: 'b'
    })
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
```

`Case4`中`user.age`的值我们已经改变了。但是因为React的对state的对比是浅比较，set值时对象的地址不变，是不会触发渲染的。
`Case5`点击之后只改变`user.name`的值。`user.age`属性会消失。想要原来的值，必须在 setUser 里先获取原来的值。

例如：

```jsx
setUser(x => {...x, name: 'a'})
```

### <span id="useEffect">useEffect</span>

#### useEffect 的返回值和参数

#### useEffect 的运行时机

  TODO: 文字+图

什么是副作用：

  1. 手动修改DOM
  2. 设置订阅
  3. 发送网络请求
  4. 事件绑定

#### useEffect场景1：基础使用

Case6：

```jsx
function Case6() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `组件加载时更新一下标题`
  })
  return (
    <div>1</div>
  )
}
```

#### useEffect场景2：依赖

默认情况下，useEffect 会在每次渲染后（更新完 DOM 后）都执行。

Case7：
问题：`useEffect`的实参函数，和函数Case7是什么关系？为什么在组件内部调用 `useEffect`？

```jsx
export default function Case7() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `更新${count}次`
  })

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is: {count}
      </button>
    </div>
  )
}
```

将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的`闭包机制`

`Case7`的每点击一次按钮都会改变一次title，如何避免？
想要跳过`useEffect`的执行，可以使用`useEffect`的第二个参数。

Case8：

```jsx
export default function Case8() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `更新${count}次`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is: {count}
      </button>
    </div>
  )
}
```

`useEffect`第二个参数为数组，被称之为`dependents`，缩写`deps`
当数组中的任意一值与上一次对比发生变化时，都会触发`useEffect`执行
`Case6`最好优化成写法如下。给`deps`一个空数组。可以确保useEffect在组件第一次渲染时调用一次。

```jsx
function Case6() {
  useEffect(() => {
    document.title = `组件加载时更新一下标题`
  }, [])
    // 
  return (
    <div>1</div>
  )
}
```

最佳实践：
  useEffect内使用到的state，最好都作为useEffect的依赖,显式的传入。
  eslint启用`eslint-plugin-react-hooks` 中的 `exhaustive-deps`。会在`deps`依赖错误的时候提示，或者修复。

<span id='useEffect-thinking'>思考<span>: 假设useEffect的`deps`有多个值，如何在`deps`全部变的时候再执行useEffect

#### useEffect场景3：清除

useEffect的返回值是一个函数，可以用来清除定时器、socket、事件订阅、请求等..

Case10：

Case10卸载时会清除定时器

```jsx
function Case10() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(x => x + 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div>
      count is: {count}
    </div>
  )
}
```

Case11：

```jsx
// 模拟一个请求
const request = () => new Promise((resolve => {
  setTimeout(() => {
    resolve(10)
  }, 5000)
}))

function Page () {
  const [count, setCount] = useState(0)
  useEffect((async () => {
    let res = await request()
    setCount(res)
  }), [])
  return (
    <div>
      {count}
    </div>
  )
}

export default function Case11() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(prev => !prev)}>切换</button>
      {
        visible && <Page></Page>
      }
    </div>
  )
}
```

```shell
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

这是一个容易触发的warning，看提示也知道需要`cleanup`一下副作用。
但是如果是请求，请求没有封装取消方法。`cleanup`该如何做呢？

类似于无法取消的请求，可以通过增加变量来判断是否执行异步操作回调中的逻辑，主要避免修改已卸载的组件

Case12：

```jsx
const request = () => new Promise((resolve => {
  setTimeout(() => {
    resolve(10)
  }, 5000)
}))

function Page () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let isCancelled = false;
    (async () => {
      let res = await request()
      if (!isCancelled) {
        setCount(res)
      }
    })()
    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default function Case12 () {
  const [visible, setVisible] = useState(false)
  
  return (
    <div>
      <button onClick={() => setVisible(prev => !prev)}>切换</button>
      {
        visible && <Page></Page>
      }
    </div>
  )
}

```

### <span id="useRef">useRef</span>

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变，它可以很方便地`保存任何可变值`。
useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象。

#### useRef场景1：访问DOM

case13：

```jsx
const Input = (props) => {
  const ref = useRef(null)

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
```

#### useRef场景2：保存值

[回看之前留下的思考问题假设useEffect的`deps`有多个值，如何在`deps`全部变的时候再执行useEffect](#useEffect-thinking)

case14：

```jsx
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
```

case15：

```jsx
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
```

### <span id="useImperativeHandle">useImperativeHandle</span>

#### forwardRef场景：父组件调用子组件

期望点击按钮能让 input 聚焦

case16：

```jsx
const Input = (props) => {
  const inputRef = useRef()
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
```

父组件如何拿到子组件内的ref
`forwardRef`不是hooks，是React之前就有的API
Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。

`React.forwardRef`接受一个渲染函数，其接收 props 和 ref 参数并返回一个 React 节点


case17：

```jsx

  // forwardRef包装后渲染函数会多一个ref的参数
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
```

这种方式相当于父组件创建，再传入子组件，由此父组件获取到子组件内元素的方法。（父组件访问子组件DOM）
最好的方式应该是子组件自己维护自己内部的ref。父组件不应该侵入子组件。

#### useImperativeHandle场景

单词解析： Imperative

adj. 表示命令的
n. 重要紧急的事;必要的事;祈使语气;祈使语气动词

useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用：

case18：

```jsx
// useImperativeHandle
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
```

### <span id="useContext">useContext</span>

#### useContext场景： 跨组件通讯

case19：

```jsx
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
```

### <span id="useMemo">useMemo</span>

#### useMemo

case20：

```jsx
import React, {useState, useMemo} from 'react'

export default function case20 () {
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
```

### <span id="useCallback">useCallback</span>

#### useCallback

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`

case21：

```jsx
export default function Case21() {
  const [count, setCount] = useState(0)

  const handleResize = () => {
    // 把count输出
    console.log(`count is ${count}`)
  }

  useEffect(() => {
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  )
}
```

分析上述代码执行过程。
容易陷入的思维误区，不能把`useEffect`完全等同于`componentDidMount`。

想让上述代码按照预想执行：

1. useEffect不传deps,但是会每次都绑定，解绑。会有反复绑定解绑的问题这肯定是不符合逻辑的。
2. useCallback

case22：

```jsx
export default function case22() {
  const [count, setCount] = useState(0)

  const handleResize = useCallback(() => {
    console.log(`count is ${count}`)
  }, [count])

  useEffect(() => {
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  )
}
```

### <span id="useLayoutEffect">useLayoutEffect</span>

#### useLayoutEffect

其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在`浏览器执行绘制之前`，useLayoutEffect 内部的更新计划将被同步刷新。

尽可能使用标准的 useEffect 以避免阻塞视觉更新。

case23：

```jsx
export default function case23() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect', new Date().getTime())
  }, [count])

  useLayoutEffect(() => {
    console.log('useLayoutEffect', new Date().getTime())
  }, [count])

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(x => x+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
}
```

### <span id="useReducer">useReducer</span>

#### useReducer

useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。

case24：

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function Case24() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}
```
