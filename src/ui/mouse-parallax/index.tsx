import React from 'react';

import styles from './mouse-parallax.module.sass';

interface PropTypes {
  images: string[];
}

interface Coord {
  x: number;
  y: number;
}

interface StateTypes {
  current?: Coord;
  enabled: boolean;
  initial?: Coord;
}

const backgroundImage = (file: string): string => `url(img/${file})`;

class MouseParallax extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      enabled: false,
    };
  }

  componentDidMount() {
    const enabled = window.innerWidth > 767;

    if (enabled) {
      window.addEventListener('mousemove', this.handleMouseMove);
      this.setState({ enabled });
    }
  }

  componentWillUnmount() {
    const { enabled } = this.state;

    if (enabled) {
      window.removeEventListener('mousemove', this.handleMouseMove);
      this.setState({ enabled: false });
    }
  }

  handleMouseMove = (e: MouseEvent) => {
    const { x, y } = e;
    const { initial } = this.state;

    if (!initial) {
      return this.setState({ initial: { x, y } });
    }

    const deltaX = initial.x - e.x;
    const deltaY = initial.y - e.y;

    this.setState({
      current: {
        x: deltaX,
        y: deltaY,
      },
    });
    // const { images } = this.props;

    // images.forEach((image, i) => {
    //   const coefficient = ((images.length - i) * 0.01) / (i + 1);
    //   document.getElementById(image).style.transform = `translate3d(${
    //     deltaX * coefficient
    //   }px, ${deltaY * coefficient}px, 0)`;
    // });
  };

  renderImage = (image: string, i: number): JSX.Element => {
    const { images } = this.props;
    const { x, y } = this.state.current || {};
    const coefficient = ((images.length - i) * 0.01) / (i + 1);

    const style = {
      backgroundImage: backgroundImage(image),
      ...(!!x && !!y
        ? {
            transform: `translate3d(${x * coefficient}px, ${
              y * coefficient
            }px, 0)`,
          }
        : {}),
      zIndex: images.length - i,
    };

    return (
      <div className={styles.image} key={i} id={image} style={style}></div>
    );
  };

  render() {
    const { images } = this.props;

    return (
      <div className={styles.wrapper}>
        {images.map((image, i) => this.renderImage(image, i))}
      </div>
    );
  }
}

export default MouseParallax;
