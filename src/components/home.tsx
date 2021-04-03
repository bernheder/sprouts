import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div
    style={{
      width: '100%',
      display: "flex",
      backgroundColor: "white",
      flex:"1",
      margin:"auto",
      padding: "3rem",
      justifyContent: "center",


    }}
  >
      <div>
        <h1>Hi people</h1>
        <p>Welcome tereeo your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <div>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif", "png"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
  )
}
