import styled from "styled-components"

const FormField = styled.div`
  margin: 12px 0;

  &:first-of-type {
    margin-top: 0;
  }
  
  @media (min-width: 460px) {
    min-width: 320px;
  }
`
export default FormField;
