import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import vektor from "../assets/img/Vector.png";
import Formulir from "../component/Formulir";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function EditCar() {
  const { id } = useParams();
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
              <Col className="line1 d-flex gap-2 ">
                <p className="padm ">Cars</p>
                <Image src={vektor} className="vektoradm" />
                <p className="padm2">List Car</p>
                <Image src={vektor} className="vektoradm" />
                <p className="padm2">Edit Car</p>
              </Col>
              <Col className="d-flex justify-content-between fw-bold mt-3 gap-3" />
              Edit Car
            </Col>
            <Col>
              <Formulir id={id} edit />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default EditCar;
