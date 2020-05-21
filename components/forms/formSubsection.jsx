import styled from 'styled-components'

const FormSubsection = styled.div`
  flex-grow: 1;

  @media (min-width: 768px) {
    &:not(:first-child) {
      margin-left: 24px;
    }
  }

  @media (max-width: 767px) {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`

export default FormSubsection;