import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  margin: 12px 0;

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 460px) {
    min-width: 320px;
  }
`;

class FormRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Row>{this.props.children}</Row>;
  }
}

export default FormRow;
