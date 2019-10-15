import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaLongArrowAltRight } from "react-icons/fa"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
import ProductCard from "../components/productCard"

const BrandSelector = styled.div`
  font-family: "Josefin Sans";
`
const VerticalTextWrapper = styled.div`
  font-family: "Josefin Sans";
  transform: rotate(-90deg);
  position: absolute;
  top: 19em;
  left: -5em;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Products = ({
  data: {
    allContentfulProduct: { edges },
  },
}) => {
  const renderProducts = () => {
    return edges.map(({ node: product }) => {
      return (
        <div key={product.id}>
          <ProductCard
            slug={product.slug}
            name={product.name}
            price={product.price}
            image={product.image}
            color={product.backgroundColor}
            brand={product.brands.name}
          />
        </div>
      )
    })
  }
  return (
    <Layout>
      <BrandSelector>Nike Addidas Jordan</BrandSelector>
      <VerticalTextWrapper>New Featured Upcoming</VerticalTextWrapper>
      <div>
        <Slider>{renderProducts()}</Slider>
      </div>
      <section>
        <FlexWrapper>
          <h3>More</h3>
          <FaLongArrowAltRight />
        </FlexWrapper>
        <BottomNav />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          private
          backgroundColor
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          brands {
            name
          }
        }
      }
    }
  }
`

export default Products
