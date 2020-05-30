import styled from "styled-components"

const Toggle = styled.a`
  display: none;
  flex-direction: column;
  height: var(--header-height);
  justify-content: center;
  position: fixed;
  right: 24px;
  top: 0;
  user-select: none;
  z-index: 4;

  @media (max-width: 640px) {
    display: flex;
  }
`
const MenuLine = styled.span`
  background: var(--gray__300);
  border-radius: 3px;
  display: flex;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  width: 23px;
  z-index: 4;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;

&:nth-child(2) {
  transform-origin: 100% 100%;
}

&:nth-child(4) {
  transform-origin: 100% 100%;
}
`
const ToggleInput = styled.input`
  cursor: pointer;
  display: flex;
  height: 20px;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 22px;
  z-index: 8;

  &:checked ~ ${MenuLine}:nth-child(2) {
    transform: rotate(-45deg) translate(3px,0px);
  }

  &:checked ~ ${MenuLine}:nth-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ ${MenuLine}:nth-child(4) {
    transform: rotate(45deg) translate(1px,0px);
  }
`

export default function MenuToggle(props) {
  return (
    <Toggle>
      <ToggleInput type="checkbox" onChange={ props.onChange } checked={ props.open }/>
        <MenuLine />
        <MenuLine />
        <MenuLine />
    </Toggle>
  )
}
