import React from "react";

function BudgetItem({
  budgetitem,
  budgetitem: { id, code, name, is_income },
  captureEdit,
  changeEditState,
  isEditing,
  handleEdit,
  handleChange,
  editID,
}) {
  console.log(editID);
  return (
    <>
      {id === editID ? (
        <tr key={id}>
          <td>
            <input
              type="number"
              name="code"
              value={code}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="is_income"
              value={is_income}
              onChange={handleChange}
            />
          </td>
          <td>
            <button
            // onClick={() => {
            //   captureEdit(budgetitem);
            //   changeEditState(budgetitem);
            // }}
            >
              Guardar
            </button>
          </td>
        </tr>
      ) : (
        <tr key={id}>
          <td>{code}</td>
          <td>{name}</td>
          <td>{is_income ? "Ingreso" : "Egreso"}</td>
          <td>
            <button
              onClick={() => {
                handleEdit(id);
                // captureEdit(budgetitem);
                // changeEditState(budgetitem);
              }}
            >
              Editar
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
export default BudgetItem;
