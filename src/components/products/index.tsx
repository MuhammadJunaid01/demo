import { ProductsProps } from "@/interfaces";
import { Container, Row } from "react-bootstrap";
import { Card } from "../index";
const Products = (props: ProductsProps) => {
  const { products } = props;
  if (products == undefined) {
    return <h1>Loading............</h1>;
  }
  console.log(products);
  return (
    <Container>
      <Row>
        {products.map(
          ({ price, category, id, image, description, rating, title }) => {
            return (
              <Card
                key={id}
                price={price}
                id={id}
                image={image}
                rating={rating}
                title={title}
                breakPoints={{ sm: 12, md: 4, lg: 3 }}
              />
            );
          }
        )}
      </Row>
    </Container>
  );
};

export default Products;
