import { ProductData } from "../types/productType";

interface ItemProps {
  product: ProductData;
}
const ReviewItem = (props: ItemProps) => {
  const { id, name, quantity, price, img } = props.product;
  return (
    <div className="flex justify-between items-center border rounded-lg p-2 gap-4 mb-2">
      <div className="flex items-center gap-2">
        <img src={img} width={90} height={90} alt="" />
        <div>
          <div>{name}</div>
          <div>Price: {price}</div>
          <div>Quantity: {quantity}</div>
        </div>
      </div>
      <div>Delete</div>
    </div>
  );
};

export default ReviewItem;
