import { Button, HeroBanner, Loader, Products } from "@/components";
import { useGetProductQuery } from "@/redux/api";
import { Col, Container, Row } from "react-bootstrap";
import MensFashion from "../../../public/banner-2.jpg";
const HomePage = () => {
  const { data, error, isLoading } = useGetProductQuery("productApi");
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <HeroBanner
              image={MensFashion}
              heading="SHOP MENS'S"
              title="NEW COLLECTION"
              button={<Button name="DISCOVER" size="lg" />}
            />
          </Col>
        </Row>
      </Container>

      <Products products={data} />
    </>
  );
};

export default HomePage;
