import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaLongArrowAltRight } from "react-icons/fa"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"

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

const Products = ({
  data: {
    allContentfulProduct: { edges },
  },
}) => {
  const renderProducts = () => {
    return edges.map(({ node: product }) => {
      return (
        <div key={product.id}>
          <Link
            to={`/products/${product.slug}`}
            style={{ textDecoration: "none", color: "#551a8b" }}
          >
            <h3>
              Nike
              <br />
              {product.name} · <br />
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "#f60",
                }}
              >
                ${product.price}
              </span>
            </h3>
          </Link>
          <Img
            style={{ maxWidth: 270, transform: "rotate(-33deg)" }}
            fluid={product.image.fluid}
          />
          <FaLongArrowAltRight />
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
        <div>
          <h3>More</h3>
        </div>
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
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Products
