export class Products {
  #url = "https://yzxx3s.sse.codesandbox.io/api/products";
  async getAll() {
    const products = await fetch(this.#url, {
      method: "GET",
      mode: "cors"
    });
    return products.json();
  }
  async add(product) {
    let _data = {
      name: product.name,
      description: product.description
    };
    console.log(_data);
    let mybody = JSON.stringify(_data);
    await fetch(this.#url, {
      method: "POST",
      mode: "cors",
      body: mybody,
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    console.log(mybody);
  }
  async deleteById(id) {
    console.log(id);
    const products = await fetch(this.#url + "/" + id, {
      method: "DELETE"
    });
    return products.json();
  }
}
export const categories = firebase.firestore().collection("categories");
