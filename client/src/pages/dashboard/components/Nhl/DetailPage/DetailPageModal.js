import React from "react";
import emoji from "emoji-dictionary";
import { ModalBody, Modal, ModalHeader } from "reactstrap";
import styled from "styled-components";
import { any, func } from "prop-types";

const ModalStyle = styled(Modal)`
  top: 20%;
`;

const DetailPageModal = ({ alertData, modal, onShowModal }) => {
  return (
    <ModalStyle isOpen={modal} toggle={onShowModal}>
      <ModalHeader toggle={onShowModal}>
        {alertData.fullName} &nbsp; {emoji.getUnicode(":boy:")}
      </ModalHeader>
      <ModalBody>
        <h5>home country, {alertData.birthCountry}</h5>
        <h5>home city, {alertData.birthCity}</h5>
        <h5>birthDate, {alertData.birthDate}</h5>
        <h5>Age {alertData.currentAge}</h5>
        <h5>Height {alertData.height}</h5>
        <h5>Weigh {alertData.weight}</h5>
        <h5>Roster Status {alertData.rosterStatus}</h5>
        <h5>Shoots Catches {alertData.shootsCatches}</h5>
      </ModalBody>
    </ModalStyle>
  );
};

DetailPageModal.propTypes = {
  alertData: any,
  modal: any,
  onShowModal: func,
};

export default DetailPageModal;
