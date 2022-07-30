import { mysql } from "../require.js";

export class ProductService {
  async post(product) {
    await mysql.query(
      `INSERT INTO products (name, description) VALUES ("${product.name}","${product.description}")`
    );
    mysql.quit();
  }
  async getAll() {
    let dados = await mysql.query(`SELECT * FROM products`);
    mysql.quit();
    return dados;
  }
  async get(index) {
    let dados = await mysql.query(`SELECT * FROM products WHERE id = ${index}`);
    mysql.quit();
    return dados;
  }
  async delete(index) {
    await mysql.query(`DELETE FROM products WHERE id = ${index}`);
    mysql.quit();
  }
}
