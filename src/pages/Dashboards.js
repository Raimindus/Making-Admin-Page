import { Col, Row } from "react-bootstrap";

import Dashboard from "../component/Dashboard";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function DashboardPage() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: "1" }}>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
          <Col xs={2}>
            <Sidebar title="Dashboard" submenu="Dashboard" />
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
