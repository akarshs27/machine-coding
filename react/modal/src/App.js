import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const Modal = ({ show, onClose, title, children }) => {
    return (
      <>
        <div className="backdrop" onClick={onClose} />
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="header-wrapper">
            <p>{title}</p>
            <button onClick={onClose}>X</button>
          </div>
          <div>{children}</div>
        </div>
      </>
    );
  };

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>
        {showModal ? "Hide modal" : "Show modal"}
      </button>
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title="Modal title"
        >
          <p>Modal data</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
