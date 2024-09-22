import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BootstrapModal = ({ show, handleClose, handleSubmit, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button type='submit' variant="primary" onClick={handleSubmit} >
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapModal;
