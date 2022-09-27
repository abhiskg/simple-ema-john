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
  const shippingCharge = cart.reduce((prev, curr) => prev + curr.shipping, 0);
  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = totalPrice + shippingCharge + tax;
  return (
    <div>
      <h2>Oder Summary</h2>
      <div>Selected items:{cart.length}</div>
      <div>Total Price: {totalPrice}</div>
      <div>Total Shipping Charge: {shippingCharge}</div>
      <div>Tax: {tax}</div>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
      <button>Clear Cart</button>
      <button>Review Order</button>
    </div>
  );
};
