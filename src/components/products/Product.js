import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import ProductApi from "../../api/ProductApi";
import Title from "../title/Title";

const Product = ({ match }) => {
  const [id] = useState(match.params.id);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const product = await ProductApi.getProductById(id);
      setProduct(product);
      setLoading(false);
    })();
  })

  function renderProduct() {
    return loading
      ? <h1>Loading ...</h1>
      : <h6>{product.name}</h6>
  }

  return <>
    <Title>Product</Title>
    {renderProduct()}
    </>
}

export default withRouter(Product);
