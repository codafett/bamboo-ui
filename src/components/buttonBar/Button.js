import styled from "styled-components";
import colours from '../../styles/colours';


const Button = ({title, onClick}) => {
  return <ButtonWrapper onClick={onClick}>
    {title}
  </ButtonWrapper>
}

const ButtonWrapper = styled.button`
  padding: 10px;
  border: solid 1px ${colours.PRIMARY.NORMAL};
  border-radius: 4px;
  background: ${colours.PRIMARY.NORMAL};
  color: ${colours.BASE.NORMAL};
  cursor: pointer;
`;

export default Button;
