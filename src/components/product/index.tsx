import { productProps } from "@/interfaces";
import Head from "next/head";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import style from "../../styles/product.module.css";
import { Button } from "../index";
const Product = (props: productProps) => {
  const { title, image, rating, price, description } = props.product;

  return (
    <div style={{ padding: "50px 0px" }}>
      <Head>
        <title>{title} - My Store</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
      </Head>
      <Container>
        <Row>
          <Col sm={12} md={7} lg={7}>
            <div style={{ width: "100%" }}>
              <TransformWrapper>
                <TransformComponent>
                  <Image
                    width={600}
                    height={500}
                    src={image}
                    alt="product-image"
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </Col>
          <Col sm={12} md={5} lg={5}>
            <div>
              <h4 style={styleIn.title}> {title}</h4>
              <div className="d-flex gap-2">
                <Rating size={15} readonly initialValue={rating.rate} />
                <p style={{ margin: "0px", color: "#cccccc" }}>
                  ({rating.count} Reviews)
                </p>
              </div>
              <p style={styleIn.price}>${price}</p>
              <p style={styleIn.description}>{description}</p>
              <div style={styleIn.btnContainer}>
                <div className={style.btnBox}>
                  <p style={{ margin: "0px", backgroundColor: "inherit" }}>
                    <FaShoppingCart style={styleIn.icon} />
                  </p>
                  <Button name="ADD TO CART" size="lg" />
                </div>
                <div className={style.btnBox}>
                  <p style={{ margin: "0px", backgroundColor: "inherit" }}>
                    <FaRegHeart style={styleIn.icon} />
                  </p>
                  <Button name="ADD TO WISHLIST" size="lg" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const styleIn = {
  title: {
    color: "var(--color-primary)",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "30px",
  },
  price: {
    color: "var(--color-orange-300)",
    fontSize: "25px",
    fontWeight: 400,
    margin: "2px 0px",
    lineHeight: "30px",
  },
  description: {
    fontSize: "14px",
    fontWeight: 300,
    color: "var(--color-secoundary)",
    lineHeight: "26px",
    margin: "5px 0px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "15px",
  },

  icon: {
    backgroundColor: "inherit",
    color: "inherit",
  },
};
export default Product;
