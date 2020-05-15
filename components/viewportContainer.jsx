import styled from "styled-components"

const ViewportContainer = styled.div`
  max-width: var(--viewport-width);
  margin: 0 auto;

  @media (max-width: 1280px) {
    padding: 0 24px;
  }
`
export default ViewportContainer
