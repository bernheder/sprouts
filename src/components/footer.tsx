import * as React from "react"
import { Link as HeaderLink } from "gatsby"
import styled from "@emotion/styled"
const StyledHeaderLink = styled(HeaderLink)`
  color: white;
  text-decoration: none;

&:hover {
  color: cadetblue
}
`

interface FooterProps {
  menuLinks: { name: string; link: string }[]
}

const Footer = ({ menuLinks }: FooterProps) => {
  return (
    <footer
      style={{
        background: `darkseagreen`,
        height: '4rem',
        width: '100%',
        marginTop: '2rem',
        position: "relative",
        bottom: 0,
      }}
    >
      <div
            style={{
              background: `darkseagreen`,
            }}
      >
        <nav style={{        justifyContent: "center",
        margin: "auto",
        background: `darkseagreen`,
        maxWidth: "1200px"}}>
          <ul style={{height: '3rem', margin: "auto", display: "flex", flex: 1 ,background: `darkseagreen`,  justifyContent: "center",}}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  background: `darkseagreen`,
                  whiteSpace: 'nowrap',
                  listStyleType: `none`,
                  paddingLeft: "1rem",
                  marginTop: "1rem",
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
    </footer>
  )
}

export default Footer
