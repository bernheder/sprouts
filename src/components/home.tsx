import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "white",
        flex: "1",
        margin: "auto",
        marginTop: "-2rem",
        padding: "3rem",
        justifyContent: "center",
      }}
    >
      
      
        <div style={{
          width:700
        }}>
        <h1>Keimlinge – so klein und soo bedeutend</h1>
        <p style={{
          textAlign:"justify"
        }}>
          Wir beschäftigen uns mit der Erforschung und Entwicklung von
          hochwirksamen Naturheilmitteln. Da der Wirkstoffgehalt in Pflanzen bei
          einem Keimling bis zu 100 mal höher ist, als in der ausgewachsenen
          Pflanze, haben wir uns vor allem mit diesen kleinen Wunderwerken der
          Natur beschäftigt.
        </p>
        </div>
        <div>
        <StaticImage
          src="../images/home.png"
          width={200}
          quality={95}
          formats={["auto", "webp", "avif", "png"]}
          alt="A Gatsby astronaut"
        />
        </div>
      </div>
    
  )
}
