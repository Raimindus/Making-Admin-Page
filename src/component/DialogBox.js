import "../App.css";

function DialogBox(props) {
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
  function closeModalHandler() {
    props.onCloseModal();
  }
  console.log(props.showModal);
  return (
    <div>
      {props.showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      ;{props.showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default DialogBox;
