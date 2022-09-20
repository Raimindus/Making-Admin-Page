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
import iconDelete from "../assets/img/del.png";
import fi_edit from "../assets/img/fi_edit.png";
import fi_clock from "../assets/img/fi_clock.png";
import fi_users from "../assets/img/fi_users.png";
import { Link } from "react-router-dom";
import DialogBox from "./DialogBox";
import { useState } from "react";

function Cars() {
  const [showModal, setShowModal] = useState(false);
  function handleOnClickDelete() {
    setShowModal(true);
    console.log("test");
  }

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
  console.log(showModal);
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
            <p className="padm2">List Car</p>
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
            <Col className="d-flex gap-2 align-items-center">
              <p className="dataP fs-5">List Car</p>
              <Link to="/ancar">
                <Button
                  className=" p-2 "
                  style={{
                    height: "36px",
                    backgroundColor: "blue",
                    lineHeight: "10px",
                    marginBottom: "10px",
                    marginLeft: "730px",
                  }}
                >
                  + Add New Car
                </Button>
              </Link>
            </Col>

            <Col md className="d-flex gap-2 mb-3 mt-1">
              <Button variant="outline-primary ">All</Button>
              <Button variant="outline-primary">2-4 people</Button>
              <Button variant="outline-primary">4-6 people</Button>
              <Button variant="outline-primary">6-8 people</Button>
            </Col>
            <Col className="d-flex gap-4">
              <Card className="mb-3 ">
                <Card.Img
                  className="p-4"
                  variant="top"
                  src="https://placeimg.com/200/100/animals"
                  alt="Gambar tidak tersedia"
                />
                <Card.Body>
                  <Card.Text className="mb-1">Nama/Tipe Mobil </Card.Text>
                  <Card.Subtitle className="fw-bold pt-2">
                    Rp 500.000 / hari
                  </Card.Subtitle>
                  <Card.Subtitle className="pt-3">
                    <img className="icondel" src={fi_users}></img>6-8 people
                  </Card.Subtitle>
                  <Card.Subtitle className="pt-3">
                    <img className="iconupdate me-1" src={fi_clock}></img>
                    Updated at 4 Apr 2022, 09.00
                  </Card.Subtitle>
                  <Col className="d-flex justify-content-between fw-bold mt-3 gap-3">
                    <DialogBox showModal={showModal} />
                    <Button
                      className="delEdit my-auto fw-bold"
                      variant="outline-danger"
                      onClick={handleOnClickDelete}
                    >
                      <img className="icondel" src={iconDelete}></img>
                      Delete
                    </Button>

                    <Link to="/editcar">
                      <Button
                        className="delEdit my-auto fw-bold"
                        variant="success"
                      >
                        <img className="icondel" src={fi_edit}></img>
                        Edit
                      </Button>
                    </Link>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Cars;
