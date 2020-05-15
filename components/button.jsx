import React from 'react'
import styled from "styled-components"

const Button = styled.button`
  min-width: 120px;
  padding: 4px 24px;
  background-color: var(--color-secondary);
  outline: none;
  color: var(--gray__100);
  border: 1px solid var(--color-secondary);
  transition: all .3s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: var(--color-secondary__100);
    color: var(--color-secondary__600);
    border-color: var(--color-secondary__200);
  }

  &:focus {
    background-color: var(--color-secondary__700);
    color: var(--gray__100);
    border-color: var(--color-secondary__700);
  }
`

class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button type={ this.props.type } className="typography-body">{ this.props.children }</Button>
    );
  }
}

export default MyButton;
