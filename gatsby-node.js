const path = require("path")
const ProductTemplate = path.resolve("./src/templates/product-template.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const products = result.data.allContentfulProduct.edges
  products.forEach(({ node: product }) => {
    createPage({
      path: `/products/${product.slug}`,
      component: ProductTemplate,
      context: {
        slug: product.slug,
      },
    })
  })
}
