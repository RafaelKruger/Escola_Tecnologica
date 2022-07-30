import { Products } from "../bd.js";
const products = new Products();
export class ProductService {
  async add(product) {
    await products.add(product);
  }
  getAll() {
    return products.getAll();
  }
  async remove(index) {
    await products.deleteById(index);
  }
}
