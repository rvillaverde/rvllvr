import React from 'react'
import styled from "styled-components"

import Button from "./button"

class IconButton extends React.Component {
  render() {
    const {
      className,
      type,
      onClick
    } = this.props

    return (
      <MyButton className={ className } type={ type } onClick={ onClick }>
        { this.props.children }
      </MyButton>
    );
  }
}
  
const MyButton = styled(Button)`
&& {
  min-width: unset;
  height: 36px;
  padding: 0;
  width: 36px;
}
`
export default IconButton;
