import React from 'react';

import styles from './visibility-sensor.module.sass';

interface PropTypes {
  children: JSX.Element;
  onChange: (visible: boolean) => void;
  threshold: number;
}

interface StateTypes {
  visible: boolean;
}

class VisibilitySensor extends React.Component<PropTypes, StateTypes> {
  ref: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const section = this.ref.current;
    const { threshold } = this.props;

    if (!section) {
      return;
    }

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

    return (
      <div className={styles.sensor} ref={this.ref}>
        {children}
      </div>
    );
  }
}

export default VisibilitySensor;
