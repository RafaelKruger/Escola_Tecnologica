import NextCors from "nextjs-cors";
import { methods } from "../method.js";
import { ProductService } from "./ProductService.js";

export default async function handler(req, res) {
  await NextCors(req, res, methods);

  const productService = new ProductService();
  switch (req.method) {
    case "GET":
      let dados = await productService.get(req.query.id);
      res.json(dados);
      break;
    case "DELETE":
      productService.delete(req.query.id);
      res.json({ message: "deleted" });
      break;
    default:
      res.end("Metodo não permitido");
      break;
  }
}
