import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { bool, func, string } from "prop-types";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { connect, useDispatch } from "react-redux";

import theme from "style/theme";
import sendMapFeedback from "store/sendMapFeedback/actions";
import { ModalS } from "./style";

const ModalsEdit = ({ isOpen, toggle, place, desc = 10 }) => {
  const { t } = useTranslation();
  const [descTextAria, setDescTextAria] = useState(desc);

  const dispatch = useDispatch();

  useEffect(() => {
    setDescTextAria(desc);
  }, [desc]);

  const changeHandler = (e) => {
    setDescTextAria(e.target.value);
  };

  const saveForAllHandler = () => {
    toggle();
    const mapInfo = { place, oldValue: desc, newValue: descTextAria };

    axios.patch("/updateDesc", { mapInfo })
      .then(data => data.data ? dispatch(sendMapFeedback(mapInfo)) : null)
      .catch(console.error);
  };

  return (
    <ModalS isOpen={isOpen} toggle={toggle}>
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
    </ModalS>
  );
};

ModalsEdit.propTypes = {
  isOpen: bool,
  toggle: func,
  place: string,
  desc: string,
};

export default connect()(ModalsEdit);
