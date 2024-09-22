import React from "react";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import BootstrapModal from "../components/BootstrapModal";
import IndexTable from "../components/IndexTable";
import Sourceservices from "../services/Source";
import AlertMessage from "../components/AlertMessage";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [newCodeSource, setNewCodeSource] = useState('');
  const [newNameSource, setNewNameSource] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const submitModal = (event) => {
    console.log('code', newCodeSource)
    console.log('name', newNameSource)

    Sourceservices.create({
      "code" : newCodeSource,
      "name" : newNameSource
    }).then(response => {
      console.log(response)
      alert(response)
    })
    setShowAlert(true);
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      submitModal()
    }
  }
  return (
    <>
      <AlertMessage show={showAlert}/>
      <h1>This is the dashboard</h1>
      <button onClick={openModal} className="button">Crear fuente</button>
      <BootstrapModal show={showModal} handleClose={closeModal} handleSubmit={submitModal} title={'Crear fuente:'}>
      <form onSubmit={submitModal}>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Codigo:</label>
            <input required type="text" value={newCodeSource} class="form-control" onChange={({target}) => setNewCodeSource(target.value)} id="source-code" onKeyDown={handleKeyPress}/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Nombre:</label>
            <input required type="text" value={newNameSource} class="form-control" onChange={({target}) => setNewNameSource(target.value)}  id="source-name" onKeyDown={handleKeyPress} />
          </div>
      </form>
      </BootstrapModal>
      <LogoutButton />
      <IndexTable />
    </>
  );
};

export default Dashboard;
