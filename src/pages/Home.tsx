import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { FaFilter } from "react-icons/fa";
import WarningToast from "../components/WarningToast";
import PrintJson from "../components/PrintJson";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [jsonDisplay, setJsonDisplay] = useState<any>();

  useEffect(() => {
    console.log(jsonDisplay);
  }, [jsonDisplay]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleToast = () => {
    setShowToast(!showToast);
    };

  return (
    <div className="home">
      <div className="w-1/5 text-white ml-8 mb-2 mt-8">
        <div className="flex my-2">
          <FaFilter className="my-auto" />
          <p className="my-auto mx-4 text-lg">Build Your Query</p>
        </div>
        <p className=" text-sm text-gray-300 my-2 w-2/3 text-start">Narrow your search further by adding some filters.</p>
        <div className="flex flex-row justify-between">
          <button
            className="bg-button-background rounded-md px-8 py-2 font-medium"
            onClick={toggleModal}
          >
            Build Query
          </button>
        </div>
      </div>
      {showModal && <Modal onClose={toggleModal} showToast={setShowToast} setJson={setJsonDisplay}/>}
      {showToast && <WarningToast onClose={toggleToast} message={"Work In Progress"} />}
      {jsonDisplay && <PrintJson json={jsonDisplay} />}
    </div>
  );
};

export default Home;
