import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Image,
} from "react-bootstrap";
import vektor from "../assets/img/Vector.png";
import { UseNavigate } from 'react-router-dom';


function ANCar() {
  const navigate = UseNavigate();
  return (
    <Container fluid id="dashboard">  
      <Row className="d-flex">
        <Col className="sideDashboard">
          <div className="side2 bg-white">
            <p className="dash-judul">CARS</p>
            <p className="dash-judul2">List Car</p>
          </div>
        </Col>
        <Col>
          <Col className="line1 d-flex gap-2 align-items-center">
            <p className="padm ">Cars</p>
            <Image src={vektor} className="vektoradm"></Image>
            <p className="padm">List Car</p>
            <Image src={vektor} className="vektoradm"></Image>
            <p className="padm2">Add New Car</p>
          </Col>
          <Card
            className=" ms-1 me-5"
            style={{
              backgroundColor: "#e8e3e3",
              paddingLeft: "10px",
              marginTop: "45px",
              width: "950px",
              border: "none",
            }}
          >
            <p className="dataP fs-4">Add New Car</p>
            <Card className="p-3" style={{ marginBottom: "250px" }}>
              <Form>
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                  <Form.Label className="w-25">Nama/Type Mobil</Form.Label>
                  <Form.Control
                    type="text"
                    className="w-50"
                    placeholder="Input nama / tipe mobil"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex"
                  controlId="formGroupPassword"
                >
                  <Form.Label className="w-25">Harga</Form.Label>
                  <Form.Control
                    type="text"
                    className="w-50"
                    placeholder="Input harga sewa mobil"
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                  <Form.Label className="w-25">Foto</Form.Label>
                  <Form.Control
                    type="file"
                    className="w-50"
                    placeholder="Upload foto mobil"
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                  <Form.Label className="w-25">Kategori</Form.Label>
                  <Form.Select
                    placeholder="Pilih kategori mobil"
                    className="w-50"
                  >
                    <option>Pilih Kategori Mobil</option>
                    <option value="1">2-4 Orang</option>
                    <option value="2">4-6 Orang</option>
                    <option value="3">6-8 Orang</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                  <Form.Label className="w-25">Created at</Form.Label>-
                  {/* <Form.Control type="email" className="w-50" placeholder="Input nama / tipe mobil" /> */}
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
                  <Form.Label className="w-25">Updated at</Form.Label>-
                  {/* <Form.Control type="email" className="w-50" placeholder="Input nama / tipe mobil" /> */}
                </Form.Group>
              </Form>
            </Card>
            <Col className="d-flex fw-bold gap-3">
              <Button variant="outline-primary" onClick={() =>{
                navigate(`./Cars`);
              }}>Cancel</Button>
              <Button className="">Save </Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default ANCar;
