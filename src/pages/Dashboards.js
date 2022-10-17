import { Col, Row } from "react-bootstrap";

import Dashboard from "../component/Dashboard";
import Header from "../component/Header";
import Sidebar from "../component/Navbar";
import Navbar from "../component/Sidebar";

function DashboardPage() {
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
            <Dashboard />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default DashboardPage;
