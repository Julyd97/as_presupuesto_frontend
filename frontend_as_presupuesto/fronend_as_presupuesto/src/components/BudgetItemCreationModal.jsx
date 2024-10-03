import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const BudgetItemCreationModal = ({ show, handleClose, handleSubmit, title, code, name, setname, setcode}) => {
  const [ type, setType] = useState('ingreso');

  const onOptionChange = (e) =>{
    setType(e.target.value)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Codigo:</label>
            <input required type="number" value={code} class="form-control" onChange={({target}) => setcode(target.value)} id="source-code"/>
          </div>
          <div class="mb-3">
            <label for="message-text" className="col-form-label">Nombre:</label>
            <input required type="text" value={name} className="form-control" onChange={({target}) => setname(target.value)}  id="source-name" />
          </div>
          <div className='row'>
            <div className="col-6">
                <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type="radio"
                      value='ingreso'
                      id='radioingreso'
                      checked = { type === 'ingreso'}
                      onChange={onOptionChange}
                      />
                    <label htmlFor="radioingreso">Ingreso</label>
                </div>
                <div className='form-check'>
                    <input 
                      className='form-check-input' 
                      type="radio"
                      value='egreso' 
                      id='radioegreso'
                      checked = { type === 'egreso'}
                      onChange={onOptionChange}
                    />
                    <label htmlFor="radioegreso">Egreso</label>
                </div>
            </div>
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

export default BudgetItemCreationModal;
