import React from "react";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import BudgetItemCreationModal from "../components/BudgetItemCreationModal";
import IndexTable from "../components/IndexTable";
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
  const [ rows, setRows ] = useState([{}]);
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
  const handleDeleteRow = (idx) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));  
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setShowBudgetItemModal(true);
  }
  return (
    <>
      <AlertMessage show={showAlert} handleClose={closeAlert} message={alerValues.message} color={alerValues.color}/>
      <h1>This is the dashboard</h1>
      <button onClick={openSourceModal} className="button">Crear fuente</button>
      <button onClick={openBudgetItemModal} className="button">Crear Rubro</button>
      <SourceCreationModal show={showSourceModal} handleClose={closeSourceModal} handleSubmit={submitModal} title={'Crear fuente:'} setname={setNewNameSource} setcode={setNewCodeSource}/>
      <BudgetItemCreationModal show={showBudgetItemModal} handleClose={closeBudgetItemModal} title={'Crear Rubro:'}/>
      <LogoutButton />
      <BudgetItemTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
    </>
  );
};

export default Dashboard;
