import React from 'react'
import styled from "styled-components"

import Button from "./button"

class IconButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <MyButton type={ this.props.type } onClick={ this.props.onClick }>{ this.props.children }</MyButton>
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
