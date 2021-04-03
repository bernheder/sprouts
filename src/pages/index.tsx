import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ProductsQuery } from "../../gatsby-graphql"
import SEO from "../components/seo"
import ProductPreview from "../components/product-preview"
import Home from "../components/home"

interface Props {
  data: ProductsQuery
}

export default function IndexPage({ data }: Props) {
  return (
    <div style={{          backgroundColor: "ghostwhite"
  }}>
    <Layout>
      <SEO title="Home" />
      <Home/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ProductPreview
          productName={node?.frontmatter?.productName}
          imageFluid={node?.frontmatter?.imageSource}
          excerpt={node?.excerpt}
          slug={node?.fields?.slug}
        />
      ))}

      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
    </div>
  )
}
export const productsQuery = graphql`
  query Products {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            productName
            imageSource {
              childImageSharp {
                gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF, PNG]
        )
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
