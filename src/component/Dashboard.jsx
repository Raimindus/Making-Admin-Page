import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";

import Chart from "./Chart";
import DataTable from "./DataTable";

function Dashboard() {
  const monthList = [
    { value: "June - 2022", label: "June - 2022" },
    { value: "Juli - 2022", label: "Juli - 2022" },
    { value: "Agustus - 2022", label: "Agustus - 2022" },
    { value: "September - 2022", label: "September - 2022" },
  ];
  const limitList = [{ value: "10", label: "10" }];
  const jtpList = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];
  return (
    <Container fluid id="dashboard">
      <Row className="d-flex">
        <Col>
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
            <Form className="mt-2 mb-5">
              <Form.Label>Month</Form.Label>
              <Col md={3} className="d-flex">
                <Select
                  className="selectFont"
                  options={monthList}
                  placeholder="June - 2022"
                />
                <Button>Go</Button>
              </Col>
            </Form>
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
            <Form className="d-flex flex-direction-column">
              <div>
                <Form.Label>Limit</Form.Label>
                <Col md={3} className="">
                  <Select
                    className="selectFont limitS me-2"
                    options={limitList}
                    placeholder="10"
                  />
                </Col>
              </div>
              <div>
                <Form.Label>Jump to page</Form.Label>
                <div className="d-flex">
                  <Col md={3}>
                    <Select
                      className="limitJtp selectFont me-5"
                      options={jtpList}
                      placeholder="1"
                    />
                  </Col>
                  <Col md={2}>
                    <Button className="btnjtp">Go</Button>
                  </Col>
                </div>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;
