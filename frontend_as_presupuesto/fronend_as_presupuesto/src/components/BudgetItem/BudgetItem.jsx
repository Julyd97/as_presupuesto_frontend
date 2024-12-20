import React from "react";

import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillFloppy2Fill,
  BsXLg,
  BsPlusCircle,
} from "react-icons/bs";

function BudgetItem({
  budgetitem,
  editForm,
  handleEdit,
  handleChange,
  handleCancel,
  handleSave,
  editID,
  openBudgetItemModal,
  getParentId,
  level
}) {
  const space = `${level ? 20 + 15 * level : 8}px`;
  return (
    <>
      {budgetitem.id === editID ? (
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
          <td>{budgetitem.is_income ? "Ingreso" : "Egreso"}</td>
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
        <tr>
          <td style={{ paddingLeft: space }}>{budgetitem.code}</td>
          <td>{budgetitem.name}</td>
          <td>{budgetitem.is_income ? "Ingreso" : "Egreso"}</td>
          <td>
            <button
              className="actionButton"
              onClick={() => {
                handleEdit(budgetitem);
              }}
            >
              <BsFillPencilFill />
            </button>
            <button
              className="actionButton"
              onClick={() => {
                openBudgetItemModal(budgetitem);
              }}
            >
              <BsFillTrashFill />
            </button>
          </td>
          <td>
            <button
              className="actionButto"
              onClick={() => {
                getParentId(budgetitem);
              }}
            >
              <BsPlusCircle />
            </button>
          </td>
        </tr>
      )}
      { budgetitem.children?.map((child) =>{
        return(
          <BudgetItem key={child.id} budgetitem={child} editForm={editForm} handleEdit={handleEdit} openBudgetItemModal={openBudgetItemModal} editID={editID} handleSave={handleSave} handleChange={handleChange} handleCancel={handleCancel} getParentId={getParentId} level={level +1} />
        )
      })

      }
    </>
  );
}
export default BudgetItem;
