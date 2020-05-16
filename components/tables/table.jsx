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

export const Tr = styled.tr`
  &:not(:first-child) td {
    border-top: 1px solid var(--gray__200);
  }
`;

export const TBody = styled.tbody`
`;

export const Table = styled.table`
  border-collapse: collapse;
`;
