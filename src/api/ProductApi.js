import axios from "axios";

const ProductApi = () => ({
  async getAllProducts() {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
  },
  async getProductById(id) {
    const response = await axios.get(`http://localhost:3000/product/${id}`);
    return response.data;
  }
});

export default ProductApi();
