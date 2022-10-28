import { Col, Image, Row } from "react-bootstrap";

import vektor from "../assets/img/Vector.png";
import Formulir from "../component/Formulir";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function AddToCar() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: "1" }}>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
          <Col xs={2}>
            <Sidebar title="Cars" submenu="List Car" />
          </Col>
          <Col xs={10} className="colMainBody">
            <Col>
              <Col className="line2 d-flex gap-2 ">
                <p className="padm ">Cars</p>
                <Image src={vektor} className="vektoradm" />
                <p className="padm2">List Car</p>
                <Image src={vektor} className="vektoradm" />
                <p className="padm2">Add New Car</p>
              </Col>
              <Col className="d-flex justify-content-between fw-bold mt-3 gap-3" />
              Add New Car
            </Col>
            <Col>
              <Formulir />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default AddToCar;
