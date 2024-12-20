import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import BudgetItemservices from '../services/BudgetItem';

const BudgetItemCreationModal = ({ show, handleClose, handleSubmit, title, alert, parentId}) => {
  const [ formState, setFormState ] = useState(
    {
      code: '',
      name: '',
      is_income: '',
    }
  );
  const [ type, setType ] = useState(true);
  const [ budgetItemCode, setBudgetItemCode] = useState('')
  const [ budgetItemName, setBudgetItemName ] = useState('')

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const onOptionChange = (e) =>{
    setType(e.target.value)
  }
  const submitModal = (event) => {
    event.preventDefault();
    BudgetItemservices.create({
      "code" : budgetItemCode,
      "name" : budgetItemName,
      "is_income" : type,
      "parent" : parentId
    }).then(response =>{
      alert({color :   'success', message : response.message})
      handleSubmit()
      setBudgetItemCode('')
      setBudgetItemName('')
      setType(false)
    }).catch(error => {
      alert({color :   'danger', message : error.message})
    })
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={submitModal}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Codigo:</label>
            <input required type="number" value={budgetItemCode} className="form-control" onChange={({target}) => setBudgetItemCode(target.value)} id="budgetitem-code"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Nombre:</label>
            <input required type="text" value={budgetItemName} className="form-control" onChange={({target}) => setBudgetItemName(target.value)}  id="bugetitem-name" />
          </div>
          { parentId === null ? 
          (<div className='row'>
            <div className="col-6">
              <label className="col-form-label">Tipo:</label>
                <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type="radio"
                      value='true'
                      id='radioingreso'
                      checked = { type === 'true'}
                      onChange={onOptionChange}
                      />
                    <label htmlFor="radioingreso">Ingreso</label>
                </div>
                <div className='form-check'>
                    <input 
                      className='form-check-input' 
                      type="radio"
                      value='false' 
                      id='radioegreso'
                      checked = { type === 'false'}
                      onChange={onOptionChange}
                    />
                    <label htmlFor="radioegreso">Egreso</label>
                </div>
            </div>
          </div>)
          :(<></>)
}
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
