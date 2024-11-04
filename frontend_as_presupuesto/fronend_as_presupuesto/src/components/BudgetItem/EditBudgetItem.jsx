import React from "react";
import BudgetItemservices from "../../services/BudgetItem";
import axios from "axios";

function EditBudgetItem({ editForm, handleBudgetItemUpdate, handleChange }) {
  let { id, code, name, is_income } = editForm;

  function handleEditForm(e) {
    e.preventDefault();
    console.log(editForm)
    BudgetItemservices.update(id, editForm)
    .then((updateBudgetItem) => {
        handleBudgetItemUpdate(updateBudgetItem);
    })
    
    // axios
    //   .patch(`http://localhost:8000/api/budget/budgetitems/${id}`)
    //   .then(function (response) {})
    //   .then((updatedBudgetItem) => {
    //     handleBudgetItemUpdate(updatedBudgetItem);
    //   });
  }

  return (
    <div>
      <h4>Edit Budget Item</h4>
      <form onSubmit={handleEditForm}>
        <input type="text" name="code" value={code} onChange={handleChange} />
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input
          type="text"
          name="is_income"
          value={is_income}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EditBudgetItem;