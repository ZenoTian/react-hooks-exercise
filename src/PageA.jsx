import React, { Component } from 'react'

export default class PageA extends Component {
    dp = {}
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      this.dp.onClick = () => {
        console.log(123)
      }
    }

  render() {
    console.log('this.dp', this.dp);
    return (
      <div>
        <h1 {...{...this.dp}}>
          绑定了点击事件
        </h1>
      </div>
    )
  }
}
