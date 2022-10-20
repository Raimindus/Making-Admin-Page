import { Col, Row } from "react-bootstrap";

import Cars from "../component/Cars";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Car() {
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
          <Col xs={10}>
            <Cars />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Car;
