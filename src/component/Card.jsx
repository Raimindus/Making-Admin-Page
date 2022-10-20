import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import imagePlaceholder from "../assets/img/carComingSoon.png";
import { deleteCar, getCars } from "../redux/features/counter/carSlice";
import css from "./css/Card.module.css";
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
  const handleConfirm = async () => {
    await dispatch(deleteCar(id));
    dispatch(getCars());
    toast.success("Data Berhasil Dihapus");
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
          <div className={css.cardName}>{name}</div>
          <div className={css.price}>{price}</div>
          <div className={css.startendrent}>
            {start_rent_at}-{finish_rent_at}
          </div>
          <div className={css.updatedat}>{updatedAt}</div>
        </Card.Title>
      </Card.Body>
      <DialogBox
        onConfirm={handleConfirm}
        showModal={showModal}
        onCloseModal={HandleCloseModal}
      />
      <Button
        className={` my-auto fw-bold ${css.deletebutton}`}
        variant="outline-danger"
        onClick={handleOnClickDelete}
      >
        Delete
      </Button>
      <Button
        className={`my-auto fw-bold ${css.editbutton}`}
        variant="success"
        onClick={handleonEdit}
      >
        Edit
      </Button>
    </Card>
  );
};

export default carCard;
