const Modal = ({ show, onClose, title, children }) => {
  return (
    <>
      <div className="backdrop" />
      <div className="modal-wrapper">
        <div className="header-wrapper">
          <p>{title}</p>
          <button>X</button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
