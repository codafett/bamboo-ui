import styled from "styled-components";

const Menu = ({ children }) => {
  return <MenuWrapper>
    {children}
  </MenuWrapper>
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > div {
    padding: 10px;
    ::after {
      content: "/";
      margin: 0 -10px 0 10px;
    }
    &:last-child {
      ::after {
        content: "";
      }
    }
  }
`;

export default Menu;
