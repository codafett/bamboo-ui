import { Link } from "react-router-dom"
import styled from "styled-components";

const MenuItem = ({ title, link }) => {
  function renderLink() {
    return link
      ? (
        <Link to={link}>{title}</Link>
      )
      : (
        <div>{title}</div>
      )
  }
  return <MenuItemWrapper>
    {renderLink()}
  </MenuItemWrapper>
}

const MenuItemWrapper = styled.div`
  padding: 10px;
`;

export default MenuItem;