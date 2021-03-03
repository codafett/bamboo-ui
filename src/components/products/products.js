import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../title/title";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/products').then(
      (response) => {
        setProducts(response.data);
        setLoading(false);
      } 
    )
  }, []);

  function renderProducts() {
    return <><Title title="Products"></Title><ProductList>
      {
        products.map(
          (product) => <Product>
            <ProductDetails>
              <Name>{product.name}</Name>
              <Price>{product.price}</Price>
            </ProductDetails>
            <Comments></Comments>
          </Product>
        )
      }
    </ProductList></>
  }

  return loading? <h1>Loading</h1> : renderProducts();
};

const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1090px;
  margin: 0 auto;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div``;

const Price = styled.div`
  width: 200px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Products;
