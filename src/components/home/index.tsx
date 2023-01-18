import { Button, CustomerSay, HeroBanner, Products } from "@/components";
import { useGetProductQuery } from "@/redux/api";
import { getProducts } from "@/redux/api/slices/product.slice";
import MensFashion from "public/banner-2.jpg";
import Womens from "public/banner-4 .jpg";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductQuery("productApi");
  useEffect(() => {
    dispatch(getProducts(data));
  }, [data, dispatch]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <HeroBanner
              image={MensFashion}
              heading="SHOP MENS'S"
              title="NEW COLLECTION"
              button={<Button name="DISCOVER NOW" size="lg" />}
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <HeroBanner
              image={Womens}
              heading="SHOP WOMEN'S"
              title="NEW COLLECTION"
              button={<Button name="DISCOVER NOW" size="lg" />}
            />
          </Col>
        </Row>
      </Container>

      <Products
        isLoading={isLoading}
        heading="FEATURED PRODUCTS"
        products={data}
        tabsData={[{ name: "WOMENS CLOTHING" }, { name: "WOMENS CLOTHING" }]}
      />
      <CustomerSay />
    </>
  );
};

export default HomePage;
