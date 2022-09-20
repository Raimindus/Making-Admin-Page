import { Container, Row, Col, Button, Form, Table, Image, Card } from "react-bootstrap";
import Select from "react-select";
import vektor from "../assets/img/Vector.png";
import Pagination from "react-bootstrap/Pagination";
import Chart from "./Chart";

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
        <Col className="sideDashboard">
          <div className="side2 bg-white">
            <p className="dash-judul">DASHBOARD </p>
            <p className="dash-judul2">Dashboard</p>
          </div>
        </Col>
        <Col>
          <Col className="line1 d-flex gap-2 align-items-center">
            <p className="padm ">Dashboard</p>
            <Image src={vektor} className="vektoradm"></Image>
            <p className="padm2">Dashboard</p>
          </Col>
          <Card className=" ms-1 me-5" style={{ backgroundColor: "#e8e3e3", paddingLeft: "10px", marginTop:"60px" ,width:"950px",border:"none"}}>
            <Col className="d-flex gap-2 align-items-center">
              <div className="" style={{ marginTop: "-10px", width: "4px", height: "24px", backgroundColor: "blue" }}></div>
              <p className="dataP">Rented Car Data Visualization</p>
            </Col>
            <Form className="mt-2 mb-5">
              <Form.Label>Month</Form.Label>
              <Col md={3} className="d-flex">
                <Select className="selectFont" options={monthList} placeholder="June - 2022" />
                <Button>Go</Button>
              </Col>
            </Form>
            <Chart/>
            <h6 className="mt-4 mb-3">Dashboard</h6>
            
            
            <Col className="d-flex gap-2">
              <div className="mt-1" style={{ width: "4px", height: "24px", backgroundColor: "blue" }}></div>
              <p className="dataP2">List Order</p>
            </Col>
            {/* tabel */}
            <Table bordered hover>
              <thead className="bg-secondary">
                <tr>
                  <th>No</th>
                  <th>Email User</th>
                  <th>Car</th>
                  <th>Start Rent</th>
                  <th>Finish Rent</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Email User</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Category</td>
                </tr>
              </tbody>
            </Table>
            <Form className="d-flex flex-direction-column">
              <div>
                <Form.Label>Limit</Form.Label>
                <Col md={3} className="">
                  <Select className="selectFont limitS me-2" options={limitList} placeholder="10" />
                </Col>
              </div>
              <div>
                <Form.Label>Jump to page</Form.Label>
                <div className="d-flex">
                  <Col md={3}>
                    <Select className="limitJtp selectFont me-5" options={jtpList} placeholder="1" />
                  </Col>
                  <Col md={2}>
                    <Button className="btnjtp">Go</Button>
                  </Col>
                </div>
              </div>
              <div className="pagination ">
                <Col md={4}>
                  <Pagination style={{ marginleft: "-70px" }}>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{9}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </Col>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;