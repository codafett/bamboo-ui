import styled from "styled-components";

const ButtonBar = ({children}) => {
  return <ButtonBarWrapper>
    {children}
  </ButtonBarWrapper>
}

const ButtonBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default ButtonBar;