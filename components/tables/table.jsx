import styled from "styled-components";

export const Td = styled.td`
  padding: 8px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;
export const TdActions = styled(Td)`
  text-align: right;
`
export const Tr = styled.tr`
  &:not(:first-child) td {
    border-top: 1px solid var(--gray__200);
  }

  &:last-child td {
    border-bottom: 1px solid var(--gray__200);
  }

  @media (max-width: 459px) {
    button {
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }

  @media (min-width: 460px) {
    button {
      display: inline-block;
  
      &:not(:first-child) {
        margin-left: 12px;
      }
    }
  }
`;

export const TBody = styled.tbody`
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 8px;
`;
