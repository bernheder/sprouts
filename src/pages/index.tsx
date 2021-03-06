import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {ProductsQuery} from "../../gatsby-graphql"
import SEO from "../components/seo"
import ProductPreview from "../components/product-preview"

interface Props {
  data: ProductsQuery
}

export default function IndexPage({ data }: Props) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ProductPreview
          productName={node?.frontmatter?.productName}
          imageSource={node?.frontmatter?.imageSource?.absolutePath}
          excerpt={node?.excerpt}
        />
      ))}

      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}
export const productsQuery = graphql`
  query Products {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            productName
            imageSource {
              absolutePath
            }
          }
          excerpt
        }
      }
    }
  }
`
