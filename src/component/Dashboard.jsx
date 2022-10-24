import {
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import vektor from "../assets/img/Vector.png";
import Chart from "./Chart";
import DataTable from "./DataTable";

function Dashboard() {
  return (
    <Container fluid id="dashboard">
      <Row className="d-flex">
        <Col>
          <Col className="line1 d-flex gap-2">
            <p className="padm ">Dashboard</p>
            <Image src={vektor} className="vektoradm" />
            <p className="padm2">Dashboard</p>
          </Col>
          <Card
            className=" ms-1 me-5"
            style={{
              backgroundColor: "#e8e3e3",
              paddingLeft: "10px",
              marginTop: "60px",
              width: "950px",
              border: "none",
            }}
          >
            <Col className="d-flex gap-2 align-items-center">
              <div
                className=""
                style={{
                  marginTop: "-10px",
                  width: "4px",
                  height: "24px",
                  backgroundColor: "blue",
                }}
              />
              <p className="dataP">Rented Car Data Visualization</p>
            </Col>
            <Chart />
            <h6 className="mt-4 mb-3">Dashboard</h6>

            <Col className="d-flex gap-2">
              <div
                className="mt-1"
                style={{
                  width: "4px",
                  height: "24px",
                  backgroundColor: "blue",
                }}
              />
              <p className="dataP2">List Order</p>
            </Col>
            <DataTable />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;
