import dayjs from "dayjs";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import imagePlaceholder from "../assets/img/carComingSoon.png";
import { deleteCar, getCars } from "../redux/features/counter/carSlice";
import css from "./css/Card.module.css";
import DialogBox from "./DialogBox";

const carCard = ({ id, image, name, category, price, updatedAt }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
  const handleonEdit = () => {
    navigate(`/editcar/${id}`)
  };

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
          <div className={css.price}>Rp. {price} / hari</div>
          <div className={css.cardName}>{category} </div>
          <div className={css.updatedat}>
            {dayjs(updatedAt).format("D MMM YYYY, HH:mm")}
          </div>
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
