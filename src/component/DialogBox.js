import "../App.css";

import DialogImg from "../assets/img/img-BeepBeep.png";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />;
}

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <img src={DialogImg} alt="gb-1" />
      <h2>Menghapus Data Mobil</h2>
      <p>
        Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
        menghapus?
      </p>
      <button className="button1 button1--alt" onClick={confirmHandler}>
        Ya
      </button>
      <button className="button1" onClick={cancelHandler}>
        Tidak
      </button>
    </div>
  );
}

function DialogBox({ onCloseModal, showModal, onConfirm }) {
  function closeModalHandler() {
    onConfirm();
    onCloseModal();
  }
  console.log(showModal);
  return (
    <div>
      {showModal && (
        <Modal onCancel={closeModalHandler} handleConfirm={closeModalHandler} />
      )}
      ;{showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default DialogBox;
