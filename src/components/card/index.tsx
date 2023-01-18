import { CardProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { FaRegEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import style from "../../styles/card.module.css";
import { Button } from "../index";

const Card = (props: CardProps) => {
  const { breakPoints, image, title, rating, id, price } = props;
  return (
    <Col
      style={{ marginBottom: "10px" }}
      sm={breakPoints ? breakPoints.sm : 12}
      md={breakPoints ? breakPoints.md : 3}
      lg={breakPoints ? breakPoints.lg : 4}
    >
      <Link
        style={{ textDecoration: "none", color: "black" }}
        href={`/products/${id}`}
      >
        <div className={style.card}>
          <Image
            className={style.card_image}
            src={image}
            width={180}
            height={120}
            alt="product-image"
          />
          <div className={style.card_body}>
            <div className={style.card_btn}>
              <FaShoppingCart style={{ backgroundColor: "inherit" }} />
              <Button name="Add To Cart" size="sm" />
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "6px 0px",
              }}
            >
              <Rating size={15} readonly initialValue={rating.rate} />
              <p style={{ margin: "0px", color: "#cccccc" }}>
                ({rating.count} Reviews)
              </p>
            </div>
            <p style={styleIn.title}>{title.slice(0, 20)}</p>
            <p style={{ margin: "2px 0px" }}>${price}</p>
          </div>
          <div className={style.wish_list}>
            <p style={styleIn.wishIcon}>
              <FaRegHeart
                style={{ backgroundColor: "inherit", color: "white" }}
              />
            </p>
            <p style={styleIn.wishIcon}>
              <FaRegEye
                style={{ backgroundColor: "inherit", color: "white" }}
              />
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
};
const styleIn = {
  wishIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: "0px",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "400",
    color: "var( --color-primary)",
  },
};
export default Card;
