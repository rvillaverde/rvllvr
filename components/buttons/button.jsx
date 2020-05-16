import styled from "styled-components"

const Button = styled.button`
  background-color: var(--color-secondary);
  outline: none;
  border: 1px solid var(--color-secondary);
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-tertiary);
    border-color: var(--color-tertiary);
  }

  &:active {
    transform: scale(0.96);
  }
`
export function MyButton(props) {
  return (
    <Button className={`typography-body ${props.className}`} type={ props.type } onClick={props.onClick}>{ props.children }</Button>
  );
}

export default MyButton;
