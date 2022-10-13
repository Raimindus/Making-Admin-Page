import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import imagePlaceholder from "../assets/img/carComingSoon.png";
import { deleteCar } from "../redux/features/counter/carSlice";
import DialogBox from "./DialogBox";

const carCard = ({
  id,
  image,
  name,
  price,
  start_rent_at,
  finish_rent_at,
  updatedAt,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const HandleCloseModal = () => {
    setShowModal(false);
  };
  const handleConfirm = () => {
    dispatch(deleteCar(id));
  };
  const handleOnClickDelete = () => {
    setShowModal(true);
  };
  const handleonEdit = () => {};

  return (
    <Card
      className="mb-1"
      style={{
        width: "100%",
      }}
    >
      <Card.Img
        className="cardImg"
        alt="mobilImg"
        src={image || imagePlaceholder}
      />
      <Card.Body>
        <Card.Title>
          <div
            style={{
              fontFamily: "Arial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#000000",
              order: "0",
              alignSelf: "stretch",
              flexGrow: "0",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "Arial",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#000000",
              order: "1",
              alignSelf: "stretch",
              flexGrow: "0",
            }}
          >
            {price}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "#000000",
              order: "1",
              flexGrow: "1",
              fontFamily: "Arial",
            }}
          >
            {start_rent_at}-{finish_rent_at}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "#000000",
              order: "1",
              flexGrow: "1",
              fontFamily: "Arial",
            }}
          >
            {updatedAt}
          </div>
        </Card.Title>
      </Card.Body>
      <DialogBox
        onConfirm={handleConfirm}
        showModal={showModal}
        onCloseModal={HandleCloseModal}
      />
      <Button
        className="delEdit my-auto fw-bold"
        variant="outline-danger"
        onClick={handleOnClickDelete}
        style={{
          boxSizing: "borderbox",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 12px",
          gap: "10px",
          background: "#FFFFFF",
          border: "1px solid #FA2C5A",
          borderRadius: "2px",
          flex: "none",
          order: "0",
          flexgrow: "1",
        }}
      >
        Delete
      </Button>
      <Button
        className="delEdit my-auto fw-bold"
        variant="success"
        onClick={handleonEdit}
        style={{
          boxSizing: "borderbox",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 12px",
          gap: "12px",
          background: "#5CB85F",
          border: "1px solid #FA2C5A",
          borderRadius: "2px",
          flex: "none",
          order: "1",
          flexgrow: "1",
        }}
      >
        Edit
      </Button>
    </Card>
  );
};

export default carCard;
