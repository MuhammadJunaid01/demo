import { Button, Card, Loader } from "@/components";
import { ProductsProps } from "@/interfaces";
import { Container, Row } from "react-bootstrap";
const Products = (props: ProductsProps) => {
  const { products, isLoading, heading, tabsData } = props;
  if (isLoading) {
    return <Loader />;
  }
  const handleClick = (name: string) => {
    console.log(name);
  };
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h3>{heading}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginBottom: "10px",
          }}
        >
          {tabsData.map(({ name }, index) => {
            return (
              <div
                onClick={() => handleClick(name)}
                className={`tab${index}`}
                key={index}
              >
                <Button name={name} size="lg" />
              </div>
            );
          })}
        </div>
      </div>
      <Row>
        {products?.map(({ price, id, image, rating, title }) => {
          return (
            <Card
              key={id}
              price={price}
              id={id}
              image={image}
              rating={rating}
              title={title}
              breakPoints={{ sm: 12, md: 6, lg: 3 }}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
