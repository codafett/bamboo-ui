import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import productApi from "../../api/ProductApi";
import Button from "../buttonBar/Button";
import ButtonBar from "../buttonBar/ButtonBar";
import Menu from "../menu/Menu";
import MenuItem from "../menu/MenuItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const data = await productApi.getAllProducts();
      setProducts(data);
      setLoading(false);
    })();
  }, []);

  function handleProductClick(productId) {
    history.push(`/products/${productId}`)
  }

  function handleAddNewClick() {
    history.push(`/products/new`)
  }

  function renderProducts() {
    return <ProductsWrapper>
        <Menu>
          <MenuItem title="Products" />
        </Menu>
        <ButtonBar>
          <Button title="Add Product" onClick={handleAddNewClick} />
        </ButtonBar>
        <ProductList>
          {
            products.map(
              (product) => <Product key={product._id} onClick={() => handleProductClick(product._id)}>
                <ProductDetails>
                  <Name>{product.name}</Name>
                  <Price>£{product.price}</Price>
                </ProductDetails>
                <Comments>
                  <div>
                    <div>Comments: {product.comments?.length}</div>
                  </div>
                </Comments>
              </Product>
            )
          }
        </ProductList>
      </ProductsWrapper>
  }

  return loading? <h1>Loading</h1> : renderProducts();
};

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  text-transform: capitalize;
`;

const Name = styled.div`
  font-size: 1.2rem;
`;

const Price = styled.div`
  width: 200px;
  text-align: right;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

export default Products;
