import styled from "styled-components"

 const Button = styled.button`
  background-color: var(--color-secondary);
  outline: none;
  border: 1px solid var(--color-secondary);
  transition: all .3s ease-in-out;
  cursor: pointer;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  i:first-child:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:active {
    transform: scale(0.96);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`

export default Button;
