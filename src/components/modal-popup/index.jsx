import { useState } from "react"
import Modal from "./modal";

export default function ModalPopup() {
  const [showModal, setShowModal] = useState(false);
  function onClose() {
    setShowModal(false)
  }
  console.log(showModal);
  return (
    <div>
      <button onClick={()=>setShowModal(!showModal)} >Open Modal Popup</button>
      {showModal && <Modal id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>} /> }
    </div>
  );
}
