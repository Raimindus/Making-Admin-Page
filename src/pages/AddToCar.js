import { Col, Image, Row } from "react-bootstrap";

import vektor from "../assets/img/Vector.png";
import Formulir from "../component/Formulir";
import Header from "../component/Header";
import Sidebar from "../component/Navbar";
import Navbar from "../component/Sidebar";

function AddToCar() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: "1" }}>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
          <Col xs={2}>
            <Navbar />
          </Col>
          <Col xs={10}>
            <Col>
              <Col className="line1 d-flex gap-2 align-items-center">
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
