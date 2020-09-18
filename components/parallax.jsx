import React from 'react'
import styled from 'styled-components'
import VizSensor from 'react-visibility-sensor'

class Parallax extends React.Component {
  wrapperRef = React.createRef()
  
  state = {
    visible: false,
    enabled: true
  }

  componentDidMount() {
    this.setState({ enabled: window.innerWidth > 767 });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const { enabled, visible } = this.state
    const { speed = 0.3, id } = this.props

    if (visible && enabled) {
      const position = this.wrapperRef.current.getBoundingClientRect()
      document.getElementById(id).style.transform = `translateY(${ 0 - (position.top * speed) }px)`
    }
  }

  handleVisibilityChange = (visible) => {
    this.setState({visible: visible})
  }

  render() {
    const { id, image, height, children, as, className } = this.props
    return (
      <VizSensor
        partialVisibility
        onChange={ this.handleVisibilityChange }
      >
        <ParallaxWrapper
          ref={this.wrapperRef}
          height={ height }
          as={ as }
          className={ className }
        >
          <ParallaxImage
            id={ id }
            image={ image }
            visible={ this.state.visible }
          />
          { children }
        </ParallaxWrapper>
      </VizSensor>
    )
  }
}

const ParallaxWrapper = styled.div`
  width: 100%;
  height: ${ (props) => props.height ? props.height : '100vh' };
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`

const ParallaxImage = styled.div`
  position: absolute;
  background-image: url('${ (props) => props.image }');
  visibility: ${ (props) => props.visible ? 'visible' : 'hidden' };
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    position: fixed;
  }
`

export default Parallax;
