const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const resultProducts = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/products/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const resultArticles = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/articles/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const other = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/(about-us|impressum|datenschutzhinweis)/" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  other.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  resultProducts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  resultArticles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
