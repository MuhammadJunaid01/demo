import { CustomerSayProps } from "@/interfaces";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const CustomerSay = (props: CustomerSayProps) => {
  const [index, setIndex] = useState(0);

  const { heading, review } = props;
  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <Container>
        <h1>{heading}</h1>
        <Carousel
          nextIcon={
            <span>
              <FaAngleDoubleRight style={{ color: "black" }} />
            </span>
          }
          prevIcon={
            <span>
              <FaAngleDoubleLeft style={{ color: "black" }} />
            </span>
          }
          activeIndex={index}
          onSelect={handleSelect}
        >
          {review.map((data, index) => {
            return (
              <Carousel.Item
                key={index}
                style={{
                  width: "100%",
                  height: "400px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <Image
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    width={50}
                    height={50}
                    src={data.img}
                    alt="First slide"
                  />
                </div>

                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>{data.name}</h3>
                  <p style={{ color: "black" }}>{data.info}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default CustomerSay;
