import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"

interface ProductPreviewProps {
  excerpt: string | null | undefined
  productName: string | null | undefined
  slug: string |null| undefined
}

const StyledProductLink = styled(Link)`
text-decoration: none;
color: white
&:hover {
  text-decoration: none;
  color: cadetblue;
}
}
`;
export default function ProductPreview({
  excerpt,
  productName,
  slug
}: ProductPreviewProps) {
  if (productName) {
    return (
      <div        style={{
        display: "flex",
        backgroundColor: "white",
        justifyContent: "center",
        padding: "2rem",
        margin: "auto",
        marginTop: "2rem",
        maxWidth: "900px"

      }}>
      <StyledProductLink to={slug || ""} className="a">
          <h2>{productName}</h2>
          <p>{excerpt}</p>
      </StyledProductLink>
      </div>
    )
  }
  return null
}
