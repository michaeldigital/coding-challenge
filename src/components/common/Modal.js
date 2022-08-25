import BsModal from "react-bootstrap/Modal";

const Modal = ({ children, modalHeader, size, show, handleClose }) => {
  return (
    <BsModal data-testid="modal" show={show} onHide={handleClose} size={size}>
      <BsModal.Header closeButton>
        <BsModal.Title> {modalHeader}</BsModal.Title>
      </BsModal.Header>
      <BsModal.Body>{children}</BsModal.Body>
    </BsModal>
  );
};

export default Modal;
