import React from "react";
import styled from "styled-components";

class VisibilitySensor extends React.Component {
  state = {
    visible: false,
  };

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const section = this.ref.current;
    const { threshold } = this.props;
    const { height, top } = section.getBoundingClientRect();
    const visible =
      top < window.innerHeight - threshold && top + height > threshold;

    if (visible != this.state.visible) {
      this.setState({ visible });
      this.props.onChange(visible);
    }
  };

  render() {
    const { children } = this.props;

    return <Sensor ref={this.ref}>{children}</Sensor>;
  }
}

const Sensor = styled.div`
  width: 100%;
`;

export default VisibilitySensor;
