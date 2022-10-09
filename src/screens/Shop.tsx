import { useEffect, useState } from "react";
import { Cart } from "../components/Cart";
import { Product } from "../components/Product";
import { ProductData } from "../types/productType";
import {
  addToLocalStorage,
  getLocalStorageCart,
} from "../utilities/localStorage";

export const Shop = () => {
  const [products, setProducts] = useState<[] | ProductData[]>([]);
  const [cart, setCart] = useState<ProductData[] | []>([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("products.json");
      const data = await res.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    const storedCart = getLocalStorageCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product: ProductData) => {
    const existingProduct = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    console.log(existingProduct);
    let newCart = [];
    if (!existingProduct) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((cartProduct) => cartProduct.id !== product.id);
      product.quantity = product.quantity + 1;
      newCart = [...rest, product];
    }
    setCart(newCart);
    addToLocalStorage(product.id);
  };
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 grid grid-cols-3 mt-5 custom-width mx-auto gap-5">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="col-span-1 bg-secondary-100">
        <Cart cart={cart} />
      </div>
    </div>
  );
};
