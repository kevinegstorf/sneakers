import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaLongArrowAltRight, FaRegHeart } from "react-icons/fa"

import styled from "styled-components"

const ProductCard = props => {
  const Container = styled.div`
    background-color: ${props.color};
    width: 200px;
    height: 300px;
    border-radius: 30px;
    margin: 0 auto;

    svg {
      min-width: 1em;
      margin-top: 0.5em;
    }
  `

  const TextWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 1em;
    padding-top: 15px;
  `

  const SneakerBrand = styled.h3`
    font-size: 0.8em;
    margin: 0.8em 0;
  `
  const SneakerName = styled.h3`
    font-size: 1.3em;
    margin-bottom: 0.5em;
  `
  const SneakerPrice = styled.h4`
    font-size: 0.8em;
    margin-bottom: 0.5em;
  `

  return (
    <Container>
      <Link
        to={`/products/${props.slug}`}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <TextWrapper>
          <div>
            <SneakerBrand>{props.brand.toUpperCase()}</SneakerBrand>
            <SneakerName>{props.name}</SneakerName>
            <SneakerPrice>${props.price}.00</SneakerPrice>
          </div>
          <FaRegHeart />
        </TextWrapper>
        <Img
          style={{
            maxWidth: 270,
            minWidth: 200,
            width: "14em",
            transform: "rotate(-33deg)",
            top: "-5em",
          }}
          fluid={props.image.fluid}
        />
        <FaLongArrowAltRight />
      </Link>
    </Container>
  )
}

export default ProductCard
