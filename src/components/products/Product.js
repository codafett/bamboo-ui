import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import styled from "styled-components";
import ProductApi from "../../api/ProductApi";
import Button from "../buttonBar/button";
import Menu from "../menu/Menu";
import MenuItem from "../menu/MenuItem";
import Title from "../title/Title";

const Product = ({ match }) => {
  const [id] = useState(match.params.id);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');

  useEffect(() => {
    (async () => {
      const product = await ProductApi.getProductById(id);
      setProduct(product);
      setLoading(false);
    })();
  }, [id]);

  function handleCommentChange({ target: { value }}) {
    setComment(value);
  }

  async function handleAddClick() {
    const newComment = await ProductApi.saveComment(
      id,
      comment,
    );
    toast.success('Comment saved!');
    product.comments.push(comment);
    setProduct({
      ...product,
      comments: [
        ...product.comments,
        newComment
      ]
    });
    setComment('')
  }

  function renderProduct() {
    return loading
      ? <h1>Loading ...</h1>
      : <ProductWrapper>
          <Menu>
            <MenuItem title="Products" link="/products" />
            <MenuItem title="Product" />
          </Menu>
          <Title>
            <Row>
              <div>{product.name}</div>
              <div>£{product.price}</div>
            </Row>
          </Title>
          <Comments>
            <NewComment>  
              <CommentInput><div>New comment: </div><input type="text" onChange={handleCommentChange} value={comment} /></CommentInput>
              <div><Button title="Add" onClick={handleAddClick} /></div>
            </NewComment>
            <HeaderRow>
              <div>comment</div>
              <div>author</div>
            </HeaderRow>
            {product.comments.map((c) => (
              <Row>
                <div>{c.comment}</div>
                <div>{c.username}</div>
              </Row>
            ))}
          </Comments>
      </ProductWrapper>
  }

  return <>
    {renderProduct()}
    </>
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 10px;
`;

const NewComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: solid 1px #eee;
`;

const CommentInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  > div {
    width: 120px;
  }
  > input {
    width: 100%;
  }
`;

export default withRouter(Product);
