import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import vektor from "../assets/img/Vector.png";
import { getId } from "../services/cardApi";
import Card from "./Card";

function Cars() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      const response = await getId();
      const carData = await response.data;
      setDetail(carData);
    };
    getDatas();
  }, []);

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
          <Col className="d-flex justify-content-between fw-bold mt-3 gap-3" />
          {detail.slice(0, 20).map((car) => (
            <Card
              id={car.id}
              name={car.name}
              image={car.image}
              price={car.price}
              start_rent_at={car.start_rent_at}
              finish_rent_at={car.finish_rent_at}
              updatedAt={car.updatedAt}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Cars;
