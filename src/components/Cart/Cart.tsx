import "./Cart.css";

interface CartData {
  cart: {
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
  }[];
}

export const Cart = (props: CartData) => {
  const { cart } = props;
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
  return (
    <div>
      <h2>Oder Summary</h2>
      <div>Selected items:{cart.length}</div>
      <div>Total Price: {totalPrice}</div>
      <div>Total Shipping Charge</div>
      <div>Tax</div>
      <h4>Grand Total</h4>
      <button>Clear Cart</button>
      <button>Review Order</button>
    </div>
  );
};
