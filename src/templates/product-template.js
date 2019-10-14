import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/button.js"

const ProductTemplate = ({ data: { contentfulProduct } }) => (
  <div style={{ marginLeft: "0 auto", width: "100%", textAlign: "center" }}>
    <h2>
      {contentfulProduct.name} -{" "}
      <span style={{ color: "#ccc" }}>
        Added on {contentfulProduct.createdAt}
      </span>
    </h2>
    <h4>${contentfulProduct.price}</h4>
    <p>{contentfulProduct.description}</p>
    <Img
      style={{ margin: "0 auto", maxWidth: 600 }}
      fluid={contentfulProduct.image.fluid}
    />
    <Button>Add to Bag</Button>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      private
      description
      createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ProductTemplate
