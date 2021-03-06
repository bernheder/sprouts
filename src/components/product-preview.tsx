import * as React from "react"

interface ProductPreviewProps {
  imageSource: string | null | undefined
  excerpt: string | null | undefined
  productName: string | null | undefined
}

const ProductPreview = ({
  imageSource,
  excerpt,
  productName,
}: ProductPreviewProps) => (
  <div
    style={{
      display: "flex",
    }}
  >
    <div>
      <p>{imageSource}</p>
    </div>
    <div>
      <p>{excerpt}</p>
      <p>{productName}</p>
    </div>
  </div>
)

export default ProductPreview
