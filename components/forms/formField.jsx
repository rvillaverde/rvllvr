import styled from "styled-components"

const Field = styled.div`
  margin-top: auto;
  flex: 1;

  &:not(:first-child) {
    margin-left: 12px;
  }
`

function FormField({ className, children }) {
  return <Field className={ className }>{ children }</Field>;
}

export default FormField;
