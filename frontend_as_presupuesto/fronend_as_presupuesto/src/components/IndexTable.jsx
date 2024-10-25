import React, { useState } from 'react';
import { useTable } from 'react-table';

// Sample data for the table
const initialData = [
  { id: 1, name: 'John', age: 28, job: 'Developer' },
  { id: 2, name: 'Jane', age: 32, job: 'Designer' },
  { id: 3, name: 'Bob', age: 36, job: 'Manager' },
];

const IndexTable = () => {
  const [data, setData] = useState(initialData);

  // Function to update a specific cell value
  const updateMyData = (rowIndex, columnId, value) => {
    setData((oldData) =>
      oldData.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...oldData[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // Define columns
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value, row, column }) => (
          <input
            value={value}
            onChange={(e) =>
              updateMyData(row.index, column.id, e.target.value)
            }
          />
        ),
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: ({ value, row, column }) => (
          <input
            type="number"
            value={value}
            onChange={(e) =>
              updateMyData(row.index, column.id, e.target.value)
            }
          />
        ),
      },
      {
        Header: 'Job',
        accessor: 'job',
        Cell: ({ value, row, column }) => (
          <input
            value={value}
            onChange={(e) =>
              updateMyData(row.index, column.id, e.target.value)
            }
          />
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} style={{ width: '100%', border: '1px solid black' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={{ border: '1px solid black', padding: '10px' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={idx}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{ border: '1px solid black', padding: '10px' }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IndexTable;