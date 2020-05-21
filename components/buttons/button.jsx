import styled from "styled-components"

const Button = styled.button`
  background-color: var(--color-secondary);
  outline: none;
  border: 1px solid var(--color-secondary);
  transition: all .3s ease-in-out;
  cursor: pointer;

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
export function MyButton(props) {
  return (
    <Button as={ props.as }className={`typography-body ${props.className}`} type={ props.type } onClick={props.onClick} disabled={ props.disabled }>
      { props.children }
    </Button>
  );
}

export default MyButton;
