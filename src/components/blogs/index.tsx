import { Blog } from "@/components";
import { BlogsProps } from "@/interfaces";
import { Container, Row } from "react-bootstrap";
const Blogs = (props: BlogsProps) => {
  const { heading, blog } = props;
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h1 style={style.heading}>{heading}</h1>
        <Row>
          {blog?.map(({ date, comments, title, img }, index) => {
            return (
              <Blog
                key={index}
                date={date}
                comments={comments}
                title={title}
                img={img}
              />
            );
          })}
        </Row>
      </div>
    </Container>
  );
};
const style = {
  heading: {
    fontSize: "20px",
    lineHeight: "22px",
    color: "var(--color-primary)",
    marginTop: "30px",
    fontWeight: "400",
    margin: "50px 0px",
  },
};
export default Blogs;
