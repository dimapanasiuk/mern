import React, { useState, useEffect } from "react";
import {
  Input,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { bool, func, string } from "prop-types";
import { useTranslation } from "react-i18next";
import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import theme from "style/theme";

const ModalsEdit = ({ isOpen, toggle, place, desc = 10 }) => {
  const { t } = useTranslation();
  const [descTextAria, setDescTextAria] = useState(desc);

  useEffect(() => {
    setDescTextAria(desc);
  }, [desc]);

  const changeHandler = (e) => {
    setDescTextAria(e.target.value);
  };

  const saveForAllHandler = () => {
    toggle();
    const mapInfo = { place, oldValue: desc, newValue: descTextAria }

    axios.patch("/updateDesc", { mapInfo })
      .catch(e => console.log('updateDesc error', e))
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{place}</ModalHeader>

      <ModalBody>
        <Input type="textarea" value={descTextAria} onChange={changeHandler} />
      </ModalBody>

      <ModalFooter>
        <Button outline color={theme.success} onClick={saveForAllHandler}>
          {t("Save")}
        </Button>{" "}
        <Button color={theme.secondary} onClick={toggle}>
          {t("Cancel")}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ModalsEdit.propTypes = {
  isOpen: bool,
  toggle: func,
  place: string,
  desc: string,
};

export default ModalsEdit;

