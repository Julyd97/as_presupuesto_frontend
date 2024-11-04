import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import BudgetItemCreationModal from "../components/BudgetItemCreationModal";
import IndexTable from "../components/IndexTable";
import TableBudgetItem from "../components/BudgetItem/TableBudgetItem";
import Sourceservices from "../services/Source";
import AlertMessage from "../components/AlertMessage";
import SourceCreationModal from "../components/SourceCreationModal";
import BudgetItemTable from "../components/BudgetItemTable";

const Dashboard = () => {
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showBudgetItemModal, setShowBudgetItemModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [newCodeSource, setNewCodeSource] = useState('');
  const [newNameSource, setNewNameSource] = useState('');
  const [alerValues, setAlertValues] = useState({
    color: '',
    message: '',
  })
  const [ budgetItems, setBudgetItem ] = useState([]);

  useEffect (() => {
    updateTableBudgetItems()
  },[])
  const updateTableBudgetItems  = () => {
    axios.get("http://localhost:8000/api/budget/budgetitems/")
      .then(function(response){
        console.log(response.data)
        setBudgetItem(response.data)
      })
  }
  const onUpdateBudgetItem = (updatedBudgetItem) => {
    const updated =  budgetItems.map(budgetItem => {
      if (budgetItem.id === updatedBudgetItem.id) {
        return updatedBudgetItem;
      } else { return budgetItem}
      }
    )
    setBudgetItem(updated)
  }
  const [ rows, setRows ] = useState([{
    page: "Home",
    description: "This is the main page of the website",
    status: "live",
  },
  {
    page: "About Us",
    description: "This page has details about the company",
    status: "draft",
  },
  {
    page: "Pricing",
    description: "Prices for different subscriptions",
    status: "error",
  },
]);
  const [ rowToEdit, setRowToEdit ] = useState(null);

  const openSourceModal = () => {
    setShowSourceModal(true);
  };
  const openBudgetItemModal = () => {
    setShowBudgetItemModal(true);
  };

  const closeSourceModal = () => {
    setShowSourceModal(false);
  };

  const closeBudgetItemModal = () => {
    setShowBudgetItemModal(false);
  };
  const openAlert  = ({color, message}) => {
    setShowAlert(true);
    setAlertValues({
      color: color,
      message: message
    })
  }

  const closeAlert  = () => {
    setShowAlert(false)
  }
  const submitModal = (event) => {
    event.preventDefault()
    Sourceservices.create({
      "code" : newCodeSource,
      "name" : newNameSource
    }).then(response => {
      console.log(response)
      openAlert({color :   'success', message : 'La cuenta se creo de forma exitosa'})
    }).catch(error => {
      console.log(error.response.data )
      openAlert({color : 'danger', message : 'Error al crear la cuenta'})
    })
  }
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));  
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setShowBudgetItemModal(true);
  }

  // const handleSubmitBudgetItem = (newRow) => {
  //   rowToEdit === null
  //     ? setRows([...rows, newRow])
  //     : setRows(
  //         rows.map((currRow, idx) => {
  //           if (idx !== rowToEdit) return currRow;

  //           return newRow;
  //         })
  //       );
  // };

  const handleSubmitBudgetItem = () =>{
    setBudgetItem([''])
  }
  return (
    <>
      <AlertMessage show={showAlert} handleClose={closeAlert} message={alerValues.message} color={alerValues.color}/>
      <h1>This is the dashboard</h1>
      <button onClick={openSourceModal} className="button">Crear fuente</button>
      <button onClick={openBudgetItemModal} className="button">Crear Rubro</button>
      <SourceCreationModal show={showSourceModal} handleClose={closeSourceModal} handleSubmit={submitModal} title={'Crear fuente:'} setname={setNewNameSource} setcode={setNewCodeSource}/>
      <BudgetItemCreationModal show={showBudgetItemModal} handleClose={closeBudgetItemModal} title={'Crear Rubro:'} handleSubmit={updateTableBudgetItems}/>
      <LogoutButton />
      <BudgetItemTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <TableBudgetItem budgetitems={budgetItems} onUpdateBudgetItem={onUpdateBudgetItem}/>
    </>
  );
};

export default Dashboard;
