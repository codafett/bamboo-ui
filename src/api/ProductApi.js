import axios from "axios";

const ProductApi = () => ({
  async getAllProducts() {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
  },
  async getProductById(id) {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
  },
  async saveProduct(name, price) {
    const response = await axios.put('http://localhost:3000/products', {
      name,
      price,
    });
    return response.data;
  },
  async saveComment(id, comment) {
    const response = await axios.put(`http://localhost:3000/products/${id}/comment`, {
      comment,
    });
    return response.data;
  }
});

export default ProductApi();
