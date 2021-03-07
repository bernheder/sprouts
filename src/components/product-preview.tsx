import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
interface ProductPreviewProps {
  imageFluid: any
  excerpt: string | null | undefined
  productName: string | null | undefined
}

export default function ProductPreview({
  imageFluid,
  excerpt,
  productName,
}: ProductPreviewProps) {
  const image = getImage(imageFluid)
  if (image && productName) {
    return (
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
        }}
      >
        <div>
          <GatsbyImage image={image} alt={productName} />
        </div>
        <div style={{ marginLeft: "3rem" }}>
          <h2>{productName}</h2>
          <p>{excerpt}</p>
        </div>
      </div>
    )
  }
  return null
}
