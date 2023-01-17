import Link from "next/link";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const MenuBar = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("/");
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ cursor: "pointer" }} onClick={handleLink}>
            Demo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link style={style.link} href="/home">
                Home
              </Link>
              <Link style={style.link} href="/home">
                Home
              </Link>
              <Link style={style.link} href="/home">
                Home
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
const style = {
  link: {
    margin: "0px 20px",
    padding: "0px",
    textDecoration: "none",
    color: "black",
  },
};
export default MenuBar;
