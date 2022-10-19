import { ProductData } from "../types/productType";

interface ItemProps {
  product: ProductData;
  handleDeleteItem: (id: string) => void;
}
const ReviewItem = (props: ItemProps) => {
  const { product, handleDeleteItem } = props;
  const { id, name, quantity, price, img } = product;
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
      <div onClick={() => handleDeleteItem(id)}>Delete</div>
    </div>
  );
};

export default ReviewItem;
