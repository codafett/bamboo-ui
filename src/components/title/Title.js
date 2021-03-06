import styled from "styled-components";

const Title = ({children}) => {
  return <TitleWrapper>
    {children}
  </TitleWrapper>
};

const TitleWrapper = styled.div`
  font-size: 2rem;
  border-bottom: 1px solid #eee;
  padding: 10px;
  margin-bottom: 10px;S
`;

export default Title;
