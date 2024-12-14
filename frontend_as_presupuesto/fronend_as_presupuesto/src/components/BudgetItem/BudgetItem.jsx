import React from "react";

function BudgetItem({
  budgetitem,
  editForm,
  handleEdit,
  handleChange,
  handleCancel,
  editID,
}) {
  console.log(editID);
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
        <tr key={index}>
          <td>{budgetitem.code}</td>
          <td>{budgetitem.name}</td>
          <td>{is_income ? "Ingreso" : "Egreso"}</td>
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
    </>
  );
}
export default BudgetItem;
