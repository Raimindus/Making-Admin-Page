import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import {
  Container,
  Form as FormBootstrap,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import {
  getDetailCars,
  postCar,
  putCar,
} from "../redux/features/counter/carSlice";
import css from "./css/Formulir.module.css";

const validationSchema = Yup.object().shape({
  tipeMobil: Yup.string().required("Harus diisi"),
  harga: Yup.number().required("Harus diisi"),
  image: Yup.mixed().nullable(),
  category: Yup.string().required("Pilih salah satu"),
});

function Formulir({ id }) {
  const detailCar = useSelector((state) => state.carSlice.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    tipeMobil: detailCar.name || "",
    harga: detailCar.price || "",
    image: detailCar.image || "",
    status: detailCar.status || false,
    category: detailCar.category || "",
    createAt: detailCar.createAt || "",
    updateAt: detailCar.updateAt || "",
  };
  console.log(initialValues);
  useEffect(() => {
    dispatch(getDetailCars(id));
    console.log(id);
  }, []);
  const cancelHandler = () => {
    navigate(`/car`);
  };

  const submitHandler = (data) => {
    if (!id) {
      dispatch(postCar(data));
    } else {
      dispatch(putCar({ id, payload: data }));
    }
  };

  return (
    <Container className={css.row1}>
      <Row>
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={async (values) => {
            const formData = new FormData();
            formData.append("name", values.tipeMobil);
            formData.append("category", values.category);
            formData.append("price", values.harga);
            formData.append("status", values.status);
            formData.append("image", values.image);
            submitHandler(formData);
            navigate(`/car`);
            toast.success("Data Berhasil Disimpan");
          }}
        >
          {(formikProps) => (
            <Form>
              <div className={css.formContainer}>
                <FormGroup className={css.group}>
                  <FormLabel for="tipeMobil">Nama/Tipe Mobil*</FormLabel>
                  <FormControl
                    className={css.field1}
                    id="tipeMobil"
                    name="tipeMobil"
                    placeholder="Input Nama/Tipe Mobil"
                    value={formikProps.values.tipeMobil}
                    onChange={formikProps.handleChange}
                    htmlFor="tipeMobil"
                  />
                  {formikProps.errors.tipeMobil &&
                    formikProps.touched.tipeMobil && (
                      <small style={{ color: "red" }}>
                        {formikProps.errors.tipeMobil}
                      </small>
                    )}
                </FormGroup>
                <FormGroup className={css.group}>
                  <FormLabel for="harga">Harga*</FormLabel>
                  <FormControl
                    className={css.field2}
                    id="harga"
                    name="harga"
                    placeholder="Input Harga Sewa Mobil"
                    value={formikProps.values.harga}
                    onChange={formikProps.handleChange}
                    htmlFor="harga"
                  />
                  {formikProps.errors.harga && formikProps.touched.harga && (
                    <small style={{ color: "red" }}>
                      {formikProps.errors.harga}
                    </small>
                  )}
                </FormGroup>
                <FormGroup className={css.group}>
                  <FormLabel for="image">Foto*</FormLabel>
                  <div>
                    <FormBootstrap.Control
                      className={css.field3}
                      id="image"
                      name="image"
                      placeholder="Upload Foto Mobil"
                      onChange={(values) => {
                        console.log(values.target.files[0]);
                        formikProps.setFieldValue(
                          "image",
                          values.target.files[0]
                        );
                      }}
                      htmlFor="image"
                      type="file"
                    />
                    <div className={css.catatan}>File size max 2MB</div>
                  </div>
                  {formikProps.errors.image && formikProps.touched.image && (
                    <small style={{ color: "red" }}>
                      {formikProps.errors.image}
                    </small>
                  )}
                </FormGroup>

                <FormGroup className={css.group}>
                  <FormLabel for="category">Kategori*</FormLabel>
                  <FormSelect
                    className={css.field5}
                    id="category"
                    name="category"
                    placeholder="Pilih Kategori Mobil"
                    value={formikProps.values.category}
                    onChange={(values) => {
                      console.log(values.target.value);
                      formikProps.setFieldValue(
                        "category",
                        values.target.value
                      );
                    }}
                    htmlFor="category"
                  >
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                  </FormSelect>
                  {formikProps.errors.category &&
                    formikProps.touched.category && (
                      <small style={{ color: "red" }}>
                        {formikProps.errors.category}
                      </small>
                    )}
                </FormGroup>
                <FormGroup className={css.group}>
                  <FormLabel for="createAt">Created At</FormLabel>
                  <span>{formikProps.values.createdAt || "-"}</span>
                  {formikProps.errors.createAt &&
                    formikProps.touched.createAt && (
                      <small style={{ color: "red" }}>
                        {formikProps.errors.createAt}
                      </small>
                    )}
                </FormGroup>
                <FormGroup className={css.group}>
                  <FormLabel for="updateAt">Update At</FormLabel>
                  <span>{formikProps.values.updateAt || "-"}</span>
                  {formikProps.errors.updateAt &&
                    formikProps.touched.updateAt && (
                      <small style={{ color: "red" }}>
                        {formikProps.errors.updateAt}
                      </small>
                    )}
                </FormGroup>
              </div>
              <div className={css.containerContainer}>
                <div className={css.buttonContainer}>
                  <button className={css.button1} onClick={cancelHandler}>
                    Cancel
                  </button>
                  <button className={css.button2} type="submit">
                    Save
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
  );
}

export default Formulir;
