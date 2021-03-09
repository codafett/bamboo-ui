import styled from "styled-components";

const Button = ({title, onClick}) => {
  return <ButtonWrapper onClick={onClick}>
    {title}
  </ButtonWrapper>
}

const ButtonWrapper = styled.button`
  padding: 10px;
  border: solid 1px #00e8ff;
  border-radius: 4px;
  background: #00e8ff;
  color: #ffffff;
  cursor: pointer;
`;

export default Button;
