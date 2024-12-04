import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BudgetItemEliminationModal = ({ show, handleClose, handleSubmit, title, budgetItem}) => {
  console.log(budgetItem)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Seguro desea eliminar el rubro # {budgetItem}</label>
          </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cerrar
                </Button>
                <Button type='submit' variant="warning">
                Eliminar
                </Button>
            </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default BudgetItemEliminationModal;
