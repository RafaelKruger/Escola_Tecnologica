import { Product } from "./Product.js";
import { ProductService } from "./ProductService.js";

document.querySelector("#frm").addEventListener("submit", addProduct);
document.querySelector("#rowTable").addEventListener("click", removeProduct);

const productService = new ProductService();
async function addProduct(event) {
  event.preventDefault();
  const product = new Product();
  product.name = document.querySelector("#iptName").value;
  product.description = document.querySelector("#iptDescription").value;
  await productService.add(product);
  renderTable();
  document.querySelector("#frm").reset();
}

renderTable();
async function renderTable() {
  const products = await productService.getAll();
  document.querySelector("#rowTable").innerHTML = "";
  products.forEach(function (product) {
    document.querySelector("#rowTable").innerHTML += `<tr>
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td><a href="#" index=${product.id}> 🗑️ </a> </td>
  </tr>`;
  });
}

async function removeProduct(event) {
  let index = event.target.getAttribute("index");
  await productService.remove(index);
  renderTable();
}
