import React from 'react'
import styled from "styled-components"

import Button from "./button"

class PrimaryButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <MyButton type={ this.props.type }>{ this.props.children }</MyButton>
      );
    }
  }
  
const MyButton = styled(Button)`
&& {
  min-width: 120px;
  padding: 4px 24px;
  color: var(--gray__100);
  text-transform: uppercase;
}
`
export default PrimaryButton;
