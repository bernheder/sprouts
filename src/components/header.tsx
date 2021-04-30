import * as React from "react"
import { Link as HeaderLink } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Sidebar from "./sidebar";
const StyledHeaderLink = styled(HeaderLink)`
  color: white;
  text-decoration: none;

&:hover {
  color: cadetblue
}
`

interface HeaderProps {
  siteTitle: string
  menuLinks: { name: string; link: string }[]
}

const Header = ({ siteTitle, menuLinks }: HeaderProps) => {
  return (
    <header
    id="header"
      style={{
        background: `darkseagreen`,
        height: "2.5rem",
        position: "sticky",
        zIndex: 10,
        top: 0,
      }}
    >
      <div
      >
        <nav style={{        justifyContent: "center",
        margin: "auto",

        maxWidth: "1200px"}}>
          <ul style={{display: "flex", flex: 1 }}>
            <li style={{ width: "100%",paddingRight: "0.5rem", paddingTop:"0.5rem" ,whiteSpace: 'nowrap'}}>
              <StyledHeaderLink to="/">
          <StaticImage src={"../images/logo.png"} width={60} alt={"home"} />
              </StyledHeaderLink>
            </li>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  whiteSpace: 'nowrap',
                  listStyleType: `none`,
                  paddingLeft: "0.5rem",
                  paddingTop: "0.5rem",
                  paddingRight: "0.5rem"
                }}
              >
                <StyledHeaderLink to={link.link}>
                  {link.name}
                </StyledHeaderLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
