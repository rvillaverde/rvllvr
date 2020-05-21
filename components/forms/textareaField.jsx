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
  border: 1px solid var(--gray__200);
  background-color: white;
  padding: 8px;
  font-family: var(--typography-primary);
  color: var(--gray__600);
  width: 100%;
  resize: none;

  @media (min-width: 460px) {
    min-width: 280px;
  }
`

class TextAreaComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormField>
        { this.props.label &&
          <Label className="typography-body" htmlFor={ this.props.id }>{ this.props.label }</Label>
        }
        <Textarea id={ this.props.id } 
                  name={ this.props.name }
                  defaultValue={ this.props.value }
                  required={ this.props.required }
                  rows={6}></Textarea>
      </FormField>
    );
  }
}

export default TextAreaComp;
