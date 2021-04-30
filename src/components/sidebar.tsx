import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";
import styled from "@emotion/styled"

const StyledSideBarLink = styled(Link)`
  color: white;
  text-decoration: none;

&:hover {
  color: cadetblue
}
`
interface SidebarProps {
  menuLinks: { name: string; link: string }[]
}

const Sidebar = ({ menuLinks }: SidebarProps) => {
  
  return (
    <Menu pageWrapId={"header"} outerContainerId={"layout"} >
                  {menuLinks.map(link => (
                <StyledSideBarLink to={link.link}>
                  {link.name}
                </StyledSideBarLink>
            ))}
    </Menu>
  );
};

export default Sidebar
