import { Col, Row } from "react-bootstrap";

import Cars from "../component/Cars";
import Header from "../component/Header";
import Sidebar from "../component/Navbar";
import Navbar from "../component/Sidebar";

function Car() {
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
            <Cars />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Car;
