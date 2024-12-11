import React from "react";
import { useState } from "react";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillFloppy2Fill,
  BsXLg,
  BsPlusCircle
} from "react-icons/bs";

import BudgetItemservices from "../../services/BudgetItem";
import BudgetItemEliminationModal from "./BudgetItemEliminationModal";
import BudgetItemCreationModal from "../BudgetItemCreationModal";

function TableBudgetItem({ budgetitems, onUpdateBudgetItem, alert }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreationModal, setShowCreationModal] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    code: "",
    name: "",
    is_income: "",
  });
  const [ parentId, setParentId ] = useState("");
  const [editID, setEditID] = useState("");
  function handleBudgetItemUpdate(updatedBudgetItem) {
    onUpdateBudgetItem(updatedBudgetItem);
  }

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }
  function handleEdit(budgetItem) {
    setEditID(budgetItem.id);
    setEditForm({
      id: budgetItem.id,
      code: budgetItem.code,
      name: budgetItem.name,
      is_income: budgetItem.is_income,
    });
  }

  function handleSave(e) {
    e.preventDefault();
    console.log(editForm.is_income);
    BudgetItemservices.update(editForm.id, editForm).then(
      (updateBudgetItem) => {
        handleBudgetItemUpdate(updateBudgetItem);
      }
    );
    setEditID("");
  }

  function handleCancel() {
    setEditID("");
  }

  function handleDelete(e) {
    e.preventDefault();
    BudgetItemservices.deleteObject(editForm.id).then(
      (updateBudgetItem) => {
        handleBudgetItemUpdate(updateBudgetItem);
        alert({color :   'success', message : 'El rubro se elimino de forma exitosa'})
      }
    );
    setEditID("");
    closeBudgetItemModal()
  }

  function openBudgetItemModal(budgetItem){
    setShowDeleteModal(true)
    setEditForm({
      id: budgetItem.id,
      code: budgetItem.code,
      name: budgetItem.name,
      is_income: budgetItem.is_income,
    });
  }
  
  function closeBudgetItemModal(){
    setShowDeleteModal(false)
  }

  function closeCreationModal(){
    setShowCreationModal(false)
  }

  function getParentId(budgetItem){
    setShowCreationModal(true)
    setParentId(budgetItem.id)
  }

  return (
    <div>
        <BudgetItemEliminationModal show={showDeleteModal} handleSubmit={handleDelete} handleClose={closeBudgetItemModal} budgetItem={editForm}/>
        <BudgetItemCreationModal show={showCreationModal} handleClose={closeCreationModal} title={'Crear Rubro: '} handleSubmit={onUpdateBudgetItem} alert={alert} parentId={parentId}/>
      <table className="table">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {budgetitems.map((budgetItem, index) =>
            budgetItem.id === editID ? (
              <tr>
                <td>
                  <input
                    type="number"
                    name="code"
                    className="form-control"
                    value={editForm.code}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={editForm.name}
                    onChange={handleChange}
                  />
                </td>
                <td>{budgetItem.is_income ? "Ingreso" : "Egreso"}</td>
                <td>
                  <button onClick={handleSave} className="actionButton">
                    <BsFillFloppy2Fill />
                  </button>
                  <button className="actionButton" onClick={handleCancel}>
                    <BsXLg />
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{budgetItem.code}</td>
                <td>{budgetItem.name}</td>
                <td>{budgetItem.is_income ? "Ingreso" : "Egreso"}</td>
                <td>
                  <button
                    className="actionButton"
                    onClick={() => {
                      handleEdit(budgetItem);
                    }}
                  >
                    <BsFillPencilFill />
                  </button>
                  <button
                    className="actionButton"
                    onClick={() => {
                        openBudgetItemModal(budgetItem);
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </td>
                <td>
                  <button
                    className="actionButto"
                    onClick={() => {
                      getParentId(budgetItem);
                    }}>
                    <BsPlusCircle/>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableBudgetItem;
