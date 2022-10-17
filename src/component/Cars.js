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
    <Container fluid id="dashboard1">
      <Row className="d-flex">
        <Col>
          <Col className="line1 d-flex gap-3 ">
            <p className="padm ">Cars</p>
            <Image src={vektor} className="vektoradm" />
            <p className="padm2">List Car</p>
          </Col>
          <Row>
            <Col className="d-flex justify-content-between fw-bold mt-3 gap-3">
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
        </Col>
      </Row>
    </Container>
  );
}
export default Cars;
