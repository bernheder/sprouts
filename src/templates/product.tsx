import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {FullProductQuery} from "../../gatsby-graphql"

interface Product {
  data: FullProductQuery
}

export default function BlogPost({ data }: Product) {
  const product = data.markdownRemark
  const html = product?.html || ""
  return (
    <Layout>
      <div>
        <h1>{product?.frontmatter?.productName}</h1>
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