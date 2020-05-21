import React from 'react'
import styled from "styled-components"

import FormField from './formField'

const Field = styled(FormField)`
&& {
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 60px;
}`

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
  width: 60px;
`

class NumberField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Field>
        { this.props.label &&
          <Label className="typography-body" htmlFor={ this.props.id }>{ this.props.label }</Label>
        }
        <Input id={ this.props.id }
                name={ this.props.name }
                data-name= { this.props.dataName }
                type="number"
                required={ this.props.required }
                onChange={ this.props.onChange }
                onBlur={ this.props.onBlur }
                defaultValue={ this.props.value } />
      </Field>
    );
  }
}

export default NumberField;
