import React from "react";
import styled from "styled-components";

class MouseParallax extends React.Component {
  state = {
    active: false,
    initial: {},
  };

  calculateDelta = (e) => {
    const { initial } = this.state;

    return {
      deltaX: initial.x - e.x,
      deltaY: initial.y - e.y,
    };
  };

  componentDidMount() {
    const active = window.innerWidth > 767;
    if (active) {
      window.addEventListener("mousemove", this.handleMouseMove);
      this.setState({ active });
    }
  }

  componentWillUnmount() {
    const { active } = this.state;
    if (active) {
      window.removeEventListener("mousemove", this.handleMouseMove);
      this.setState({ active: false });
    }
  }

  handleMouseMove = (e) => {
    const { x, y } = e;
    const { initial } = this.state;

    if (!Object.keys(initial).length) {
      this.setState({ initial: { x, y } });
      return;
    }

    const { deltaX, deltaY } = this.calculateDelta(e);
    const { images } = this.props;

    images.forEach((image, i) => {
      const coefficient = ((images.length - i) * 0.01) / (i + 1);
      document.getElementById(image).style.transform = `translate3d(${
        deltaX * coefficient
      }px, ${deltaY * coefficient}px, 0)`;
    });
  };

  render() {
    const { images } = this.props;

    return (
      <Wrapper>
        {images.map((image, i) => (
          <Image file={image} index={images.length - i} key={i} id={image} />
        ))}
      </Wrapper>
    );
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
`;
const Image = styled.div`
  position: absolute;
  width: 300vw;
  height: 300vh;
  top: -110vh;
  left: -90vw;
  background-image: url(${({ file }) => "img/" + file});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: ${({ index }) => index};
  transition: all ease-out 0.6s;
`;
export default MouseParallax;
