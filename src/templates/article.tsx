import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FullarticleQuery } from "../../gatsby-graphql"

interface article {
  data: FullarticleQuery
}

export default function BlogPost({ data }: article) {
  const article = data.markdownRemark
  const html = article?.html || ""
  
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        
        <h2 style={{display: "block", paddingTop: "2rem"}}>{article?.frontmatter?.articleName}</h2>
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
  query Fullarticle($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        articleName
        imageSource {
          absolutePath
        }
      }
    }
  }
`
