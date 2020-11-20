import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { bool, func, string } from "prop-types";
import { useTranslation } from "react-i18next";

const ModalsEdit = ({ isOpen, toggle, place, desc, placeId }) => {
  console.log("placeId", placeId);

  const { t } = useTranslation();
  const saveHandler = () => {
    console.log("save handler");
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{place}</ModalHeader>
      <ModalBody>{desc}</ModalBody>
      <ModalFooter>
        <Button outline color="success" onClick={toggle}>
          {t("Save")}
        </Button>{" "}
        <Button
          color="secondary"
          onClick={() => {
            toggle();
            saveHandler();
          }}
        >
          {t("Cancel")}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ModalsEdit.propTypes = {
  isOpen: bool,
  toggle: func,
  placeId: string,
  place: string,
  desc: string,
};

export default ModalsEdit;
