import axios from "axios";
import { reactive } from "vue";

const productData = reactive({
  products: [],
  carts: localStorage.getItem("addCarts")
    ? JSON.parse(localStorage.getItem("addCarts"))
    : [],
  async fetchProducts() {
    let response = await axios.get("https://dummyjson.com/products");
    this.products = await response.data.products;
  },
  addtoCart(p) {
    let cartData = [...this.carts];
    if (cartData.find((cdata) => cdata.id == p.id)) {
      let newArr = cartData.map((newData) =>
        newData.id == p.id
          ? { ...newData, quantity: newData.quantity + 1 }
          : newData
      );
      this.carts = newArr;
      localStorage.setItem("addCarts", JSON.stringify(newArr));
    } else {
      cartData.push({ ...p, quantity: 1 });
      this.carts = cartData;
      localStorage.setItem("addCarts", JSON.stringify(cartData));
    }
  },
});

export default productData;
