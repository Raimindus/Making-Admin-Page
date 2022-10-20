import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import gambar1 from "../assets/img/Vector.png";
import { getId } from "../services/cardApi";
import Card from "./Card";
import css from "./css/Cars.module.css";

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
    <Container id="dashboard1">
      <Row className="d-flex">
        <Col>
          <Col className="line1 d-flex gap-3 ">
            <p className="padm ">Cars</p>
            <Image src={gambar1} className="vektoradm" />
            <p className="padm2">List Car</p>
          </Col>
          <Col className="gridContainer">
            <Col className={css.container1}>
              <h1 className="hdr1">List Car</h1>
              <button className={css.buttonadd}>+ Add New Car</button>
            </Col>
            <Col className={css.container2}>
              <button className={css.buttonall}>All</button>
              <button className={css.buttoncat1}>2-4 people</button>
              <button className={css.buttoncat2}>4-6 people</button>
              <button className={css.buttoncat3}>6-8 people</button>
            </Col>
          </Col>
          <Row>
            {detail.slice(0, 20).map((car) => (
              <Col
                className="d-flex justify-content-between fw-bold mt-3 gap-3"
                md={4}
              >
                <Card
                  id={car.id}
                  name={car.name}
                  image={car.image}
                  price={car.price}
                  start_rent_at={car.start_rent_at}
                  finish_rent_at={car.finish_rent_at}
                  updatedAt={car.updatedAt}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Cars;
