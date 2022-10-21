import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import gambar1 from "../assets/img/Vector.png";
import { getCars } from "../redux/features/counter/carSlice";
import Card from "./Card";
import css from "./css/Cars.module.css";

function Cars() {
  const [category, setCategory] = useState();

  const selectCars = (state) => state.carSlice.allCars.cars || [];
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = async () => {
      dispatch(getCars(category));
    };
    getDatas();
  }, [category])

  return (
    <Container id="dashboard1">
      <Row className="d-flex">
        <Col>
          <Col className="line1 d-flex gap-3 ">
            <p className="padm ">Cars</p>
            <Image src={gambar1} className="vektoradm" />
            <p className="padm2">List Car</p>
          </Col>
          <Col>
            <div className={css.container1}>
              <h1 className={css.hdr1}>List Car</h1>
              <button className={css.buttonadd}>+ Add New Car</button>
            </div>
            <div className={css.container2}>
              <button onClick={() => (setCategory())} className={css.buttonall}>All</button>
              <button onClick={() => (setCategory('small'))} className={css.buttoncat1}>2-4 people</button>
              <button onClick={() => (setCategory('medium'))} className={css.buttoncat2}>4-6 people</button>
              <button onClick={() => (setCategory('large'))} className={css.buttoncat3}>6-8 people</button>
            </div>
          </Col>
          <Row>
            {cars.map((car) => (
              <Col
                key={car.id}
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
                  category={car.category}
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
