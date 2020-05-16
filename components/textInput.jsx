import React from 'react'
import styled from "styled-components"

import FormField from './formField'

const Label = styled.label`
  color: var(--color-secondary__200);
  display: block;
`
const Input = styled.input`
  outline: none;
  border: 0px;
  background-color: var(--gray__100);
  height: 36px;
  padding: 8px;
  font-family: var(--typography-primary);
  color: var(--gray__600);
  width: 100%;
`

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormField>
        <Label className="typography-body" htmlFor={ this.props.id }>{ this.props.label }</Label>
        <Input id={ this.props.id } name={ this.props.name } type={ this.props.type } defaultValue={ this.props.value } />
      </FormField>
    );
  }
}

export default TextInput;
