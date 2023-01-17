import { productProps } from "@/interfaces";

const Product = (props: productProps) => {
  const { title } = props.product;
  return (
    <div>
      <h1>hello product {title}</h1>
    </div>
  );
};

export default Product;
