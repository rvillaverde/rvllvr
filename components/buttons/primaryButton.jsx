import React from 'react'
import styled from "styled-components"

import Button from "./button"
  
const PrimaryButton = styled(Button)`
&& {
  min-width: 120px;
  padding: 4px 24px;
  color: var(--gray__100);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
}
`
export default PrimaryButton
