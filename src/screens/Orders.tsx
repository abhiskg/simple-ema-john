import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cart } from "../components/Cart";
import ReviewItem from "../components/ReviewItem";
import { ProductData } from "../types/productType";
import { removeFromLocalStorage } from "../utilities/localStorage";

interface LoaderData {
  products: ProductData[];
  storedCart: ProductData[];
}

const Orders = () => {
  const { products, storedCart } = useLoaderData() as LoaderData;
  const [cart, setCart] = useState(storedCart);

  const handleDeleteItem = (id: string) => {
    const remainingCart = cart.filter((product) => product.id !== id);
    setCart(remainingCart);
    removeFromLocalStorage(id);
  };

  return (
    <div className="flex justify-center gap-10">
      <div>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleDeleteItem={handleDeleteItem}
            product={product}
          />
        ))}
      </div>
      <div className="">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
