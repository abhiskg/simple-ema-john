import "./Product.css";
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

interface ProductProps {
  product: ProductData;
  handleAddToCart: (product: ProductData) => void;
}

export const Product = (props: ProductProps) => {
  const { handleAddToCart } = props;
  const { name, img, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <div className="product-content">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h5>Price: ${price}</h5>

        <div>Manufacturer: {seller} </div>
        <div>Rating: {ratings} star</div>
      </div>
      <button onClick={() => handleAddToCart(props.product)}>
        Add to Cart
      </button>
    </div>
  );
};
