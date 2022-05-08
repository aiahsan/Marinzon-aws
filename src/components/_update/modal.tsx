import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IModal } from "../../interfaces";
export default ({ show, setShow, title, children,size }: IModal) => {
  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      //@ts-ignore
      size={size?size:undefined}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{<>{children}</>}</Modal.Body>
    </Modal>
  );
};
