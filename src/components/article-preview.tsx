import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

interface ArticlePreviewProps {
  excerpt: string | null | undefined
  articleName: string | null | undefined
  slug: string |null| undefined
}

const StyledArticleLink = styled(Link)`
text-decoration: none;
color: white
&:hover {
  text-decoration: none;
  color: cadetblue;
}
}
`;
export default function ArticlePreview({
  excerpt,
  articleName,
  slug
}: ArticlePreviewProps) {
  if (articleName) {
    return (
      <div        style={{
        margin: "auto",
        padding: "2rem",
        maxWidth: "900px"

      }}>
      <StyledArticleLink to={slug || ""} className="a">
        <div style={{ marginLeft: "2rem" }}>
          <h2>{articleName}</h2>
          <p>{excerpt}</p>
        </div>
      </StyledArticleLink>
      <hr style={{width:"50%" , margin:"auto"}}/> 
      </div>
      
    )
  }
  return null
}
