import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SourceCreationModal = ({ show, handleClose, handleSubmit, title, code, name, setname, setcode}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Codigo:</label>
            <input required type="number" value={code} className="form-control" onChange={({target}) => setcode(target.value)} id="source-code"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Nombre:</label>
            <input required type="text" value={name} className="form-control" onChange={({target}) => setname(target.value)}  id="source-name" />
          </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cerrar
                </Button>
                <Button type='submit' variant="primary">
                Crear
                </Button>
            </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SourceCreationModal;
