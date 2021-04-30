import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FullProductQuery } from "../../gatsby-graphql"

interface Product {
  data: FullProductQuery
}

export default function BlogPost({ data }: Product) {
  const product = data.markdownRemark
  const html = product?.html || ""
  
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem"
        }}
      >
        
        <h1 style={{display: "block", marginTop: "2rem"}}>{product?.frontmatter?.productName}</h1>
        </div>
        <div
        style={{
          display: "flex",
          backgroundColor: "white",
          flex:"1",
          justifyContent: "center",
          padding: "2rem",
          margin: "auto",
          maxWidth: "800px"
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query FullProduct($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        productName
        imageSource {
          absolutePath
        }
      }
    }
  }
`
