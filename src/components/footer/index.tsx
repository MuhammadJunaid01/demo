import { Col, Container, Row } from "react-bootstrap";
import { customerService, terms, useFullLinks } from "utils/data";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-gray-100)", padding: "50px 0px" }}>
      <Container fluid>
        <Row>
          <Col sm={12} md={5} lg={5}>
            <div>
              <h1 style={{ margin: "0px" }}>DEMO</h1>
              <p style={{ margin: "0px" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas necessitatibus quisquam omnis fuga ipsum dignissimos
                accusamus animi consectetur dolorum nostrum inventore
                recusandae, nisi quaerat deserunt culpa ducimus aut. Esse,
                maiores.
              </p>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <h5>USEFUL LINKS</h5>
            <div style={{ marginTop: "10px" }}>
              {useFullLinks.map((data, index) => {
                return (
                  <div key={index}>
                    <p style={{ margin: "0px" }}>{data}</p>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <div>
              <h4 style={{ margin: "0px" }}>CUSTOMER SERVICE</h4>
              <div style={{ marginTop: "10px" }}>
                {customerService.map((data, index) => {
                  return (
                    <div key={index}>
                      <p style={{ margin: "1px 0px" }}>{data}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div>
              <h5 style={{ margin: "0px" }}>MY ACCOUNT</h5>
              <div style={{ marginTop: "10px" }}>
                {terms.map((data, index) => {
                  return (
                    <div key={index}>
                      <p style={{ margin: "1px 0px" }}>{data}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} lg={5}></Col>
          <Col sm={12} md={5} lg={5}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
