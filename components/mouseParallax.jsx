import React from 'react'
import styled from 'styled-components'

class MouseParallax extends React.Component {
  wrapper = React.createRef()
  state = {
    initial: {}
  }

  calculateDelta = (e) => {
    const { initial } = this.state

    return {
      deltaX: initial.x - e.x,
      deltaY: initial.y - e.y
    }
  }

  componentDidMount () {
    if (window.innerWidth > 767) {
      this.wrapper.current.addEventListener('mousemove', this.handleMouseMove)
    }
  }

  componentWillUnmount () {
    if (window.innerWidth > 767) {
      this.wrapper.current.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  handleMouseMove = (e) => {
    const { x, y } = e
    const { initial } = this.state

    if (!Object.keys(initial).length) {
      this.setState({ initial: { x, y }})
      return
    }

    const { deltaX, deltaY } = this.calculateDelta(e)
    const { images } = this.props

    images.forEach((image, i) => {
      const coefficient = (images.length-i) * 0.01 / (i+1)
      document.getElementById(image).style.transform = `translate(${deltaX * coefficient}px, ${deltaY * coefficient}px)`
    })
  }

  render () {
    const { images } = this.props

    return (
      <Wrapper ref={this.wrapper}>
        {
          images.map((image, i) => (
            <Image file={image} index={images.length-i} key={i} id={image}/>
          ))
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;

  @media (max-width: 767px) {
    display: none;
  }
`
const Image = styled.div`
  position: absolute;
  width: 300vw;
  height: 300vh;
  top: -110vh;
  left: -90vw;
  background-image: url(${({ file }) => 'img/' + file});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: ${({ index }) => index};
`
export default MouseParallax