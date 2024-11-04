import React from "react";
import { useState } from "react";
import BudgetItem from  "./BudgetItem";
import EditBudgetItem  from "./EditBudgetItem";

function TableBudgetItem({budgetitems, onUpdateBudgetItem}) {
    const [ isEditing, setIsEditing] = useState(false)
    const [ editForm, setEditForm ] = useState({
        code:'',
        name:'',
        is_income:''
    })
    function handleBudgetItemUpdate(updatedBudgetItem){
        setIsEditing(false)
        onUpdateBudgetItem(updatedBudgetItem)
    }

    function handleChange(e){
        setEditForm({
            ...editForm,
            [e.target.name] :  e.target.value
        })
        }
    function changeEditState(BudgetItem){
        if(BudgetItem.id === editForm.id){
            setIsEditing( isEditing => !isEditing)
        } else if( isEditing  === false){
            setIsEditing( isEditing => !isEditing)
        }
    }
    function captureEdit(clickedBudgetItem){
        let filtered = budgetitems.filter( budgetItem => budgetItem.id === clickedBudgetItem.id)
        setEditForm(filtered[0])
    }
    
    return(
        <div>
            { isEditing ? 
                (<EditBudgetItem
                    editForm={editForm}
                    handleChange={handleChange}
                    handleBudgetItemUpdate={handleBudgetItemUpdate}
                    
                />) : null}
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                { budgetitems.map(budgetitem => 
                    <BudgetItem 
                        key={budgetitem.id}
                        budgetitem={budgetitem}
                        captureEdit={captureEdit}
                        changeEditState={changeEditState} 
                    />)}
            </tbody>
        </table>
        </div>
    )
}

export default TableBudgetItem