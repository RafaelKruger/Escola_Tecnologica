import { Category } from "./Category.js";
import { CategoryService } from "./CategoryService.js";

document.querySelector("#frm").addEventListener("submit", addCategory);
document.querySelector("#rowTable").addEventListener("click", removeCategory);

const categoryService = new CategoryService();
async function addCategory(event) {
  event.preventDefault();
  const category = new Category();
  category.name = document.querySelector("#iptName").value;
  category.description = document.querySelector("#iptDescription").value;
  await categoryService.add(category);
  renderTable();
  document.querySelector("#frm").reset();
}

renderTable();
async function renderTable() {
  const categories = await categoryService.getAll();
  console.log(categories);
  document.querySelector("#rowTable").innerHTML = "";
  categories.forEach(function (category) {
    document.querySelector("#rowTable").innerHTML += `<tr>
    <td>${category.data().name}</td>
    <td>${category.data().description}</td>
    <td><a href="#" index=${category.id}> 🗑️ </a> </td>
  </tr>`;
  });
}

async function removeCategory(event) {
  let index = event.target.getAttribute("index");
  await categoryService.remove(index);
  renderTable();
}
