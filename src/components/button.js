import React from "react"

import styled from "styled-components"

const Container = styled.button`
  width: 100vw;
  background-color: #f72960;
  color: #fff;
  min-height: 2em;
  border-radius: 5px;
`

const Button = props => {
  return <Container>{props.children}</Container>
}

export default Button
