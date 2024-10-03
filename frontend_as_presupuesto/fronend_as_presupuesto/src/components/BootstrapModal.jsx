import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BootstrapModal = ({ show, handleClose, title, children, footer }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapModal;
