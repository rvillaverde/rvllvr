import React from 'react'
import styled from "styled-components"

import FormField from './formField'

const Label = styled.label`
  color: var(--color-secondary__200);
  display: block;
`
const Textarea = styled.textarea`
  outline: none;
  border: 0px;
  background-color: var(--gray__100);
  padding: 8px;
  font-family: var(--typography-primary);
  color: var(--gray__500);
  width: 100%;
  resize: none;
`

class TextAreaComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormField>
        <Label className="typography-body" htmlFor={ this.props.id }>{ this.props.label }</Label>
        <Textarea id={ this.props.id } name={ this.props.name } defaultValue={ this.props.value } rows={6}></Textarea>
      </FormField>
    );
  }
}

export default TextAreaComp;
