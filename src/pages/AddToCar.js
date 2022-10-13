import { Col, Container, Row } from "react-bootstrap";

import Formulir from "../component/Formulir";
import NavbarADM from "../component/NavbarADM";

function AddToCar() {
  return (
    <Container>
      <Col>
        <Row>
          <NavbarADM />
          <Formulir />
        </Row>
      </Col>
    </Container>
  );
}
export default AddToCar;
