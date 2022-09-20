import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginImg from "../assets/img/loginImg.png";
function SignIn() {
  return (
    <Container fluid className="contSignIn" style={{ paddingLeft: "0" }}>
      <Row>
        <Col md={8}>
          <img src={LoginImg} className="loginImg"></img>
        </Col>
        <Col md={4} className="colForm ps-5 pe-5">
          <Form className="my-auto">
            <div className="divlogo"></div>
            <h3 className="pb-3">Welcome, Admin BCR</h3>
            <Card className="cardAlert d-none bg-pink">
              <Card.Body>
                Masukkan username dan password yang benar. Perhatikan penggunaan
                huruf kapital.
              </Card.Body>
            </Card>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: johndee@gmail.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="6+ karakter" />
            </Form.Group>
            <Link to="/dashboard">
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Sign In
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
