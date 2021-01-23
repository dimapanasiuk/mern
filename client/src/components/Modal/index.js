import React, { useState, useEffect } from "react";
import { bool, string } from "prop-types";
import { ModalHeader } from "reactstrap";
import { ModalS } from "./style";

const ModalRegistration = ({ isOpen, text }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => setModal(isOpen), [isOpen]);

  const toggle = () => setModal(!modal);

  return (
    <ModalS isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle} >
        {text}
      </ModalHeader>
    </ModalS>
  );
};

ModalRegistration.propTypes = {
  isOpen: bool,
  text: string
};

export default ModalRegistration;
