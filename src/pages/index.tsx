import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { DataStuffQuery } from "../../gatsby-graphql"
import SEO from "../components/seo"
import ProductPreview from "../components/product-preview"
import ArticlePreview from "../components/article-preview"
import Home from "../components/home"

interface Props {
  data: DataStuffQuery
}

export default function IndexPage({ data }: Props) {
  return (
    <div style={{ backgroundColor: "snow" }}>
      <Layout>
        <SEO title="Home" />
        <Home />
        <div
          style={{
            backgroundColor: "snow",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <h1 id="products">Produkte</h1>
          {data.products.edges.map(({ node }) => (
            <ProductPreview
              productName={node?.frontmatter?.productName}
              excerpt={node?.excerpt}
              slug={node?.fields?.slug}
            />
          ))}
        </div>
        <div
          style={{
            backgroundColor: "snow",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          
          <h1 id="articles">Artikel</h1>
          </div>
          <div
          style={{
            backgroundColor: "WhiteSmoke",
            marginTop: "3rem",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          {data.articles.edges.map(({ node }) => (
            <ArticlePreview
              articleName={node?.frontmatter?.articleName}
              excerpt={node?.excerpt}
              slug={node?.fields?.slug}
            />
          ))}
        </div>
      </Layout>
    </div>
  )
}
export const data = graphql`
  query dataStuff {
    products: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/products/" } } }
    ) {
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
    articles: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/articles/" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            articleName
          }
          excerpt
        }
      }
    }
  }
`
