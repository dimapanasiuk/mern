import React, { useState } from "react";
import {
  Input,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { array, bool, func, string } from "prop-types";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import theme from "style/theme";

const ModalsEdit = ({ isOpen, toggle, place, desc, placeId, places }) => {
  const [descTextAria, setDescTextAria] = useState(desc);

  const { t } = useTranslation();

  const changeHandler = (e) => {
    setDescTextAria(e.target.value);
  };

  const saveForAllHandler = () => {
    console.log('placeId', placeId);
    console.log('places', places);

    toggle();
    const mapInfo = { place, oldValue: desc, newValue: descTextAria }

    axios.patch("/updateDesc", { mapInfo })
      .then(data => console.log('updateDesc data', data))
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
        <Button color={theme.secondary} onClick={saveForAllHandler}>
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
  places: array,
};

const mapStateToProps = (state) => {
  return { places: state.getPlaceDataReducer };
};

export default connect(mapStateToProps)(ModalsEdit);
