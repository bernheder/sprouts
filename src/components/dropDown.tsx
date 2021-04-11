import Dropdown from "react-bootstrap/Dropdown"
import styled from "@emotion/styled"

import React, { useState } from 'react';
const StyledDropDownItem = styled(Dropdown.Item)`
&:hover {
  color: cadetBlue
}
`

interface DropDownProps {
  buttonTitle: string
  menuLinks: {
    node: { fields: { slug: string }; frontmatter: { productName: string } }
  }[]
}
const DropDownButton = ({ buttonTitle, menuLinks }: DropDownProps) => {
  const [show, setShow] = useState(false);
const showDropdown = ()=>{
    setShow(!show);
}
const hideDropdown = () => {
    setShow(false);
}
  return (
    <Dropdown  show={show}     onMouseEnter={showDropdown} 
    onMouseLeave={hideDropdown}>
      <Dropdown.Toggle 

     variant="success" id="dropdown-basic">
        {buttonTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu> 
        {menuLinks.map(link => {
          return (
            <div>
              <StyledDropDownItem href={link.node.fields.slug}>
                {link.node.frontmatter.productName}
              </StyledDropDownItem>
            </div>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownButton
