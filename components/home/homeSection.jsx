import styled from "styled-components"

const HomeTitle = styled.h1`
  font-family: 'Gotham Narrow Black';
  font-size: 320px;
  margin: -8px;
  line-height: 220px;
  position: absolute;
  user-select: none;

  @media (max-width: 460px) {
    font-size: 100px;
    line-height: 84px;
    margin: -8px -4px;
  }
`
const HomeSection = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 400px;
  background-color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 460px) {
    padding: 96px 0;
    min-height: 100vh;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: 0px;
    top: 0px;
  }
`
export { HomeSection, HomeTitle }
