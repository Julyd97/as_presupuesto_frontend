import React from "react";
import { useState } from "react";
import { useTable } from "react-table";


export default function BudgetItemTable() {
  const [editRowId, setEditRowId] = useState(null);
  const handleEditClick = (rowId) => {
    setEditRowId(rowId);
  };

  const data = React.useMemo(
    () => [
        { code:1, nombre:'hola', tipo:'ingreso'} 
    ],
    []
)
const columns = React.useMemo(
  () => [
    { Header: "Codigo", accessor: "codigo" },
    { Header: "Nombre", accessor: "nombre" },
    { Header: "Tipo", accessor: "tipo" },
  ],
  []
);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {editRowId === row.id
                      ? console.log("hola")
                      : console.log("no")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
