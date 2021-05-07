import React, { useEffect } from 'react'

export default function Case6() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `组件加载时更新一下标题`
  })
    // 第二个参数为数组，别问为什么是空数组，继续往下看
  return (
    <div>1</div>
  )
}