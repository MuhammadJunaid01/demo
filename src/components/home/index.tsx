import { Button, CustomerSay, HeroBanner, Products } from "@/components";
import { useGetProductQuery } from "@/redux/api";
import { getProducts } from "@/redux/api/slices/product.slice";
import avatar1 from "public/avatar-1.png";
import avatar2 from "public/avatar-2.png";
import avatar3 from "public/avatar-3.png";
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
  const review = [
    {
      name: "JHON DOE",
      img: avatar1,
      title: "“Really great store”",
      info: "“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra",
    },
    {
      name: "JHON DOE",
      img: avatar2,
      title: "“Really great store”",
      info: "“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra",
    },
    {
      name: "JHON DOE",
      img: avatar3,
      title: "“Really great store”",
      info: "“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra",
    },
  ];
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
      <CustomerSay heading="OUR CUSTOMERS SAY" review={review} />
    </>
  );
};

export default HomePage;
