import React from 'react'
import styled from "styled-components"

class VisibilitySensor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.ref = React.createRef();
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let section = this.ref.current
    let top = section.getBoundingClientRect().top
    let height = section.getBoundingClientRect().height
    let visible = top < window.innerHeight - this.props.threshold && (top + height) > this.props.threshold
    if (visible != this.state.visible) {
      this.setState({ visible: visible })
      this.props.onChange(visible)
    }
  }

  render() {
    return (
      <Sensor ref={this.ref}>
        { this.props.children }
      </Sensor>
    )
  }
}

const Sensor = styled.div`
  width: 100%;
`

export default VisibilitySensor
