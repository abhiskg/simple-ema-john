import { ProductData } from "../types/productType";
import { getLocalStorageCart } from "../utilities/localStorage";

export const productAndCartLoader = async () => {
  const productsData = await fetch("products.json");
  const products = (await productsData.json()) as ProductData[];

  const savedCart = getLocalStorageCart();
  const storedCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      storedCart.push(addedProduct);
    }
  }

  return { products, storedCart };
};
