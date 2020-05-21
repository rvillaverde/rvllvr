import React from 'react'
import styled from "styled-components"

import Button from "./button"

class PrimaryButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <MyButton as={this.props.as} className={this.props.className} type={ this.props.type } onClick={ this.props.onClick } disabled={ this.props.disabled }>
        { this.props.children }
      </MyButton>
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
