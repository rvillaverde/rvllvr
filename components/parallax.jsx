import React from 'react';
import styled from "styled-components";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let speed = this.props.speed ? this.props.speed : 0.16
    let scrolled = window.scrollY
    document.getElementById('parallax-wrapper').style.transform = `translateY(${ 0 - (scrolled * speed) + 'px' })`
  }

  render() {
    return (
      <ParallaxWrapper id="parallax-wrapper" image={ this.props.image }/>
    )
  }
}

const ParallaxWrapper = styled.div`
  position: fixed;
  background-image: url('${ (props) => props.image }');
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default Parallax;