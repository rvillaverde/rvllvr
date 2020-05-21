import Link from 'next/link'
import Button from './button'

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
`

export default function LinkButton(props) {
  return (
    <Link href={ props.href }>
      <Button href={ props.href }>
        { props.children }
      </Button>
    </Link>
  )
}
