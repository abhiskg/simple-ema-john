import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cart } from "../components/Cart";
import ReviewItem from "../components/ReviewItem";
import { ProductData } from "../types/productType";

interface LoaderData {
  products: ProductData[];
  storedCart: ProductData[];
}

const Orders = () => {
  const { products, storedCart } = useLoaderData() as LoaderData;
  const [cart, setCart] = useState(storedCart);

  return (
    <div className="flex justify-center gap-10">
      <div>
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} />
        ))}
      </div>
      <div className="">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
