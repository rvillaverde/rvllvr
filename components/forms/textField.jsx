import React from 'react'
import styled from "styled-components"

import FormField from './formField'

const Label = styled.label`
  color: var(--color-secondary__200);
  display: block;
`
const Input = styled.input`
  outline: none;
  border: 1px solid var(--gray__200);
  background-color: white;
  height: 36px;
  padding: 8px;
  font-family: var(--typography-primary);
  color: var(--gray__600);
  width: 100%;

  @media (min-width: 460px) {
    min-width: 280px;
  }
`

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormField>
        { this.props.label && 
          <Label className="typography-body" htmlFor={ this.props.id }>{ this.props.label }</Label>
        }
        <Input id={ this.props.id }
                name={ this.props.name }
                data-name={ this.props.dataName }
                placeholder={ this.props.placeholder }
                type={ this.props.type }
                defaultValue={ this.props.value }
                required={ this.props.required }
                onChange={ this.props.onChange }
                onBlur={ this.props.onBlur }
                autoComplete={ this.props.autoComplete }/>
      </FormField>
    );
  }
}

export default TextInput;
