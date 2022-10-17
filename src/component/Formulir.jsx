import { Field, Form, Formik } from "formik";
import React from "react";
import { Container, Row } from "react-bootstrap";

function CustomInputComponent(props) {
  return (
    <input
      className="my-custom-input"
      type="file"
      alt="customInputImg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

function Formulir() {
  return (
    <Container fluid>
      <Row
        className="d-flex"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flexstart",
          padding: "16px",
          gap: "10px",
          position: "absolute",
          width: "1100px",
          height: "318px",
          left: "315px",
          top: "193px",
          background: "#FFFFFF",
          borderRadius: "2px",
        }}
      >
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
            <label
              htmlFor="tipeMobil"
              style={{
                width: "147px",
                height: "18px",
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            >
              Nama/Tipe Mobil*
            </label>
            <Field
              id="tipeMobil"
              name="tipeMobil"
              placeholder="Input Nama/Tipe Mobil"
              style={{
                width: "339px",
                gap: "8px",
                boxSizing: "border-box",
                alignItems: "center",
                padding: "9px 12px",
                height: "36px",
                background: "#FFFFFF",
                border: "1px solid #D0D0D0",
                borderRadius: "2px",
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flex: "none",
                order: "1",
                flexGrow: "01",
              }}
            />
            <label
              htmlFor="harga"
              style={{
                width: "147px",
                height: "18px",
                fontFamily: "Arial",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            >
              Harga*
            </label>
            <Field
              id="harga"
              name="harga"
              placeholder="Input Harga Sewa Mobil"
              style={{
                width: "339px",
                gap: "8px",
                boxSizing: "border-box",
                alignItems: "center",
                padding: "9px 12px",
                height: "36px",
                background: "#FFFFFF",
                border: "1px solid #D0D0D0",
                borderRadius: "2px",
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flex: "none",
                order: "1",
                flexGrow: "1",
              }}
            />
            <label
              htmlFor="image"
              style={{
                width: "147px",
                height: "18px",
                fontFamily: "Rubik",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                fontStyle: "normal",
                fontWeight: "300",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            >
              Foto*
            </label>
            <div>
              <Field
                id="image"
                name="image"
                placeholder="Upload Foto Mobil"
                as={CustomInputComponent}
                style={{
                  boxSizing: "borderbox",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "9px 12px",
                  gap: "8px",
                  width: "339px",
                  height: "36px",
                  background: "#FFFFFF",
                  border: "1px solid #D0D0D0",
                  borderRadius: "2px",
                  flex: "none",
                  order: "1",
                  alignSelf: "stretch",
                  flexgrow: "1",
                }}
              />
              <div
                style={{
                  width: "339px",
                  height: "14px",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "10px",
                  lineHeight: "14px",
                  color: "#8A8A8A",
                  flex: "none",
                  order: "1",
                  alignSelf: "stretch",
                  flexGrow: "1",
                }}
              >
                File size max 2MB
              </div>
            </div>
            <label
              htmlFor="category"
              style={{
                width: "147px",
                height: "18px",
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            >
              Kategori*
            </label>
            <Field
              id="category"
              name="category"
              placeholder="Pilih Kategori Mobil"
              style={{
                boxSizing: "borderbox",
                alignItems: "center",
                padding: "9px 12px",
                gap: "8px",
                width: "339px",
                height: "36px",
                background: "#FFFFFF",
                border: "1px solid #D0D0D0",
                borderRadius: "2px",
                flex: "none",
                order: "1",
                alignSelf: "stretch",
                flexGrow: "1",
              }}
            />
            <label
              htmlFor="createAt"
              style={{
                width: "147px",
                height: "18px",
                fontFamily: "Arial",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            >
              Created At
            </label>
            <Field
              id="createAt"
              name="createAt"
              placeholder="-"
              style={{
                width: "339px",
                height: "18px",
                fontFamily: "Arial",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "1",
                flexGrow: "1",
              }}
            />
            <label
              htmlFor="updateAt"
              style={{
                width: "147px",
                height: "18px",
                fontFamily: "Arial",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "0",
                flexGrow: "0",
              }}
            >
              Updated At
            </label>
            <Field
              id="updateAt"
              name="updateAt"
              placeholder="-"
              style={{
                width: "339px",
                height: "18px",
                fontFamily: "Arial",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#3C3C3C",
                flex: "none",
                order: "1",
                flexGrow: "1",
              }}
            />
          </Form>
        </Formik>
      </Row>
    </Container>
  );
}

export default Formulir;
