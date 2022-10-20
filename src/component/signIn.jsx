import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import LoginImg from "../assets/img/loginImg.png";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid"),
  password: Yup.string().required("Password tidak valid"),
});

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState();

  return (
    <Container className="contSignIn">
      <Row>
        <Col md={8}>
          <img src={LoginImg} alt="gambarLogin" className="loginImg" />
        </Col>
        <Col md={4} className="colForm ps-5 pe-5">
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (value) => {
              try {
                const res = await axios.post(
                  "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",
                  value
                );

                localStorage.setItem("auth", JSON.stringify(res.data));

                navigate("/dashboard");
              } catch (e) {
                setError(true);
                console.error(e);
              }
            }}
          >
            {(formikProps) => (
              <Form className="my-auto">
                <FormGroup>
                  <div className="divlogo" />
                  <h3 className="pb-3">Welcome, Admin BCR</h3>
                  {error === true && (
                    <Alert variant="danger">
                      Masukkan username dan password yang benar. Perhatikan
                      penggunaan huruf kapital.
                    </Alert>
                  )}
                </FormGroup>
                <FormGroup>
                  <FormLabel for="exampleEmail">Email</FormLabel>
                  <FormControl
                    id="exampleEmail"
                    name="email"
                    placeholder="Contoh: johndee@gmail.com"
                    value={formikProps.values.email}
                    onChange={formikProps.handleChange}
                  />
                  {formikProps.errors.email && formikProps.touched.email && (
                    <small style={{ color: "red" }}>
                      {formikProps.errors.email}
                    </small>
                  )}
                </FormGroup>
                <FormGroup>
                  <FormLabel for="examplePassword">Password</FormLabel>
                  <FormControl
                    id="examplePassword"
                    name="password"
                    placeholder="6+ karakter"
                    value={formikProps.values.password}
                    onChange={formikProps.handleChange}
                  />
                  {formikProps.errors.password &&
                    formikProps.touched.password && (
                      <small style={{ color: "red" }}>
                        {formikProps.errors.password}
                      </small>
                    )}
                </FormGroup>
                <Button
                  type="submit"
                  className="bttn1"
                  style={{
                    width: "100%",
                    backgroundColor: "#0D28A6",
                    marginTop: "30px",
                  }}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
