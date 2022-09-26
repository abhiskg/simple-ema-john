import { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import { Product } from "../Product/Product";
import "./Shop.css";

interface ProductData {
  category: string;
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  ratings: number;
  ratingsCount: number;
  seller: string;
  shipping: number;
  stock: number;
}

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

  const handleAddToCart = (product: ProductData) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};
