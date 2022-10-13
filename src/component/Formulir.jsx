import { Field, Form, Formik } from "formik";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import vektor from "../assets/img/Vector.png";

function Formulir() {
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
          <Formik
            initialValues={{
              tipeMobil: "",
              harga: "",
              image: "",
              category: "",
              createAt: "",
              updateAt: "",
            }}
            onSubmit={async (values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <label htmlFor="tipeMobil">Nama/Tipe Mobil</label>
              <Field
                id="tipeMobil"
                name="tipeMobil"
                placeholder="Input Nama/Tipe Mobil"
              />
              <br />
              <label htmlFor="harga">Harga</label>
              <Field
                id="harga"
                name="harga"
                placeholder="Input Harga Sewa Mobil"
              />
              <br />
              <label htmlFor="image">Foto</label>
              <div>
                <Field
                  id="image"
                  name="image"
                  placeholder="Upload Foto Mobil"
                />
                <div>File size max 2MB</div>
              </div>
              <br />
              <label htmlFor="category">Kategori</label>
              <Field
                id="category"
                name="category"
                placeholder="Pilih Kategori Mobil"
              />
              <br />
              <label htmlFor="createAt">Created At</label>
              <Field id="createAt" name="createAt" placeholder="-" />
              <br />
              <label htmlFor="updateAt">Updated At</label>
              <Field id="updateAt" name="updateAt" placeholder="-" />
              <button>Cancel</button>
              <button type="submit">Save</button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulir;
