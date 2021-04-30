import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
          footerLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
<div id="layout" style={{
}}>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />      
        <main    
        >{children}</main>
      <div>
        <Footer menuLinks={data.site.siteMetadata.footerLinks}/>
      </div>
    </div>
  )
}

export default Layout
