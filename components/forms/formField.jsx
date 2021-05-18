import styled from "styled-components";

const Field = styled.div`
  margin-top: auto;
  flex: 1;

  &:not(:first-child) {
    margin-left: 12px;
  }
`;

export default ({ className, children }) => {
  return <Field className={className}>{children}</Field>;
};
