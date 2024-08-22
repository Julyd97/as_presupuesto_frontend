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
      <button onClick={openModal} className="button">Open Modal</button>
      <BootstrapModal show={showModal} handleClose={closeModal}>
        <p>This is the content inside the modal.</p>
      </BootstrapModal>
      <LogoutButton />
      <IndexTable />
    </>
  );
};

export default Dashboard;
