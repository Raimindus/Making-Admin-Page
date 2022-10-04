import { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import iconDelete from "../assets/img/del.png";
import fi_clock from "../assets/img/fi_clock.png";
import fi_edit from "../assets/img/fi_edit.png";
import fi_users from "../assets/img/fi_users.png";
import vektor from "../assets/img/Vector.png";
import { deleteCar } from "../redux/features/counter/carSlice";
import DialogBox from "./DialogBox";

function Cars() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClickDelete = () => {
    setShowModal(true);
  };
  const HandleCloseModal = () => {
    setShowModal(false);
  };
  const handleConfirm = () => {
    deleteCar(carId);
  };

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
            <Image src={vektor} className="vektoradm" />
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
                    <img className="icondel" alt="icondelImg" src={fi_users} />
                    6-8 people
                  </Card.Subtitle>
                  <Card.Subtitle className="pt-3">
                    <img
                      className="iconupdate me-1"
                      alt="iconupdateImg"
                      src={fi_clock}
                    />
                    Updated at 4 Apr 2022, 09.00
                  </Card.Subtitle>
                  <Col className="d-flex justify-content-between fw-bold mt-3 gap-3">
                    <DialogBox
                      onConfirm={handleConfirm}
                      showModal={showModal}
                      onCloseModal={HandleCloseModal}
                    />
                    <Button
                      className="delEdit my-auto fw-bold"
                      variant="outline-danger"
                      onClick={handleOnClickDelete}
                    >
                      <img
                        className="icondel"
                        alt="icondelImg1"
                        src={iconDelete}
                      />
                      Delete
                    </Button>

                    <Link to="/editcar">
                      <Button
                        className="delEdit my-auto fw-bold"
                        variant="success"
                      >
                        <img
                          className="icondel"
                          alt="icondelImg2"
                          src={fi_edit}
                        />
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
