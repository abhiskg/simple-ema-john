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
    <div className=" w-[300px] h-[500px] relative rounded-lg border border-[#95a0a7]">
      <div className="mx-2">
        <img
          src={img}
          alt=""
          width={286}
          height={286}
          className="rounded-lg mt-2"
        />
        <h4 className="font-medium mt-2">{name}</h4>
        <h5>Price: ${price}</h5>

        <div className="mt-3">Manufacturer: {seller} </div>
        <div>Rating: {ratings} star</div>
      </div>
      <button
        className="w-full absolute bottom-0 py-3 border-none rounded-lg font-semibold bg-secondary-100 hover:bg-orange-400"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
