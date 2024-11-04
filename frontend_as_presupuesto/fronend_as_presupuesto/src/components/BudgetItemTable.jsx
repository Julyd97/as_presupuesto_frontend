import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";


const BudgetItemTable = ({rows, deleteRow, editRow}) => {
  return (
    <table className="table">
      <thead>
          <tr>
            <th>Codigo</th>
            <th className="expand">Nombre</th>
            <th>Tipo</th>
          </tr>
      </thead>
      <tbody>
        {rows.map((row,idx) => {
          const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1); 
          return (
            <tr key={idx}>
                <td>{row.page}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BudgetItemTable