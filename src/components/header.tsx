import * as React from "react"
import { Link as HeaderLink } from "gatsby"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import DropDownButton from "./dropDown"
import { StaticImage } from "gatsby-plugin-image"
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
  const data = useStaticQuery(graphql`
    query DropDownLinks {
      products: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/products/" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              productName
            }
          }
        }
      }
      articles: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/products/" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              productName
            }
          }
        }
      }
    }
  `)
  const products = data.products.edges
  const articles = data.products.articles
  console.log(products)
  return (
    <header
      style={{
        background: `darkseagreen`,
        height: "100%",
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
            <li style={{ width: "100%",paddingRight: "3rem",paddingTop: "0.5rem" }}>
              <StyledHeaderLink to="/">
              <div>
          <StaticImage src={"../images/logo.png"} width={80} alt={"home"} />
        </div>
        {siteTitle}
              </StyledHeaderLink>
            </li>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  whiteSpace: 'nowrap',
                  listStyleType: `none`,
                  paddingLeft: "1rem",
                  paddingTop: "1.5rem"
                }}
              >
                <StyledHeaderLink to={link.link}>
                  {link.name}
                </StyledHeaderLink>
              </li>
            ))}
            <li                 style={{
              paddingTop: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "2rem",
                }}>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
