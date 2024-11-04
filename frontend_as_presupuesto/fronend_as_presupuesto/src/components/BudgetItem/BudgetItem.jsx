import React from "react";

function BudgetItem({budgetitem, budgetitem : {id, code, name, is_income}, captureEdit, changeEditState}){
    return(
        <tr key={id}>
            <td>{code}</td>
            <td>{name}</td>
            <td >{is_income ? 'Ingreso' : 'Egreso'}</td>
            <td><button onClick={() => {
                captureEdit(budgetitem);
                changeEditState(budgetitem);
            }}>Editar</button></td>
        </tr>
    )
}
export default BudgetItem