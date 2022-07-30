import NextCors from "nextjs-cors";
import { methods } from "../method.js";
import { ProductService } from "./ProductService.js";
import { Product } from "./Product.js";

export default async function handler(req, res) {
  await NextCors(req, res, methods);

  const productService = new ProductService();
  switch (req.method) {
    case "GET":
      let dados = await productService.getAll();
      res.json(dados);
      break;
    case "POST":
      const product = new Product();
      product.name = req.body.name;
      product.description = req.body.description;
      productService.post(product);
      res.json({ message: "saved" });
      break;
    default:
      res.end("Metodo não permitido");
      break;
  }
}
