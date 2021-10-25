import React, { Component } from 'react'

const Hook = (wrap, f) => {
  class Inner extends Component {
    dp = {}
    constructor(props: P) {
      super(props)
    }
    componentDidMount() {
      f(this)
    }
    render() {
      return (
        <wrap
        {{...this.props,...this.state,...this.dp}}
        ></wrap>
      )
    }
  }
}

class Inner extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default class PageHook extends Component {

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
