import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"

interface ProductPreviewProps {
  imageFluid: any
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
  imageFluid,
  excerpt,
  productName,
  slug
}: ProductPreviewProps) {
  const image = getImage(imageFluid)
  if (image && productName) {
    return (
      <div        style={{
        justifyContent: "center",
        margin: "auto",

        maxWidth: "900px"

      }}>
      <StyledProductLink to={slug || ""} className="a">
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          flex:"1",
          justifyContent: "center",
          padding: "2rem",
          margin: "auto",
          marginTop: "2rem",
          maxWidth: "900px"

        }}
      >
        <div>
          <GatsbyImage image={image} alt={productName} />
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <h2>{productName}</h2>
          <p>{excerpt}</p>
        </div>
      </div>
      </StyledProductLink>
      </div>
    )
  }
  return null
}
