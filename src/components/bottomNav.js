import React from "react"
import {
  FaHome,
  FaHeart,
  FaMapMarkedAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa"
import styled from "styled-components"

const Container = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  margin-left: 0;
  bottom: 0;
  svg {
    font-size: 1.6em;
  }
`
const Selected = styled.li`
  svg {
    color: hotpink;
  }
`

const BottomNav = () => {
  const [selected, setSelected] = React.useState(0)

  const selecthandler = (i, icon) => {
    return setSelected(i)
  }

  const Icons = [
    <FaHome />,
    <FaHeart />,
    <FaMapMarkedAlt />,
    <FaShoppingCart />,
    <FaUser />,
  ]

  const renderNavItem = (icon, i) => {
    return selected === i ? (
      <Selected key={i}>{icon}</Selected>
    ) : (
      <li key={i} onClick={() => selecthandler(i, icon)}>
        {icon}
      </li>
    )
  }

  return (
    <footer>
      <Container>
        {Icons.map((item, i) => {
          return renderNavItem(item, i)
        })}
      </Container>
    </footer>
  )
}

export default BottomNav
