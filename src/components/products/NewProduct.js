import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import styled from "styled-components";
import ProductApi from "../../api/ProductApi";
import Button from "../buttonBar/button";
import ButtonBar from "../buttonBar/buttonBar";
import Menu from "../menu/Menu";
import MenuItem from "../menu/MenuItem";
import Title from "../title/Title";

const NewProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = [];
    if (!productName) {
      errors.push('Name is required')
    }
    if (!productPrice) {
      errors.push('Price is required')
    }

    setErrorMessages(errors)

    if (!errors.length) {
      await ProductApi.saveProduct(
        productName,
        productPrice,
      );
      toast.success('Product created!')
      history.push('/products')
    }
  }

  function handleNameChange({ target: { value }}) {
    setProductName(value);
  }

  function handlePriceChange({ target: { value }}) {
    setProductPrice(value);
  }

  function renderErrors() {
    return errorMessages.length
      ? (
        <Errors>
          {errorMessages.map((e) => (<Error>{e}</Error>))}
        </Errors>
      )
      : null
  }

  return <NewProductWrapper>
    <Menu>
      <MenuItem title="Products" link="/products" />
      <MenuItem title="New Product" />
    </Menu>
    <Title>New Product</Title>
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormControlTitle>
          Name
        </FormControlTitle>
        <FormControlHolder>
          <input type="text" onChange={handleNameChange} value={productName} />
        </FormControlHolder>
      </FormControl>
      <FormControl>
        <FormControlTitle>
          Price
        </FormControlTitle>
        <FormControlHolder>
          <input type="number" onChange={handlePriceChange} value={productPrice} />
        </FormControlHolder>
      </FormControl>
      {renderErrors()}
      <ButtonBar>
        <Button title="Save" />
      </ButtonBar>
    </Form>
  </NewProductWrapper>
}

const NewProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: solid 1px #eeeeee;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;

const FormControlTitle = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const FormControlHolder = styled.div`
  width: 60%;
  > input {
    width: 100%;
    padding: 6px;
  }
`;

const Errors = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 600;
  color: #FF0000;
`;

const Error = styled.div`
  padding: 10px;
`;

export default NewProduct;
