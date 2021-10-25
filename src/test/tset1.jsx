export const statefulWrapper = (Com, state) => {
  console.log("statefulWrapper:", Com)
  class StatefulWrapper extends React.Component {
    TCom = Com
    constructor(props) {
        super(props)
        this.state = state
        console.log("StatefulWrapper", this.TCom)
        result.ss = function(s) {
          console.log("ss",this)
          this.setState(s)
        }.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState != null
    }
    componentDidMount() {
    }
    render(){
        return <Com {...this.props} {...this.state} />
    }
  }
  
  const result = {
    Com: StatefulWrapper
  }

  return result
}