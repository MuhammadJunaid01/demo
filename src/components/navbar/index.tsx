import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
const MenuBar = () => {
  const [show, setShow] = useState(false);
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
              className="ms-auto mr-5 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link style={style.link} href="/home">
                HOME
              </Link>
              <Link style={style.link} href="/home">
                SHOP
              </Link>
              <Link style={style.link} href="/home">
                PRODUCTS
              </Link>
              <Link style={style.link} href="/home">
                PAGES
              </Link>
            </Nav>
            <div className="search_box">
              <input type="text" placeholder="Search in..." />
              <p onClick={() => setShow((prev) => !prev)}>
                <FaSearch style={{ color: "var(--color-gray-200)" }} />
              </p>
            </div>
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
    fontWeight: 500,
  },
};
export default MenuBar;
