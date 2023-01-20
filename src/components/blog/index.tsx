import { Button } from "@/components";
import Image from "next/image";
import { Col } from "react-bootstrap";
import { BologTypes } from "types";
/* A React component. */
const Blog = (props: BologTypes) => {
  /* Destructuring the props object. */
  const { title, comments, img, date } = props;
  return (
    <Col style={{ marginBottom: "11px" }} sm={12} md={4} lg={3}>
      <div
        /* A style object that is used to style the component. */
        style={{
          textAlign: "center",
          width: "100%",
          overflow: "hidden",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {/* A component from the next.js library. It is used to load images.  */}
        <Image width={317} height={221} src={img} alt="blog-image" />
        <div>
          <div style={style.comments}>
            <p style={{ margin: "0px", color: "var(--color-gray-200)" }}>
              {date}
            </p>
            <p style={{ margin: "0px", color: "var(--color-gray-200)" }}>
              {comments} Comments
            </p>
          </div>
          <h4 style={style.title}>{title}</h4>
          <div
            style={{
              padding: "5px 0px",
              margin: "8px 0px",
              borderRadius: "5px",
            }}
          >
            <Button
              name="READ MORE"
              size="lg"
              color="var(--color-orange-300)"
            />
          </div>
        </div>
      </div>
    </Col>
  );
};
/* A constant variable that is used to store the style of the component. */
const style = {
  comments: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px 0px",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    color: "var(--color-primary)",
    margin: "0px",
  },
};
export default Blog;
