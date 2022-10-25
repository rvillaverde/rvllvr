import classNames from 'classnames';
import React from 'react';
import VisibilitySensor from '../visibility-sensor';

import styles from './parallax.module.sass';

const SPEED = 0.3;

interface PropTypes {
  children: JSX.Element;
  className?: string;
  id: string;
  image: string;
}

interface StateTypes {
  enabled: boolean;
  visible: boolean;
  y?: number;
}

const backgroundImage = (file: string): string => `url(${file})`;

class Parallax extends React.Component<PropTypes, StateTypes> {
  ref: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: PropTypes) {
    super(props);
    this.state = {
      visible: false,
      enabled: true,
    };
  }

  componentDidMount() {
    this.setState({ enabled: window.innerWidth > 767 });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { enabled, visible } = this.state;

    if (visible && enabled) {
      const position = this.ref?.current?.getBoundingClientRect();

      if (position) {
        this.setState({ y: 0 - position.top * SPEED });
      }
    }
  };

  handleVisibilityChange = (visible: boolean) => {
    this.setState({ visible });
  };

  renderImage = (): JSX.Element => {
    const { id, image } = this.props;
    const { visible, y } = this.state;

    const style: React.CSSProperties = {
      backgroundImage: backgroundImage(image),
      ...(y ? { transform: `translateY(${y}px)` } : {}),
      // visibility: visible ? 'visible' : 'hidden',
    };

    return <div className={styles.image} id={id} style={style} />;
  };

  render() {
    const { className, children } = this.props;

    return (
      <VisibilitySensor onChange={this.handleVisibilityChange} threshold={120}>
        <div className={classNames([styles.wrapper, className])} ref={this.ref}>
          {this.renderImage()}
          {children}
        </div>
      </VisibilitySensor>
    );
  }
}

export default Parallax;
