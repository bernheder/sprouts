import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    
    <div id="home"
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "snow",
        flex: "1",
        margin: "auto",
        marginTop: "-1rem",
        padding: "3rem",
        justifyContent: "center",
      }}
    >
      
      
        <div style={{
          width:700
        }}>
        <div      style={{
justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flex: "1",



      }}>                  <StaticImage
          src="../images/home.png"
          width={320}
          height={500}
          quality={95}
          formats={["auto", "webp", "avif", "png"]}
          alt="Green Power Sprouts"
          
        /></div>
        <h1 style={{textAlign:"center",marginTop: "1rem"}}>Keimlinge – so klein und soo bedeutend</h1>
        <p style={{
          textAlign:"center"
        }}>
          Wir beschäftigen uns mit der Erforschung und Entwicklung von
          hochwirksamen Naturheilmitteln. Da der Wirkstoffgehalt in Pflanzen bei
          einem Keimling bis zu 100 mal höher ist, als in der ausgewachsenen
          Pflanze, haben wir uns vor allem mit diesen kleinen Wunderwerken der
          Natur beschäftigt.
        </p>
        </div>
      </div>
  )
}
