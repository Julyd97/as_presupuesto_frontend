import React from "react";
import { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import BootstrapModal from "../components/BootstrapModal";
import IndexTable from "../components/IndexTable";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log(showModal)
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <h1>This is the dashboard</h1>
      <button onClick={openModal} className="button">Crear fuente</button>
      <BootstrapModal show={showModal} handleClose={closeModal} title={'Crear fuente:'}>
      <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Codigo:</label>
            <input type="text" class="form-control" id="source-code" />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="source-name" />
          </div>
        </form>
      </BootstrapModal>
      <LogoutButton />
      <IndexTable />
    </>
  );
};

export default Dashboard;
