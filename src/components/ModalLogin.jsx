import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import LoginForm from "./LoginForm"

const ModalLogin = () => {
  const [show, setShow] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal>
  );
};

export default ModalLogin;
