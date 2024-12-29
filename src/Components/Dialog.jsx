import React, { useRef } from "react";
import Button from "../UI/Button";
import FormSelection from "./FormSelection";
import "./DialogWithUseRef.css"; 

const DialogWithUseRef = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="dialog">
      <Button className="user-button" onSubmit={openDialog}>Get Started</Button>
      <dialog ref={dialogRef} className="dialog-box" aria-modal="true">
        <div className="dialog-content">
          <FormSelection className="form-selection" />
          <Button className="user-button" onSubmit={closeDialog}>Close</Button>
        </div>
      </dialog>
    </div>
  );
};

export default DialogWithUseRef;
