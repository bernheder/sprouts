import * as React from "react"
import { Link as HeaderLink } from "gatsby"
import styled from "@emotion/styled"


const StyledHeaderLink = styled(HeaderLink)`
color: white;
text-decoration: none;
&:hover {
  color: blue
}
`;

interface HeaderProps {
  siteTitle: string
  menuLinks: { name: string; link: string }[]
}

const Header = ({ siteTitle, menuLinks }: HeaderProps) => (
  <header
    style={{
      background: `rebeccapurple`,
      height: '100%'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: "0.5rem",
        paddingLeft: "5rem auto"
      }}
    >
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
          <span style={{paddingRight: "4rem"}}>
            <StyledHeaderLink
            className="a"
              to="/"
            >
              {siteTitle}
            </StyledHeaderLink>
          </span>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                paddingLeft: "1rem",
              }}
            >
              <StyledHeaderLink
                to={link.link}
              >
                {link.name.toUpperCase()}
              </StyledHeaderLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
