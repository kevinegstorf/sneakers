import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaSearch, FaBell } from "react-icons/fa"
import styled from "styled-components"

const IconWrapper = styled.div`
  background-color: #f6f3f8;
  height: 2em;
  width: 2em;
  margin: 10px 10px 0 0;
  padding: 5px;
  border-radius: 50%;

  svg {
    display: block;
    margin: 0 auto;
    margin-top: 2px;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      marginTop: `2em`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        padding: `0 1em`,
      }}
    >
      <div>
        <h1>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              fontFamily: "Josefin Sans",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-around`,
        }}
      >
        <IconWrapper>
          <FaSearch />
        </IconWrapper>
        <IconWrapper>
          <FaBell />
        </IconWrapper>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
