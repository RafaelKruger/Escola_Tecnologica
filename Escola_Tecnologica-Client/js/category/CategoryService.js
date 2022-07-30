import { categories } from "../bd.js";
export class CategoryService {
  async add(category) {
    await categories.add({ ...category });
  }
  getAll() {
    return categories.get();
  }
  async remove(index) {
    await categories.doc(index).delete();
  }
}
