import React, { useEffect, useState } from "react";
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

// eslint-disable-next-line import/no-unresolved
import theme from "style/theme";

const ModalsEdit = ({ isOpen, toggle, place, desc, placeId, places }) => {
  const [descTextAria, setDescTextAria] = useState(desc);
  const [othPlaces, setOthPlaces] = useState([]);

  useEffect(() => {
    const otherPlaces = places.filter((item) => item.id !== placeId);
    setOthPlaces(otherPlaces);
  }, [placeId]);

  const { t } = useTranslation();

  const saveHandler = () => {
    console.log("save handler", othPlaces);
  };

  const changeHandler = (e) => {
    setDescTextAria(e.target.value);
  };

  const saveForAllHandler = () => {
    toggle();
    saveHandler();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{place}</ModalHeader>

      <ModalBody>
        <Input type="textarea" value={descTextAria} onChange={changeHandler} />
      </ModalBody>

      <ModalFooter>
        <Button outline color={theme.success} onClick={toggle}>
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
