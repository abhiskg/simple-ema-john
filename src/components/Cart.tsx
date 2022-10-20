interface CartProps {
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
  children: JSX.Element;
}

export const Cart = ({ cart, children }: CartProps) => {
  const cartLength = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const shippingCharge = cart.reduce((prev, curr) => prev + curr.shipping, 0);
  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = totalPrice + shippingCharge + tax;
  return (
    <div className="p-5">
      <h2 className="text-center text-lg font-semibold">Oder Summary</h2>
      <div className="mt-5">Selected items:{cartLength}</div>
      <div>Total Price: {totalPrice}</div>
      <div>Total Shipping Charge: {shippingCharge}</div>
      <div>Tax: {tax}</div>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
      <div className="flex items-center gap-2 mt-5">
        <button className="bg-orange-300 py-1.5 px-1.5 rounded font-medium">
          Clear Cart
        </button>
        <button className="bg-orange-300 py-1.5 px-1.5 rounded font-medium">
          {children}
        </button>
      </div>
    </div>
  );
};
